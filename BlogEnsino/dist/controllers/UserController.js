"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
const userRepository = new UserRepository_1.UserRepository();
class UserController {
    static async createUser(req, res) {
        try {
            const { username, role } = req.body;
            const user = await userRepository.create(username, role);
            res.status(201).json(user);
        }
        catch (error) {
            console.error('Erro ao criar o usuario:', error);
            res.status(500).json({ message: 'Erro ao criar o usuario:', error: error });
        }
    }
    static async getAllUsers(req, res) {
        try {
            const users = await userRepository.findAll();
            res.status(200).json(users);
        }
        catch (error) {
            console.error('Erro Buscar por Usuarios:', error);
            res.status(500).json({ message: 'Erro Buscar por Usuarios:', error: error });
        }
    }
    static async getUserById(req, res) {
        try {
            const user = await userRepository.findById(req.params.id);
            if (user) {
                res.status(200).json(user);
            }
            else {
                res.status(404).json({ message: 'Usuario não encontrado' });
            }
        }
        catch (error) {
            console.error('Erro ao buscar o usuario:', error);
            res.status(500).json({ message: 'Erro ao buscar o usuario:', error: error });
        }
    }
    static async editUser(req, res) {
        try {
            const updatedUser = await userRepository.update(req.params.id, req.body);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            }
            else {
                res.status(404).json({ message: 'Usuario não encontrado' });
            }
        }
        catch (error) {
            console.error('Erro ao buscar Usuario', error);
            res.status(500).json({ message: 'Erro ao buscar Usuario', error: error });
        }
    }
    static async deleteUser(req, res) {
        try {
            const success = await userRepository.delete(req.params.id);
            if (success) {
                res.status(200).json({ message: 'Usuario deletado com sucesso' });
            }
            else {
                res.status(404).json({ message: 'Usuario não encontrado' });
            }
        }
        catch (error) {
            console.error('Erro ao deletar usuario:', error);
            res.status(500).json({ message: 'Erro ao deletar usuario:', error: error });
        }
    }
}
exports.UserController = UserController;
