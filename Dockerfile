# Step 1: Use a lightweight Node.js base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the application files (including HTML, CSS, JS)
COPY . .

# Step 5: Expose the port your application will use
EXPOSE 3000

# Step 6: Define the default command to start your app
CMD ["npm", "start"]

