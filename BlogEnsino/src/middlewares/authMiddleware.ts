import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface AuthenticatedRequest extends Request {
    user?: any;
    isAuthenticated?: () => boolean;
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction): Response | void => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET as string);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido ou expirado' });
    }
};

export const checkAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction): Response | void => {
    if (req.user && req.user.role === 'admin') {
        return next();
    }
    return res.status(403).json({ message: 'Acesso restrito a admins' });
};

export const checkAuthenticated = (req: AuthenticatedRequest, res: Response, next: NextFunction): Response | void => {
    if (req.isAuthenticated && req.isAuthenticated()) {
        return next();
    }
    return res.status(401).json({ message: 'Você precisa estar autenticado' });
};
