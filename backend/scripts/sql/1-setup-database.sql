CREATE EXTENSION dblink;
-- Check if the database exists
DO $do$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM pg_database
        WHERE datname = 'postgres'
    ) THEN
        RAISE NOTICE 'Database "postgres" already exists. Skipping creation.';
    ELSE
        PERFORM dblink_exec('dbname=postgres', 'CREATE DATABASE postgres');
    END IF;
END $do$;
