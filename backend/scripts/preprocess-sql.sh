# This file, initially `preprocess-sql.ts` was converted to a bash script for easier use in the Dockerfile

# import { readFileSync, writeFileSync } from 'fs';
# import { join, resolve } from 'path';

# import { config } from 'dotenv';

# // Load environment variables from .env file
# config({ path: resolve(__dirname, '../../.env') });

# const dbName = process.env.DATABASE || 'default_db';

# // Read the SQL file
# const sqlFilePath = join(__dirname, '/sql/1-setup-database.sql');
# let sqlContent = readFileSync(sqlFilePath, 'utf-8');

# // Replace placeholders
# sqlContent = sqlContent.replace(/{{DB_NAME}}/g, dbName);

# // Save the processed SQL to a new file
# const processedFilePath = join(__dirname, '/sql/0-setup-processed.sql');
# writeFileSync(processedFilePath, sqlContent);

#!/bin/bash

set -e

# Load environment variables from .env file
export $(grep -v '^#' ../.env | xargs)

# Default database name if not set in .env
DB_NAME=${DATABASE:-default_db}

# Paths to SQL files
SQL_FILE_PATH="$(dirname "$0")/sql/1-setup-database.sql"
PROCESSED_FILE_PATH="$(dirname "$0")/sql/0-setup-processed.sql"

# Read the SQL file
if [ ! -f "$SQL_FILE_PATH" ]; then
  echo "SQL file not found: $SQL_FILE_PATH"
  exit 1
fi

# Replace placeholders in SQL file
sed "s/{{DB_NAME}}/$DB_NAME/g" "$SQL_FILE_PATH" > "$PROCESSED_FILE_PATH"

echo "Processed SQL file saved to $PROCESSED_FILE_PATH"
