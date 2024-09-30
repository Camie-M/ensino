import { User } from '../../models/User';
import Sequelize from '../../config/database';

jest.setTimeout(10000);


describe('User Model', () => {
    beforeAll(async () => {
        try {
            await Sequelize.authenticate();
            console.log('Connection has been established successfully.');
            await Sequelize.sync({ force: true });
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error;
        }
    });


    test('Deve criar um novo usuário', async () => {
        const userData = {
            username: 'teste11',
            role: 'admin',
        };

        const user = await User.create(userData);

        expect(user.username).toBe(userData.username);
        expect(user.role).toBe(userData.role);
        expect(user.id).toBeDefined();
    });

    test('Deve consultar um usuário existente pelo ID', async () => {
        const userData = {
            username: 'teste1',
            role: 'admin',
        };
        const createdUser = await User.create(userData);
        const userId = createdUser.id;
        const user = await User.findOne({ where: { id: userId } });

        if (user) {
            expect(user).toBeDefined();
            expect(user.username).toBe('2cf627fd-e8e1-4737-a1ec-1d9874cf0af6');
            expect(user.role).toBe('admin');
        }
    });

    test('Deve atualizar um usuário existente', async () => {
        const userData = {
            username: 'teste1',
            role: 'admin',
        };
        const createdUser = await User.create(userData);
        const userId = createdUser.id;

        const updatedData = {
            username: 'teste1',
            role: 'user',
        };

        await User.update(updatedData, { where: { id: userId } });
        const updatedUser = await User.findOne({ where: { id: userId } });
        if (updatedUser) {
            expect(updatedUser).toBeDefined();
            expect(updatedUser.username).toBe(updatedData.username);
            expect(updatedUser.role).toBe(updatedData.role);
        }

    });
    test('Deve deletar um usuário existente', async () => {
        const userData = {
            username: 'teste1',
            role: 'admin',
        };
        const createdUser = await User.create(userData);
        const userId = createdUser.id;

        await User.destroy({ where: { id: userId } });
        const deletedUser = await User.findOne({ where: { id: userId } });

        expect(deletedUser).toBeNull();
    });
});

afterAll(async () => {
    await Sequelize.close();
});