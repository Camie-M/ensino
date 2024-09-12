var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserRepository } from '../repositories/UserRepository';
const userRepository = new UserRepository();
export class UserController {
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, role } = req.body;
                const user = yield userRepository.create(username, role);
                res.status(201).json(user);
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to create user', error });
            }
        });
    }
    static getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userRepository.findAll();
                res.status(200).json(users);
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to retrieve users', error });
            }
        });
    }
    static getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userRepository.findById(req.params.id);
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).json({ message: 'User not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to retrieve user', error });
            }
        });
    }
    static editUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield userRepository.update(req.params.id, req.body);
                if (updatedUser) {
                    res.status(200).json(updatedUser);
                }
                else {
                    res.status(404).json({ message: 'User not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to update user', error });
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const success = yield userRepository.delete(req.params.id);
                if (success) {
                    res.status(200).json({ message: 'User deleted successfully' });
                }
                else {
                    res.status(404).json({ message: 'User not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to delete user', error });
            }
        });
    }
}
