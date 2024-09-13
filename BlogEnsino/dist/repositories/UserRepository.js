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
        const user = await User_1.User.findByPk(id);
        if (user) {
            return user.update(updatedFields);
        }
        return null;
    }
    async delete(id) {
        const user = await User_1.User.findByPk(id);
        if (user) {
            await user.destroy();
            return true;
        }
        return false;
    }
}
exports.UserRepository = UserRepository;
