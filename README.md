## Go + Postgres + Nextjs Starter

### Requirements

- [Install Docker](https://docs.docker.com/engine/install/)
- [Install node](https://nodejs.org/en/download/prebuilt-installer/current)
- [Install node version manager (nvm)](https://github.com/nvm-sh/nvm) \*Optional

### Getting started

1. Install frontend dependencies:

```bash
cd frontend
yarn
```

2. Install backend packages:

```bash
cd backend
yarn
```

3. Confirm `docker-compose.yml` works:

```bash
docker build
```

4. Docker Profiles have been set up for the frontend and backend directories. The db is always configured to run. Choose which best suits your development requirements:

- To spin up nextapp and db only: `docker compose --profile nextapp up`
- To spin up backend and db only: `docker compose --profile backend up`
- To spin up the whole app: `docker compose --profile backend --profile nextapp up`

If you want to run these in a detached state, you can append the `-d` flag to the end of the commands above, which will free up the terminal window.

5. Spin up your working directory in a separate terminal

- For frontend dev: `cd frontend && yarn dev`
- For backend dev: `cd backend && air`

### TODO

- [] extract types from postgraphile
- [] integrate graphql on frontend
- [] backend testing
- [] next-auth for sso ?
