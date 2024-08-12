FROM node:20-alpine AS build

ENV NODE_ENV=docker

# Install bash and PostgreSQL client tools
RUN apk add --no-cache bash postgresql-client

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Make sure the entrypoint script and other scripts are executable
RUN chmod +x ./scripts/preprocess-sql.sh ./scripts/run-setup.sh ./docker-entrypoint.sh

# Build the application
RUN yarn build

# Expose the application port
EXPOSE 5000

# Set the custom entrypoint script
ENTRYPOINT ["/bin/bash", "/usr/src/app/docker-entrypoint.sh"]

# Command to run the application (can be overridden by entrypoint script)
CMD ["node", "dist/src/server.js"]
