import sequelize from "../../config/database";
import { User } from "../../models/User";

beforeAll(async () => {
    await sequelize.sync({ force: true });
}, 10000); // Aumenta o timeout para 10 segundos


afterAll(async () => {
    await sequelize.close(); // Fecha a conexão após os testes
});

describe('User Model', () => {
    it('should create a user successfully', async () => {
        const user = await User.create({ username: 'testUser', role: 'admin' });
        expect(user).toHaveProperty('id');
        expect(user.username).toBe('testUser');
        expect(user.role).toBe('admin');
    }, 10000); // Aumentando o timeout para 10 segundos    
});
