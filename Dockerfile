# We want to use the same version everywhere
# (I'm not that interested in the Alpine or Slim versions for now.)
FROM node:11.13.0

ENV NODE_ENV development

# The WORKDIR is kind of like the main working folder for the project
WORKDIR /app

# First, we want to install all the decpendencies in our working directory
COPY package.json /app
RUN npm install

# And then copy the rest of the application, and run it
COPY . /app
CMD ["npm", "start"]
