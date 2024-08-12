#!/bin/bash
set -e

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."
until pg_isready -h $DB_HOST -p $PG_PORT -U $PG_USER; do
  echo "PostgreSQL is not ready yet..."
  sleep 2
done

echo "PostgreSQL is ready."

echo "Password: "
echo $PG_PASSWORD
export PGPASSWORD=$PG_PASSWORD

# Run setup and preprocess scripts
echo "Running setup and preprocess scripts..."
./scripts/preprocess-sql.sh
./scripts/run-setup.sh

# Execute the main command (your application start command)
exec "$@"