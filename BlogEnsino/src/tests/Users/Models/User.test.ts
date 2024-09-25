import SequelizeMock from 'sequelize-mock';

jest.setTimeout(10000); // 10 segundos

let sequelizeMock: any;
// Criação de um mock para a conexão sequelize
jest.mock('../../config/database', () => {
    return {
        __esModule: true,
        default: sequelizeMock,  // Mock inicializado depois
    };
});

describe('User Model', () => {
    let MockUser: any;

    beforeAll(() => {
        // Inicializa o mock do Sequelize aqui
        sequelizeMock = new SequelizeMock();
        // Inicializa o mock do model de User
        MockUser = sequelizeMock.define('User', {
            id: '',
            username: '',
            role: '',
        });
    });

    test('Deve criar um novo usuário corretamente', async () => {
        // Simula os dados de entrada
        const mockUserData = {
            id: '123e4567-e89b-12d3-a456-426614174000',
            username: 'testuser',
            role: 'admin',
        };
        // Simula a criação de um usuário
        const user = await MockUser.create(mockUserData);
        // Verifica se o usuário foi criado corretamente
        expect(user.id).toBe(mockUserData.id);
        expect(user.username).toBe(mockUserData.username);
        expect(user.role).toBe(mockUserData.role);
    });

    test('Deve retornar um usuário existente pelo ID', async () => {
        // Simula os dados de entrada
        const mockUserData = {
            id: '123e4567-e89b-12d3-a456-426614174002',
            username: 'testuser',
            role: 'admin',
        };
        // Simula a criação de um usuário
        const newUser = await MockUser.create(mockUserData);

        // Encontra usuário criado e checa se dados estão iguais
        await MockUser.findOne({
            where: { ...mockUserData }
        }).then(function (foundUser: any) {
            expect(foundUser.dataValues.id).toBe(newUser.id)
            expect(foundUser.dataValues.username).toBe(newUser.username)
            expect(foundUser.dataValues.role).toBe(newUser.role)
        });
    });

    test('Deve deletar um usuário', async () => {
        // Simula os dados de entrada
        const mockUserData = {
            id: '123e4567-e89b-12d3-a456-426614174003',
            username: 'testuser',
            role: 'admin',
        };
        // Simula a criação de um usuário
        await MockUser.create(mockUserData);

        // Simula exclusão do usuário
        await MockUser.destroy({
            where: { ...mockUserData }
        }).then(function (affectedRows: any) {
            expect(affectedRows).toBe(1)
        });
    });

    test('Deve editar um usuário', async () => {
        // Simula os dados de entrada
        const newMockUserData = {
            id: '123e4567-e89b-12d3-a456-426614174004',
            username: 'testuser',
            role: 'admin',
        };
        // Simula a criação de um usuário
        await MockUser.create(newMockUserData);

        // Simula atualização dos dados do usuário
        const updatedMockUserData = {
            username: 'testuser_updated',
            role: 'admin',
        };
        await MockUser.update(
            updatedMockUserData,
            { returning: true }
        ).then(function (result: any) {
            const updatedUser = result[1][0].dataValues
            expect(updatedUser.username).toBe(updatedMockUserData.username)
            expect(updatedUser.role).toBe(updatedMockUserData.role)
        });
    });
});
