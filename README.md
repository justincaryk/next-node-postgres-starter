## Node + Postgres + Nextjs Starter

### Requirements

- [Install Docker](https://docs.docker.com/engine/install/)
- [Install Node](https://nodejs.org/en/download/prebuilt-installer/current)

### About this repository

This repo will spin up the following services:

- Node server that includes

  - TypeScript
  - GraphQL via Postgraphile

- NextJS service that includes

  - Typescript
  - Tailwindcss
  - Codegen generated GraphQL schema types
  - Cypress + Jest + Testing-Library for testing

- PostgreSQL service

- Docker containerization with profiles to allow for targeted development

### Getting started

1. Copy `.env.exmaple` into `.env`

```bash
cp .env.example .env
```

2. To spin up the whole app: `docker compose --profile backend --profile frontend up -d`

The `-d` flag runs Docker in a detached state, which will free up the terminal window.

3. Admin

To update a user to an admin, run the following SQL statements in your postgres instance:

```sql
UPDATE public.user
SET role = 'ADMIN'
WHERE id = [USER.ID];

INSERT INTO public.admin (user_id)
VALUES (USER_ID);
```

To access the admin view, simply nagivate to `localhost:3000/admin` while signed in with an admin account.

## Local Development

1. Copy `.env.exmaple` into `.env` and update any missing values
2. Install frontend dependencies - Follow instructions in `/frontend/README.md`
3. Install backend packages - Follow instructions in `/backend/README.md`
4. Confirm `docker-compose.yml` works:

```bash
docker build
```

5. Docker Profiles have been set up for the frontend and backend directories. The db is always configured to run. Choose which best suits your development requirements:

- To spin up nextapp and db only: `docker compose --profile template-frontend up`
- To spin up backend and db only: `template-postgres`
- To spin up the whole app: `docker compose --profile template-backend --profile template-frontend up`

If you want to run these in a detached state, you can append the `-d` flag to the end of the commands above, which will free up the terminal window.

**Note: You can also skip Docker and spin each directory in a separate terminal, if desired.**

- For frontend dev: `cd frontend && yarn dev`
- For backend dev: `cd backend && yarn dev`
- Ensure you have postgres instance setup!

### TOOD

- [] allow user to add first name, last name + consume on front end
- [] inputs
  - [] checkbox
  - [] text area
  - [] update id pattern. falling back on name is not safe given multiple forms with overlapping names might be rendered in the same DOM 
- [] style the loading component
- [] refactor dashboard PAGE into readable components
- [] audit `useState`: "should it be in an atom"?
- [] improve test coverage
- [] date input validation - make it sensible
- [] admin view
  - [] Restyle at a minimum
  - [] Add search feature
  - [] Top level options that allow the admin to decide how to consume the data (eg. drill down by user, record, or pet)
