"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const pg_1 = require("pg");
const databaseConfig_1 = __importDefault(require("../config/databaseConfig"));
class Database {
    constructor() {
        this.pool = new pg_1.Pool(databaseConfig_1.default);
        this.connect();
    }
    async connect() {
        try {
            await this.pool.connect();
            console.log('Database connected successfully');
        }
        catch (error) {
            console.error('Error connecting to the database', error);
            throw new Error('Failed to connect to the database');
        }
    }
    async query(text, params) {
        try {
            const result = await this.pool.query(text, params);
            return result;
        }
        catch (error) {
            console.error('Error executing query', error);
            throw new Error('Failed to execute query');
        }
    }
}
exports.database = new Database();
