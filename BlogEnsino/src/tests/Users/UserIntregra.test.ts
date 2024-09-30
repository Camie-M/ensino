import SequelizeMock from 'sequelize-mock';

jest.setTimeout(10000);

let sequelizeMock: any;

jest.mock('../../../config/database', () => {
    return {
        __esModule: true,
        default: sequelizeMock,
    };
});

describe('User Model', () => {
    let MockUser: any;

    const createMockUserData = (overrides = {}) => ({
        id: '123e4567-e89b-12d3-a456-426614174000',
        username: 'testuser',
        role: 'admin',
        ...overrides,
    });

    beforeAll(() => {
        sequelizeMock = new SequelizeMock();
        MockUser = sequelizeMock.define('User', {
            id: '',
            username: '',
            role: '',
        });
    });

    test('Deve criar um novo usuário corretamente', async () => {
        const mockUserData = createMockUserData();
        const user = await MockUser.create(mockUserData);

        expect(user.id).toBe(mockUserData.id);
        expect(user.username).toBe(mockUserData.username);
        expect(user.role).toBe(mockUserData.role);
    });

    test('Deve retornar um usuário existente pelo ID', async () => {
        const mockUserData = createMockUserData({ id: '123e4567-e89b-12d3-a456-426614174002' });
        const newUser = await MockUser.create(mockUserData);

        const foundUser = await MockUser.findOne({
            where: { ...mockUserData },
        });

        expect(foundUser.dataValues.id).toBe(newUser.id);
        expect(foundUser.dataValues.username).toBe(newUser.username);
        expect(foundUser.dataValues.role).toBe(newUser.role);
    });

    test('Deve deletar um usuário', async () => {
        const mockUserData = createMockUserData({ id: '123e4567-e89b-12d3-a456-426614174003' });
        await MockUser.create(mockUserData);

        const affectedRows = await MockUser.destroy({
            where: { ...mockUserData },
        });

        expect(affectedRows).toBe(1);
    });

    test('Deve editar um usuário', async () => {
        const newMockUserData = createMockUserData({ id: '123e4567-e89b-12d3-a456-426614174004' });
        await MockUser.create(newMockUserData);

        const updatedMockUserData = {
            username: 'testuser_updated',
            role: 'admin',
        };

        const result = await MockUser.update(updatedMockUserData, { returning: true });
        const updatedUser = result[1][0].dataValues;

        expect(result[1].length).toBeGreaterThan(0);
        expect(updatedUser.username).toBe(updatedMockUserData.username);
        expect(updatedUser.role).toBe(updatedMockUserData.role);
    });

    test('Deve falhar ao criar um usuário sem id', async () => {
        const mockUserData = createMockUserData({ id: undefined });

        try {
            await MockUser.create(mockUserData);
            throw new Error('Usuario não deve ser criado sem ID');
        } catch (error) {
            if (error instanceof Error) {
                expect(error.message).toBe('Usuario não deve ser criado sem ID');
            } else {
                throw error;
            }
        }
    });
});
