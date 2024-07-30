import { readdirSync, readFileSync } from 'fs';
import { join, resolve } from 'path';

import { config } from 'dotenv';
import { Client } from 'pg';

// Load environment variables from .env file
config({ path: resolve(__dirname, '../../.env') });

// PostgreSQL client configuration
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.DATABASE,
});

// Directory containing SQL files
const sqlDirectory = join(__dirname, 'sql');

// Function to execute SQL files
const executeSqlFiles = async () => {
  try {
    await client.connect();

    // Read all SQL files from the directory
    const files = readdirSync(sqlDirectory);

    // Filter and sort files by their prefix number
    const sortedFiles = files
      .filter((file) => file.endsWith('.sql'))
      .sort((a, b) => {
        const numA = parseInt(a.split('_')[0], 10);
        const numB = parseInt(b.split('_')[0], 10);
        return numA - numB;
      });

    for (const file of sortedFiles) {
      const filePath = join(sqlDirectory, file);
      const sql = readFileSync(filePath, 'utf-8');

      // Execute the SQL script
      console.log(`Executing ${file}...`);
      await client.query(sql);
      console.log(`${file} executed successfully.`);
    }

    console.log('All SQL scripts executed successfully.');
  } catch (err) {
    console.error('Error running setup scripts:', err);
  } finally {
    await client.end();
  }
};

executeSqlFiles();
