FROM node:20-slim

WORKDIR /src

ARG PORT=3001

ENV PORT=$PORT

EXPOSE $PORT

COPY . .

RUN npm install

ENTRYPOINT npm start


