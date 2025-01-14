import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { AuthService } from '../services/AuthService';

const userService = new UserService();

export class UserController {

    static async createUser(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.authorization
            if (!token) {
                res.status(400).json({ message: "Token faltando" });
                return;
            }
            const { username, role, password } = req.body;
            const user = await userService.create(username, role, password,token);
            res.status(201).json(user);
        } catch (error) {
            if (error instanceof Error) {
              if (error.message === "Usuário sem permissão") {
                res.status(403).json({ message: "Usuário sem permissão" + error});
                return
              } else if (error.message === "Usuário não encontrado") {
                res.status(404).json({ message: "Usuário não encontrado" + error});
                return
              } else {
                res.status(500).json({ message: "Falha ao criar o Post" + error});
                return
              }
            }
          }
    }

    static async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await userService.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao Buscar por Usuarios:', error: error });
        }
    }

    static async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.authorization;
            const id = req.params.id;
            if(!token){
                throw new Error("Token invalido")
            }
            const user = await userService.findById(id, token)
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'Usuario não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar o usuario:', error: error });
        }
    }

    static async getUserUserName(req: Request, res: Response): Promise<void> {
        try {
            const user = await userService.findByUsername(req.params.username);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'Usuario não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar o usuario:', error: error });
        }
    }

    static async editUser(req: Request, res: Response): Promise<void> {
        try {
            const updatedUser = await userService.update(req.params.id, req.body);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ message: 'Usuario não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar Usuario', error: error });
        }
    }

    static async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            await userService.delete(req.params.id);
            res.status(200).json({ message: 'Usuário deletado com sucesso' });
        } catch (error) {

            if (error instanceof Error) {
                if (error.message.includes('Usuário não encontrado')) {
                    res.status(404).json({ message: 'Usuário não encontrado' });
                } else {
                    res.status(500).json({ message: 'Erro ao deletar usuário', error: error.message });
                }
            } else {
                res.status(500).json({ message: 'Erro desconhecido ao deletar usuário' });
            }
        }
    }


}
