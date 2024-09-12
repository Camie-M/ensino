var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Pool } from 'pg';
import databaseConfig from '../config/databaseConfig';
class Database {
    constructor() {
        this.pool = new Pool(databaseConfig);
        this.connect();
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.pool.connect();
                console.log('Database connected successfully');
            }
            catch (error) {
                console.error('Error connecting to the database', error);
                throw new Error('Failed to connect to the database');
            }
        });
    }
    query(text, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.pool.query(text, params);
                return result;
            }
            catch (error) {
                console.error('Error executing query', error);
                throw new Error('Failed to execute query');
            }
        });
    }
}
export const database = new Database();
