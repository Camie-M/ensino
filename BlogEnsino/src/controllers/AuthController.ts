import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

const authService = new AuthService();

export class AuthController {
    static async generateToken(req: Request, res: Response): Promise<void> {
        try {
            if (!req.headers.authorization) {
                res.status(400).json({ message: "Cabeçalho de autorização ausente" });
                return;
            }

            const token = await authService.generateToken(req.headers.authorization);
            res.status(201).json({ token });
        } catch (error: any) {

            if (error.message === "Usuário não encontrado") {
                res.status(404).json({ message: error.message });
            } else if (error.message === "Senha incorreta" || error.message === "Credenciais inválidas") {
                res.status(401).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Erro interno do servidor" });
            }
        }
    }
}
