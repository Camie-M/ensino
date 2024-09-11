export const checkAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        return next();
    }
    return res.status(403).json({ message: 'Acesso restrito a admins' });
};

export const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {  // Supondo que está usando alguma estratégia como Passport.js
        return next();
    }
    return res.status(401).json({ message: 'Você precisa estar autenticado' });
};
