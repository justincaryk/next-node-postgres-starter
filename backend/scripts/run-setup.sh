# This file, initially `run-setup.ts` was converted to a bash script for easier use in the Dockerfile

# import { readdirSync, readFileSync, unlinkSync } from 'fs';
# import { join, resolve } from 'path';

# import { config } from 'dotenv';
# import { Client } from 'pg';

# // Load environment variables from .env file
# config({ path: resolve(__dirname, '../../.env') });

# // PostgreSQL client configuration
# const client = new Client({
#   host: process.env.DB_HOST,
#   user: process.env.PG_USER,
#   password: process.env.PG_PASSWORD,
#   database: process.env.DATABASE,
# });

# // Directory containing SQL files
# const sqlDirectory = join(__dirname, 'sql');
# const processedFilePath = join(sqlDirectory, '0-setup-processed.sql');

# // Function to execute SQL files
# const executeSqlFiles = async () => {
#   try {
#     await client.connect();

#     // Read all SQL files from the directory
#     const files = readdirSync(sqlDirectory);

#     // Exclude the 1-setup-database.sql file
#     const filteredFiles = files.filter((file) => file !== '1-setup-database.sql');
    
#     // Ensure the processed file is in the list
#     if (!filteredFiles.includes('0-setup-processed.sql')) {
#       throw new Error('Processed file not found in the directory.');
#     }

#     // Sort files by their prefix number
#     const sortedFiles = filteredFiles
#       .filter((file) => file.endsWith('.sql'))
#       .sort((a, b) => {
#         const numA = parseInt(a.split('_')[0], 10);
#         const numB = parseInt(b.split('_')[0], 10);
#         return numA - numB;
#       });

#     for (const file of sortedFiles) {
#       const filePath = join(sqlDirectory, file);
#       const sql = readFileSync(filePath, 'utf-8');

#       // Execute the SQL script
#       console.log(`Executing ${file}...`);
#       await client.query(sql);
#       console.log(`${file} executed successfully.`);
#     }

#     // Remove the temporary processed file
#     if (files.includes('0-setup-processed.sql')) {
#       unlinkSync(processedFilePath);
#       console.log('Temporary processed file removed.');
#     }

#     console.log('All SQL scripts executed successfully.');
#   } catch (err) {
#     console.error('Error running setup scripts:', err);
#   } finally {
#     await client.end();
#   }
# };

# executeSqlFiles();

#!/bin/bash

set -e

# Load environment variables from .env file
export $(grep -v '^#' ../.env | xargs)

# PostgreSQL client configuration
PGHOST=$PG_HOST
PGUSER=$PG_USER
PGPASSWORD=$PG_PASSWORD
PGDATABASE=$DATABASE

# Directory containing SQL files
SQL_DIRECTORY="$(dirname "$0")/sql"
PROCESSED_FILE_PATH="$SQL_DIRECTORY/0-setup-processed.sql"

# Function to execute SQL files
execute_sql_files() {
  # Check if processed file exists
  if [ ! -f "$PROCESSED_FILE_PATH" ]; then
    echo "Processed file not found in the directory."
    exit 1
  fi

  # Read all SQL files from the directory
  files=$(ls "$SQL_DIRECTORY"/*.sql 2>/dev/null)

  # Exclude the 1-setup-database.sql file
  files=$(echo "$files" | grep -v '1-setup-database.sql')

  # Sort files by their prefix number
  sorted_files=$(echo "$files" | sort -t'_' -k1,1n)

  for file in $sorted_files; do
    echo "Executing $(basename "$file")..."
    
    # psql -h /var/run/postgresql -p 5432 -U $PGUSER -d $PGDATABASE -f "$file"
    psql -h novellia-postgres -p 5432 -U $PGUSER -d $PGDATABASE -f "$file"
    
    echo "$(basename "$file") executed successfully."
  done

  echo "Sorted Files"
  echo $sorted_files
  echo "Processed file path"
  echo $PROCESSED_FILE_PATH
  
  # Remove the temporary processed file
  if [ -f "$PROCESSED_FILE_PATH" ]; then
    rm "$PROCESSED_FILE_PATH"
    echo "Temporary processed file removed."
  fi

  echo "All SQL scripts executed successfully."
}

execute_sql_files
