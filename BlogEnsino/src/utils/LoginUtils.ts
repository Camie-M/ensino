import jwt, { JwtPayload } from 'jsonwebtoken';
import { env } from '../env';

const crypto = require('crypto');
export interface DecodedToken extends JwtPayload {
    id: string;
    username: string;
    role: string;
}
export class TokenUtils{
    static hashGenerator(password: string) {
        return crypto.createHash('sha256').update(password).digest('hex');
    }
    static decodeToken(token: string) {
        return jwt.verify(token, env.SECRET_KEY) as DecodedToken;
    }
    static validateUser(token: string, allowedRoles: string[]) {
        const user = this.decodeToken(token);        
        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        if (!allowedRoles.includes(user.role)) {
            throw new Error("Usuário sem permissão");
        }
    }

}

