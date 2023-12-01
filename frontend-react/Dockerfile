# Use an official Node.js runtime as a base image
FROM node:21-alpine3.17

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

EXPOSE 8080

# Command to run your application
CMD ["npm", "run", "dev"]
