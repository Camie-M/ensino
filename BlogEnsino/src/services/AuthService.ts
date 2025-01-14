import jwt, { JwtPayload } from 'jsonwebtoken';
import { Buffer } from "buffer";
import { UserService } from "./UserService";
import { env } from '../env';
import { UserResource } from '../resources/UserResource';
import { TokenUtils } from '../utils/LoginUtils';
import { DecodedToken } from '../utils/LoginUtils';

const userService = new UserService();

export class AuthService {
    async generateToken(auth: string): Promise<string> {
        const { username, password } = this.decodeBase64(auth);
        const hashedPassword = TokenUtils.hashGenerator(password);
        const user = await userService.findEntityByUsername(username);

        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        
        if (hashedPassword !== user.password) {
            throw new Error("Senha incorreta");
        }
        

        return this.generateJwtToken({
            id: user.id,
            username: user.username,
            role: user.role,
        });
    }

    async decodeToken(token: string): Promise<UserResource> {
        try {
            const decoded = TokenUtils.decodeToken(token)
            return new UserResource(decoded.username, decoded.role, decoded.id);
        } catch (error) {
            throw new Error("Token inválido");
        }
    }

    async validateUser(token: string, allowedRoles: string[]): Promise<void> {
        const user = await this.decodeToken(token);

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        if (!allowedRoles.includes(user.role)) {
            throw new Error("Usuário sem permissão");
        }
    }

    private decodeBase64(auth: string): { username: string; password: string } {
        const [username, password] = Buffer.from(auth, "base64").toString().split(":");
        if (!username || !password) {
            throw new Error("Credenciais inválidas");
        }
        return { username, password };
    }

    private generateJwtToken(payload: Omit<DecodedToken, 'iat' | 'exp'>): string {
        return jwt.sign(payload, env.SECRET_KEY, { expiresIn: '1 day' });
    }
}