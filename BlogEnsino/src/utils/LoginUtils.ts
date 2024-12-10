const crypto = require('crypto');

export class LoginUtils{
    static hashGenerator(password: string) {
        return crypto.createHash('sha256').update(password).digest('hex');
    }
}

