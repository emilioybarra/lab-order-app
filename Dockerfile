# Dockerfile
FROM node:lts

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy the app, note .dockerignore
ADD . /usr/src/app/

RUN npm install
RUN npm run build

CMD [ "npm", "start" ]
