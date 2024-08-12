-- Ensure roles exist or create them if they don't
DO
$do$
BEGIN
    IF EXISTS (
        SELECT FROM pg_catalog.pg_roles
        WHERE rolname = 'role_user') THEN

        RAISE NOTICE 'Role "role_user" already exists. Skipping.';
    ELSE
        CREATE ROLE role_user;
    END IF;
END
$do$;

DO
$do$
BEGIN
    IF EXISTS (
        SELECT FROM pg_catalog.pg_roles
        WHERE rolname = 'role_admin') THEN

        RAISE NOTICE 'Role "role_admin" already exists. Skipping.';
    ELSE
        CREATE ROLE role_admin;
    END IF;
END
$do$;

DO
$do$
BEGIN
    IF EXISTS (
        SELECT FROM pg_catalog.pg_roles
        WHERE rolname = 'anonymous_user') THEN

        RAISE NOTICE 'Role "anonymous_user" already exists. Skipping.';
    ELSE
        CREATE ROLE anonymous_user;
    END IF;
END
$do$;

-- Ensure extensions exist or create them if they don't
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Define types
CREATE TYPE user_role AS ENUM ('ADMIN', 'USER');

-- Create or update tables
CREATE TABLE IF NOT EXISTS public.user (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    password text,
    email varchar(150) NOT NULL,
    first_name varchar(75),
    last_name varchar(75),
    role user_role DEFAULT 'USER',
    CONSTRAINT core_email_key UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS public.admin (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES public.user (id),
    CONSTRAINT core_employee_user_id_key UNIQUE (user_id)
);

-- Set row-level security
ALTER TABLE public.user ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin ENABLE ROW LEVEL SECURITY;

-- Drop and recreate policies
DO
$do$
BEGIN
    -- Drop policy if it exists
    IF EXISTS (
        SELECT 1
        FROM pg_policy
        WHERE polname = 'policy_admins'
    ) THEN
        EXECUTE 'DROP POLICY policy_admins ON public.admin;';
        RAISE NOTICE 'Policy "policy_admins" dropped.';
    END IF;

    -- Create the policy
    EXECUTE 'CREATE POLICY policy_admins ON public.admin
        FOR SELECT TO role_admin
        USING (EXISTS (
            SELECT 1
            FROM public.user
            WHERE id = user_id AND email = CURRENT_USER
        ));';
    RAISE NOTICE 'Policy "policy_admins" created.';
END
$do$;

CREATE POLICY policy_users ON public.user
    FOR SELECT TO role_user
    USING (email = CURRENT_USER);

-- Define functions
CREATE TYPE public.jwt_token AS (
    ROLE text, -- db role of the user
    exp integer, -- expiry date as the unix epoch
    user_id uuid, -- db identifier of the user
    email varchar(150), -- username for sign in, email ideally
    first_name varchar(75), -- display name first
    last_name varchar(75) -- display name last
);

CREATE TYPE public.signup_result AS (
    status text,
    jwt_token public.jwt_token
);

CREATE OR REPLACE FUNCTION public.signup (input_email varchar(150), input_password varchar(50))
RETURNS public.signup_result AS $$
DECLARE
    result varchar DEFAULT NULL;
    user_id uuid;
    jwt_token public.jwt_token;
    signup_result public.signup_result;
BEGIN
    -- Check if the email already exists
    SELECT email
    FROM public.user
    WHERE email = input_email INTO result;

    IF FOUND THEN
        -- Email is in use
        signup_result.status := 'email in use';
        signup_result.jwt_token := NULL;
    ELSE
        -- Email is not in use, create the user
        INSERT INTO public.user (email, password)
        VALUES (input_email, crypt(input_password, gen_salt('bf')))
        RETURNING id INTO user_id;
        
        -- Generate the JWT token
        SELECT
            'role_user' AS role, -- Replace with actual role if needed
            extract(epoch from now() + interval '365 days')::integer AS exp, -- Expiry time (1 hour from now)
            user_id,
            input_email AS email,
            '' AS first_name, -- Replace with actual first name if needed
            '' AS last_name -- Replace with actual last name if needed
        INTO jwt_token;

        signup_result.status := 'ok';
        signup_result.jwt_token := jwt_token;
    END IF;

    RETURN signup_result;
END
$$ LANGUAGE plpgsql VOLATILE SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION public.signup (input_email varchar(150), input_password varchar(50))
TO anonymous_user;

CREATE OR REPLACE FUNCTION public.signin (input_email text, input_password text)
RETURNS public.jwt_token AS $$
DECLARE
    account public.user;
    admin_acc public.admin;
    role text;
BEGIN
    -- Retrieve user account
    SELECT *
    FROM public.user
    WHERE email = input_email INTO account;

    -- Retrieve admin account if it exists
    SELECT *
    FROM public.admin
    WHERE user_id = account.id INTO admin_acc;

    -- Determine the role based on the existence of admin account
    IF admin_acc.user_id IS NOT NULL THEN
        role = 'role_admin';
    ELSE
        role = 'role_user';
    END IF;

    -- Validate password and return JWT token if valid
    IF account.password = crypt(input_password, account.password) THEN
        RETURN ROW(
            role, -- text
            extract(epoch FROM now() + interval '365 days')::integer, -- expiry as integer
            account.id, -- uuid
            account.email, -- varchar(150)
            account.first_name, -- varchar(75)
            account.last_name -- varchar(75)
        )::public.jwt_token;
    ELSE
        RETURN NULL;
    END IF;
END
$$ LANGUAGE plpgsql VOLATILE SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION public.signin (input_email text, input_password text)
TO anonymous_user;