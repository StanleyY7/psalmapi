FROM node:16-alpine as build
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
CMD [ "node", "index.js" ]

