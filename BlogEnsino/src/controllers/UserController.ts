import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';

const userRepository = new UserRepository();

export class UserController {
    static async createUser(req: Request, res: Response): Promise<void> {
        try {
            const { username, role } = req.body;
            const user = await userRepository.create(username, role);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Failed to create user', error });
        }
    }

    static async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await userRepository.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Failed to retrieve users', error });
        }
    }

    static async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const user = await userRepository.findById(req.params.id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to retrieve user', error });
        }
    }

    static async editUser(req: Request, res: Response): Promise<void> {
        try {
            const updatedUser = await userRepository.update(req.params.id, req.body);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to update user', error });
        }
    }

    static async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const success = await userRepository.delete(req.params.id);
            if (success) {
                res.status(200).json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to delete user', error });
        }
    }
}
