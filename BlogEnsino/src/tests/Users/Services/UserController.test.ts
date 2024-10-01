; import { Request, Response } from 'express';
import { UserController } from '../../../controllers/UserController';
import { UserService } from '../../../services/UserService';
import { v4 as uuidv4 } from 'uuid';


// Mock do UserService
jest.mock('../../../services/UserService');

describe('Testes da UserController', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let jsonMock: jest.Mock;
    let statusMock: jest.Mock;

    beforeEach(() => {
        jsonMock = jest.fn();
        statusMock = jest.fn(() => ({ json: jsonMock }));
        req = { body: {} };
        res = { status: statusMock } as Partial<Response>;

        // Reseta o mock entre os testes
        (UserService.prototype.create as jest.Mock).mockClear();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('deve criar um usuário com sucesso', async () => {
        const mockUser = { id: uuidv4(), username: 'user1', role: 'admin' };
        (UserService.prototype.create as jest.Mock).mockResolvedValue(mockUser); // Mock do método create

        req.body = { username: 'user1', role: 'admin' };

        await UserController.createUser(req as Request, res as Response);

        expect(UserService.prototype.create).toHaveBeenCalledWith('user1', 'admin');
        expect(statusMock).toHaveBeenCalledWith(201);
        expect(jsonMock).toHaveBeenCalledWith(mockUser);
    });

    it('deve retornar um erro ao falhar na criação do usuário', async () => {
        const mockError = new Error('Erro ao criar o usuário');
        (UserService.prototype.create as jest.Mock).mockRejectedValue(mockError);

        req.body = { username: 'user1', role: 'admin' };

        await UserController.createUser(req as Request, res as Response);

        expect(UserService.prototype.create).toHaveBeenCalledWith('user1', 'admin');
        expect(statusMock).toHaveBeenCalledWith(500);
    });

    it('deve retornar todos os usuários', async () => {
        const mockUsers = [
            { id: uuidv4(), username: 'user1', role: 'admin' },
            { id: uuidv4(), username: 'user2', role: 'user' },
        ];
        (UserService.prototype.findAll as jest.Mock).mockResolvedValue(mockUsers);

        await UserController.getAllUsers(req as Request, res as Response);

        expect(UserService.prototype.findAll).toHaveBeenCalledTimes(1);
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(mockUsers);
    });

    it('deve retornar erro ao buscar todos os usuários', async () => {
        const mockError = new Error('Erro ao criar o usuário');
        (UserService.prototype.findAll as jest.Mock).mockRejectedValue(mockError);

        await UserController.getAllUsers(req as Request, res as Response);

        expect(UserService.prototype.findAll).toHaveBeenCalledTimes(1);
        expect(statusMock).toHaveBeenCalledWith(500);
        expect(jsonMock).toHaveBeenCalledWith({ message: 'Erro Buscar por Usuarios:', error: expect.any(Error) });
    });

    it('deve retornar um usuário pelo ID', async () => {
        const mockUser = { id: uuidv4(), username: 'user1', role: 'admin' };
        (UserService.prototype.findById as jest.Mock).mockResolvedValue(mockUser); // Mock do método create
        const mockId = mockUser.id
        req.params = { id: mockId };

        await UserController.getUserById(req as Request, res as Response);

        expect(UserService.prototype.findById).toHaveBeenCalledWith(mockId);
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(mockUser);
    });

    it('deve retornar erro 404 quando o usuário não for encontrado', async () => {
        const mockUser = { id: uuidv4(), username: 'user1', role: 'admin' };
        (UserService.prototype.findById as jest.Mock).mockResolvedValue(null); // Mock do método create
        const mockId = mockUser.id
        req.params = { id: mockId };

        await UserController.getUserById(req as Request, res as Response);

        expect(UserService.prototype.findById).toHaveBeenCalledWith(mockId);
        expect(statusMock).toHaveBeenCalledWith(404);
        expect(jsonMock).toHaveBeenCalledWith({ message: 'Usuario não encontrado' });
    });

    it('deve atualizar um usuário com sucesso', async () => {
        const mockUser = { id: uuidv4(), username: 'user1', role: 'admin' };
        (UserService.prototype.update as jest.Mock).mockResolvedValue(mockUser); // Mock do método create
        const mockId = mockUser.id

        req.params = { id: mockId };
        req.body = { username: 'user1', role: 'admin' };

        await UserController.editUser(req as Request, res as Response);

        expect(UserService.prototype.update).toHaveBeenCalledWith(mockId, { username: 'user1', role: 'admin' });
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(mockUser);
    });

    it('deve retornar erro 404 ao atualizar usuário inexistente', async () => {
        const mockUser = { id: uuidv4(), username: 'user1', role: 'admin' };
        (UserService.prototype.update as jest.Mock).mockResolvedValue(null); // Mock do método create
        const mockId = mockUser.id

        req.params = { id: mockId };
        req.body = { username: 'user1', role: 'admin' };

        await UserController.editUser(req as Request, res as Response);

        expect(UserService.prototype.update).toHaveBeenCalledWith(mockId, { username: 'user1', role: 'admin' });
        expect(statusMock).toHaveBeenCalledWith(404);
        expect(jsonMock).toHaveBeenCalledWith({ message: 'Usuario não encontrado' });
    });

    it('deve retornar erro 404 ao deletar usuário inexistente', async () => {
        (UserService.prototype.delete as jest.Mock).mockRejectedValue(new Error('Usuário não encontrado'));

        req.params = { id: '999' };

        await UserController.deleteUser(req as Request, res as Response);

        expect(UserService.prototype.delete).toHaveBeenCalledWith('999');
        expect(statusMock).toHaveBeenCalledWith(404);
        expect(jsonMock).toHaveBeenCalledWith({ message: 'Usuário não encontrado' });
    });

    it('deve retornar erro ao deletar usuário', async () => {
        (UserService.prototype.delete as jest.Mock).mockRejectedValue(new Error('Erro ao deletar'));
        const id = uuidv4()
        req.params = { id: id };

        await UserController.deleteUser(req as Request, res as Response);

        expect(UserService.prototype.delete).toHaveBeenCalledWith(id);
        expect(statusMock).toHaveBeenCalledWith(500);
        expect(jsonMock).toHaveBeenCalledWith({ message: 'Erro ao deletar usuário', error: 'Erro ao deletar' });
    });
});
