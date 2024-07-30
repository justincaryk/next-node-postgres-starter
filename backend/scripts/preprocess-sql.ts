import { readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

import { config } from 'dotenv';

// Load environment variables from .env file
config({ path: resolve(__dirname, '../../.env') });

const dbName = process.env.DATABASE || 'default_db';

// Read the SQL file
const sqlFilePath = join(__dirname, '/sql/1-setup-database.sql');
let sqlContent = readFileSync(sqlFilePath, 'utf-8');

// Replace placeholders
sqlContent = sqlContent.replace(/{{DB_NAME}}/g, dbName);

// Save the processed SQL to a new file
const processedFilePath = join(__dirname, '/sql/0-setup-processed.sql');
writeFileSync(processedFilePath, sqlContent);
