# FROM postgres:16

# ENV POSTGRES_USER=postgres
# ENV POSTGRES_PASSWORD=tech123
# ENV POSTGRES_DB=challenge2
# COPY . docker-entrypoint-initdb.d
# # COPY challenge2.sql /docker-entrypoint-initdb.d/

# EXPOSE 5434
# CMD ["postgres", "-c", "port=5434"]

FROM node:20-slim

WORKDIR /EnsinoBackend/src

ARG PORT=3001

ENV PORT=$PORT

EXPOSE $PORT

COPY . .

RUN npm install

ENTRYPOINT npm start



