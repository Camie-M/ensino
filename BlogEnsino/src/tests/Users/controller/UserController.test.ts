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
        expect(jsonMock).toHaveBeenCalledWith({
            message: 'Erro ao criar o usuario:',
            error: mockError,
        });
    });
});
