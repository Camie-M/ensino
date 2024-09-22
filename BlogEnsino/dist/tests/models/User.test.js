"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../config/database"));
const User_1 = require("../../models/User");
beforeAll(async () => {
    await database_1.default.sync({ force: true });
}, 10000); // Aumenta o timeout para 10 segundos
afterAll(async () => {
    await database_1.default.close(); // Fecha a conexão após os testes
});
describe('User Model', () => {
    it('should create a user successfully', async () => {
        const user = await User_1.User.create({ username: 'testUser', role: 'admin' });
        expect(user).toHaveProperty('id');
        expect(user.username).toBe('testUser');
        expect(user.role).toBe('admin');
    }, 10000); // Aumentando o timeout para 10 segundos    
});
