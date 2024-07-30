CREATE EXTENSION dblink;
-- Check if the database exists
DO $do$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM pg_database
        WHERE datname = 'your_database_name'
    ) THEN
        RAISE NOTICE 'Database "your_database_name" already exists. Skipping creation.';
    ELSE
        PERFORM dblink_exec('dbname=postgres', 'CREATE DATABASE your_database_name');
    END IF;
END $do$;
