"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../models/User");
class UserRepository {
    async findAll() {
        return User_1.User.findAll();
    }
    async findById(id) {
        return User_1.User.findByPk(id);
    }
    async create(username, role) {
        return User_1.User.create({ username, role });
    }
    async update(id, updatedFields) {
        try {
            const user = await User_1.User.findByPk(id);
            if (user) {
                return user.update(updatedFields);
            }
        }
        catch (error) {
            throw new Error(`Não foi possivel atualizar o user ${error}`);
        }
    }
    async delete(id) {
        try {
            const user = await User_1.User.findByPk(id);
            if (user) {
                user.destroy();
            }
            return user;
        }
        catch (error) {
            throw new Error(`Não foi deletar o user ${error}`);
        }
    }
}
exports.UserRepository = UserRepository;
