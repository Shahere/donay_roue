FROM node:23-alpine

RUN mkdir /roue

WORKDIR /roue

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json .

# Install dependencies
RUN npm install

RUN chmod -R 755 /roue


COPY . .

# ENV NODE_ENV=production

# Command to start the application
CMD ["npm", "run", "start"]