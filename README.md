## Node + Postgres + Nextjs Starter

### Requirements

- [Install Docker](https://docs.docker.com/engine/install/)
- [Install node](https://nodejs.org/en/download/prebuilt-installer/current)
- [Install node version manager (nvm)](https://github.com/nvm-sh/nvm) \*Optional

### About this repository

This repo will spin up the following services:

- Node server that includes
  - TypeScript
  - GraphQL via postgraphile

- NextJS service that includes
  - Typescript
  - Tailwindcss
  - Codegen generated GraphQL schema types
  - Cypress + Jest + Testing-Library for testing

- PostgreSQL service

- Docker containerization with profiles to allow for targeted development

### Getting started

1. Copy `.env.exmaple` into `.env` and update any missing values
2. Install frontend dependencies - Follow instructions in `/frontend/README.md`
3. Install backend packages - Follow instructions in `/backend/README.md`
4. Confirm `docker-compose.yml` works:

```bash
docker build
```

5. Docker Profiles have been set up for the frontend and backend directories. The db is always configured to run. Choose which best suits your development requirements:

- To spin up nextapp and db only: `docker compose --profile nextapp up`
- To spin up backend and db only: `docker compose --profile backend up`
- To spin up the whole app: `docker compose --profile backend --profile nextapp up`

If you want to run these in a detached state, you can append the `-d` flag to the end of the commands above, which will free up the terminal window.

**Note: You can also skip Docker and spin each directory in a separate terminal, if desired.**

- For frontend dev: `cd frontend && yarn dev`
- For backend dev: `cd backend && yarn dev`
- Ensure you have postgres instance setup!

### TODO

- [] extract types from postgraphile
- [] integrate graphql on frontend
- [] backend testing
- [] next-auth for sso ?
