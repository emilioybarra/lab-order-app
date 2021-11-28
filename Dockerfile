# Dockerfile
FROM node:14

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# copy the app, note .dockerignore
COPY . /usr/src/app/

RUN npm install
RUN npm run build

CMD [ "npm", "start" ]
