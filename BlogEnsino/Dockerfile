# Use a imagem Node.js oficial como base
FROM node:20-slim

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

RUN npm install -g ts-node

COPY . .

EXPOSE 3001

CMD ["ts-node", "src/server.ts"]
