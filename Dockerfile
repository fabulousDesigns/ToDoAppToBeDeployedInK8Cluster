# Use a valid Node.js version
FROM node:16-alpine3.11 AS build
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm i
# Copy application source code
COPY . .
# Build your Nest.js app
RUN npm run build
# Second stage for the final image
FROM node:16-alpine3.11
# Set the working directory in the final image
WORKDIR /app
# Copy files from the build stage
COPY --from=build /app .
# Expose port 9090
EXPOSE 6060
# Command to start the app in production
CMD ["npm", "run", "start:prod"]
