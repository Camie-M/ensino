import SequelizeMock from 'sequelize-mock';
import Sequelize from '../../config/database'; // Importa a configuração do banco de dados

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
    // test('Deve retornar um usuário existente pelo ID', async () => {
    //     MockUser.$queueResult(MockUser);
    //     const user = await MockUser.findByPk('123e4567-e89b-12d3-a456-426614174000');
    //     expect(user.id).toBe(MockUser.id);
    //     expect(user.username).toBe(MockUser.username);
    //     expect(user.role).toBe(MockUser.role);
    // });
});
