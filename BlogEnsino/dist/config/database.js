"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const env_1 = require("../env");
console.log('Database Config:', {
    name: env_1.env.DATABASE_NAME,
    user: env_1.env.DATABASE_USER,
    password: env_1.env.DATABASE_PASSWORD,
    host: env_1.env.DATABASE_HOST,
    port: env_1.env.DATABASE_PORT,
});
const sequelize = new sequelize_1.Sequelize(env_1.env.DATABASE_NAME, env_1.env.DATABASE_USER, env_1.env.DATABASE_PASSWORD, {
    host: env_1.env.DATABASE_HOST,
    dialect: 'postgres',
    port: parseInt(env_1.env.DATABASE_PORT, 10), // Converta a porta para número
});
exports.default = sequelize;
