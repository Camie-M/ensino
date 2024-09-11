FROM node:20-slim

WORKDIR /app

COPY package.json .
RUN npm install

RUN npm install -g nodemon

COPY . .

ARG PORT=3001
ENV PORT=$PORT

EXPOSE $PORT

ENTRYPOINT ["nodemon", "./src/server.js"]
