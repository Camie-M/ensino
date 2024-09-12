"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../env");
const databaseConfig = {
    user: env_1.env.DATABASE_USER,
    host: env_1.env.DATABASE_HOST,
    database: env_1.env.DATABASE_NAME,
    password: env_1.env.DATABASE_PASSWORD,
    port: parseInt(env_1.env.DATABASE_PORT, 10),
    dialect: 'postgres',
};
exports.default = databaseConfig;
