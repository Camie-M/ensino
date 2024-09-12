"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const UserEntity_1 = require("../entities/UserEntity");
const uuid_1 = require("uuid");
class UserRepository {
    constructor() {
        this.users = [];
    }
    async findAll() {
        return this.users;
    }
    async findById(id) {
        const user = this.users.find(user => user.id === id);
        return user || null;
    }
    async create(username, role) {
        const newUser = new UserEntity_1.UserEntity(username, role, (0, uuid_1.v4)());
        this.users.push(newUser);
        return newUser;
    }
    async update(id, updatedFields) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedFields, updatedAt: new Date() };
            return this.users[userIndex];
        }
        return null;
    }
    async delete(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            return true;
        }
        return false;
    }
}
exports.UserRepository = UserRepository;
