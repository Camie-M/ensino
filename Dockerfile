FROM postgres:16

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=tech123
ENV POSTGRES_DB=challenge2
COPY . docker-entrypoint-initdb.d
# COPY challenge2.sql /docker-entrypoint-initdb.d/

EXPOSE 5434
CMD ["postgres", "-c", "port=5434"]
