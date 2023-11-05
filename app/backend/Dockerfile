FROM node:18.18.0-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

CMD [ "yarn", "dev"]
