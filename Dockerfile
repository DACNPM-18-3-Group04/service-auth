FROM node:16.15.0-alpine3.15

RUN mkdir -p /usr/src/backend-auth-service-app

WORKDIR /usr/src/backend-auth-service-app

COPY package.json /usr/src/backend-auth-service-app

RUN npm install

COPY . /usr/src/backend-auth-service-app

EXPOSE 50010

CMD [ "npm", "start" ]
