# Backend Service

This is a backend service built with Node.js, PostgreSQL, and PostGraphile. It provides a GraphQL API for interacting with the database.

## Project Structure

- `src/` - Source code for the backend application.
  - `server.ts` - Entry point for the server.
  - `postgraphile.ts` - Configuration for PostGraphile middleware.
  - `config/` - Configuration files (e.g., database connection settings).
  - `graphql/` - Custom GraphQL schema extensions and plugins (if any).

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) (v13 or higher recommended)
- Docker (if using Docker for development)

## Setup

1. Install dependencies
```bash
yarn
```
2. Give file write permission to the backend. This may only be an issue on mac/linux. Windows was not tested.
```bash
chmod +x ./scripts/run-setup.ts
```
3. Hydrate Postgres
```bash
yarn migrate
```
4. Start a postgres instance. You can initialize as desired. Just make sure to use the config setup in `root/.env`. Alternatively, you can use Docker by running:
```bash
cd ../
docker compose up
```
5. Start the service. 
```bash
yarn dev
```

The server will start and listen on port 5000 by default. You can access the GraphiQL interface at `http://localhost:5000/api/graphiql`.
