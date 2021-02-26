# Dockerfile
FROM node:lts

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy the app, note .dockerignore
ADD . /usr/src/app/

RUN npm install
RUN npm run build

ENV MONGO_DB_URI=mongodb+srv://emilio:Maw79708@cluster0.30uow.mongodb.net/lab-order

EXPOSE 3000

CMD [ "npm", "start" ]
