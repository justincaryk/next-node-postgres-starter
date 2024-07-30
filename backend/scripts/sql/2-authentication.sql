DO $do$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM pg_catalog.pg_roles
        WHERE rolname = 'role_user'
    ) THEN
        RAISE NOTICE 'Role "role_user" already exists. Skipping.';
    ELSE
        CREATE ROLE role_user;
    END IF;
END $do$;

DO $do$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM pg_catalog.pg_roles
        WHERE rolname = 'anonymous_user'
    ) THEN
        RAISE NOTICE 'Role "anonymous_user" already exists. Skipping.';
    ELSE
        CREATE ROLE anonymous_user;
    END IF;
END $do$;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE user_role AS ENUM ('admin', 'user');

CREATE TABLE public.user (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    PASSWORD text,
    user_name varchar(50) NOT NULL,
    ROLE user_role DEFAULT 'user',
    CONSTRAINT core_user_name_key UNIQUE (user_name)
);

CREATE TABLE public.admin (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES public.user (id),
    CONSTRAINT core_employee_user_id_key UNIQUE (user_id)
);

ALTER TABLE public.user ENABLE ROW LEVEL SECURITY;

ALTER TABLE public.admin ENABLE ROW LEVEL SECURITY;

CREATE POLICY policy_users ON public.admin
    FOR SELECT TO role_user
    USING (EXISTS (
        SELECT 1
        FROM public.user
        WHERE id = user_id AND user_name = CURRENT_USER
    ));

CREATE POLICY policy_user ON public.user
    TO role_user
    USING (user_name = CURRENT_USER);

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE OR REPLACE FUNCTION signup (email varchar(50), PASSWORD varchar(50))
RETURNS boolean AS $$
DECLARE
    result varchar DEFAULT NULL;
BEGIN
    SELECT user_name
    FROM public.user
    WHERE $1 = user_name INTO result;
    IF NOT found THEN
        INSERT INTO public.user (user_name, PASSWORD)
        VALUES ($1, crypt($2, gen_salt('bf')));
    END IF;
    RETURN TRUE;
END
$$ LANGUAGE plpgsql VOLATILE SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION public.signup (email varchar(50), PASSWORD varchar(50))
TO anonymous_user;

CREATE TYPE public.jwt_token AS (
    ROLE text,
    exp integer,
    user_id uuid,
    email text
);

CREATE OR REPLACE FUNCTION public.signin (email text, PASSWORD text)
RETURNS public.jwt_token AS $$
DECLARE
    account public.user;
    admin_acc public.admin;
    ROLE text;
BEGIN
    SELECT *
    FROM public.user AS a
    WHERE a.user_name = $1 INTO account;
    SELECT *
    FROM public.admin AS b
    WHERE account.id = user_id INTO admin_acc;
    IF admin_acc.user_id = account.id THEN
        ROLE = 'role_user';
    ELSE
        ROLE = 'role_user';
    END IF;
    IF account.password = crypt($2, account.password) THEN
        RETURN (ROLE,
                extract(epoch FROM now() + interval '365 days'),
                account.id,
                account.user_name)::public.jwt_token;
    ELSE
        RETURN NULL;
    END IF;
END;
$$ LANGUAGE plpgsql VOLATILE SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION public.signin (email text, PASSWORD text)
TO anonymous_user;
