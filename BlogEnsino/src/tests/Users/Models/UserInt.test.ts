import { User } from '../../../models/User';
import Sequelize from '../../../config/database'; // Importa a configuração do banco de dados

jest.setTimeout(10000); // 10 segundos


describe('User Model', () => {
    beforeAll(async () => {
        try {
            await Sequelize.authenticate();
            console.log('Connection has been established successfully.');
            await Sequelize.sync({ force: true }); // Sincroniza o modelo com o banco de dados
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error; // Lança o erro para falhar o teste
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

    // test('Deve consultar um usuário existente pelo ID', async () => {
    //     const userData = {
    //         username: 'teste1',
    //         role: 'admin',
    //     };
    //     const createdUser = await User.create(userData); // Cria um novo usuário no banco
    //     const userId = createdUser.id; // Pega o ID gerado
    //     const user = await User.findOne({ where: { id: userId } });

    //     if (user) {
    //         expect(user).toBeDefined(); // Verifica se o usuário foi encontrado
    //         expect(user.username).toBe('2cf627fd-e8e1-4737-a1ec-1d9874cf0af6'); // Verifica se o username está correto
    //         expect(user.role).toBe('admin'); // Verifica se o role está correto
    //     }
    // });

    // test('Deve atualizar um usuário existente', async () => {
    //     const userData = {
    //         username: 'teste1',
    //         role: 'admin',
    //     };
    //     const createdUser = await User.create(userData); // Cria um novo usuário no banco
    //     const userId = createdUser.id; // Pega o ID gerado

    //     const updatedData = {
    //         username: 'teste1',
    //         role: 'user',
    //     };

    //     await User.update(updatedData, { where: { id: userId } });
    //     const updatedUser = await User.findOne({ where: { id: userId } });
    //     if (updatedUser) {
    //         expect(updatedUser).toBeDefined();
    //         expect(updatedUser.username).toBe(updatedData.username);
    //         expect(updatedUser.role).toBe(updatedData.role);
    //     }

    // });
    // test('Deve deletar um usuário existente', async () => {
    //     const userData = {
    //         username: 'teste1',
    //         role: 'admin',
    //     };
    //     const createdUser = await User.create(userData); // Cria um novo usuário no banco
    //     const userId = createdUser.id; // Pega o ID gerado

    //     await User.destroy({ where: { id: userId } });
    //     const deletedUser = await User.findOne({ where: { id: userId } });

    //     expect(deletedUser).toBeNull(); // Espera que o usuário não exista mais
    // });
});

afterAll(async () => {
    await Sequelize.close(); // Fecha a conexão com o banco de dados
});