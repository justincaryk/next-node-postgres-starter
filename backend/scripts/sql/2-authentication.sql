-- Ensure roles exist or create them if they don't
DO $do$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_catalog.pg_roles
        WHERE rolname = 'role_user'
    ) THEN
        CREATE ROLE role_user;
        RAISE NOTICE 'Role "role_user" created.';
    ELSE
        RAISE NOTICE 'Role "role_user" already exists. Skipping creation.';
    END IF;
END $do$;

DO $do$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_catalog.pg_roles
        WHERE rolname = 'anonymous_user'
    ) THEN
        CREATE ROLE anonymous_user;
        RAISE NOTICE 'Role "anonymous_user" created.';
    ELSE
        RAISE NOTICE 'Role "anonymous_user" already exists. Skipping creation.';
    END IF;
END $do$;

-- Ensure extensions exist or create them if they don't
DO $do$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_available_extensions
        WHERE name = 'uuid-ossp'
    ) THEN
        CREATE EXTENSION "uuid-ossp";
        RAISE NOTICE 'Extension "uuid-ossp" created.';
    ELSE
        RAISE NOTICE 'Extension "uuid-ossp" already exists. Skipping creation.';
    END IF;
END $do$;

DO $do$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_available_extensions
        WHERE name = 'pgcrypto'
    ) THEN
        CREATE EXTENSION pgcrypto;
        RAISE NOTICE 'Extension "pgcrypto" created.';
    ELSE
        RAISE NOTICE 'Extension "pgcrypto" already exists. Skipping creation.';
    END IF;
END $do$;

-- Define types
DO $do$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_type
        WHERE typname = 'user_role'
    ) THEN
        CREATE TYPE user_role AS ENUM ('admin', 'user');
        RAISE NOTICE 'Type "user_role" created.';
    ELSE
        RAISE NOTICE 'Type "user_role" already exists. Skipping creation.';
    END IF;
END $do$;

-- Create tables
CREATE TABLE IF NOT EXISTS public.user (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    password text,
    user_name varchar(50) NOT NULL,
    role user_role DEFAULT 'user',
    CONSTRAINT core_user_name_key UNIQUE (user_name)
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
DO $do$
BEGIN
    -- Drop policy if it exists
    IF EXISTS (
        SELECT 1
        FROM pg_policy
        WHERE polname = 'policy_users'
    ) THEN
        EXECUTE 'DROP POLICY policy_users ON public.admin;';
        RAISE NOTICE 'Policy "policy_users" dropped.';
    END IF;

    -- Create the policy
    EXECUTE 'CREATE POLICY policy_users ON public.admin
        FOR SELECT TO role_user
        USING (EXISTS (
            SELECT 1
            FROM public.user
            WHERE id = user_id AND user_name = CURRENT_USER
        ));';
    RAISE NOTICE 'Policy "policy_users" created.';
END $do$;

-- Define functions
CREATE OR REPLACE FUNCTION signup (email varchar(50), password varchar(50))
RETURNS boolean AS $$
DECLARE
    result varchar DEFAULT NULL;
BEGIN
    SELECT user_name
    FROM public.user
    WHERE email = user_name INTO result;
    IF NOT found THEN
        INSERT INTO public.user (user_name, password)
        VALUES (email, crypt(password, gen_salt('bf')));
    END IF;
    RETURN TRUE;
END
$$ LANGUAGE plpgsql VOLATILE SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION public.signup (email varchar(50), password varchar(50))
TO anonymous_user;

CREATE OR REPLACE FUNCTION public.signin (email text, password text)
RETURNS public.jwt_token AS $$
DECLARE
    account public.user;
    admin_acc public.admin;
    role text;
BEGIN
    SELECT *
    FROM public.user AS a
    WHERE a.user_name = email INTO account;
    SELECT *
    FROM public.admin AS b
    WHERE account.id = user_id INTO admin_acc;
    IF admin_acc.user_id = account.id THEN
        role = 'admin';
    ELSE
        role = 'user';
    END IF;
    IF account.password = crypt(password, account.password) THEN
        RETURN (role,
                extract(epoch FROM now() + interval '365 days'),
                account.id,
                account.user_name)::public.jwt_token;
    ELSE
        RETURN NULL;
    END IF;
END;
$$ LANGUAGE plpgsql VOLATILE SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION public.signin (email text, password text)
TO anonymous_user;
