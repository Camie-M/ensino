"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const UserEntity_1 = require("../entities/UserEntity");
const User_1 = require("../models/User");
class UserRepository {
    async findAll() {
        const users = await User_1.User.findAll();
        return users.map(user => new UserEntity_1.UserEntity(user.username, user.role, user.id));
    }
    async findById(id) {
        const user = await User_1.User.findByPk(id);
        if (user) {
            return new UserEntity_1.UserEntity(user.username, user.role, user.id);
        }
        return null;
    }
    async create(username, role) {
        const user = await User_1.User.create({ username, role });
        return new UserEntity_1.UserEntity(user.username, user.role, user.id);
    }
    async update(id, updatedFields) {
        try {
            const user = await User_1.User.findByPk(id);
            if (user) {
                const updatedUser = await user.update(updatedFields);
                return new UserEntity_1.UserEntity(updatedUser.username, updatedUser.role, updatedUser.id);
            }
            return null;
        }
        catch (error) {
            throw new Error(`Não foi possível atualizar o usuário: ${error}`);
        }
    }
    async delete(id) {
        try {
            const user = await User_1.User.findByPk(id);
            if (user) {
                await user.destroy();
                return new UserEntity_1.UserEntity(user.username, user.role, user.id);
            }
            return null;
        }
        catch (error) {
            throw new Error(`Não foi possível deletar o usuário: ${error}`);
        }
    }
}
exports.UserRepository = UserRepository;
