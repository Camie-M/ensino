"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(username, role, id) {
        this.id = id || '';
        this.username = username;
        this.role = role;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
exports.UserEntity = UserEntity;
