import { UserService } from './../../../services/UserService';
import { Request, Response } from 'express';
import { UserController } from '../../../controllers/UserController';
import { v4 as uuidv4 } from 'uuid';
import { UserResource } from '../../../resources/UserResource';


// Mock do UserService
jest.mock('../../../services/UserService');

describe('Testes da UserController', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let jsonMock: jest.Mock;
    let statusMock: jest.Mock;
    jsonMock = jest.fn();
    statusMock = jest.fn(() => ({ json: jsonMock }));
    req = { body: {} };
    res = { status: statusMock } as Partial<Response>;

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('deve criar um usuario com sucesso', async () => {
        const mockUser =new UserResource('Breno', 'admin', uuidv4());
        jest.spyOn(UserService.prototype, 'create').mockResolvedValue(mockUser);

        await UserController.createUser(req as Request, res as Response);

        expect(UserService.prototype.create).toHaveBeenCalledTimes(1);
        expect(statusMock).toHaveBeenCalledWith(201);
        expect(jsonMock).toHaveBeenCalledWith(mockUser);
    });

    it('deve retornar um erro ao falhar na criação do usuário', async () => {
        const mockError = new Error('Erro ao criar o usuario');
        jest.spyOn(UserService.prototype, 'create').mockRejectedValue(mockError);
    
        req.body = { username: 'user1', role: 'admin', password: 'senha123' };
    
        await UserController.createUser(req as Request, res as Response);
    
        expect(UserService.prototype.create).toHaveBeenCalledWith('user1', 'admin', 'senha123');
        expect(statusMock).toHaveBeenCalledWith(500);
        expect(jsonMock).toHaveBeenCalledWith({
            message: 'Erro ao criar o usuario:',
            error: mockError
        });
    });

    it('deve retornar todos os usuários', async () => {
        const mockUsers = [
            new UserResource('user1', 'admin', uuidv4()),
            new UserResource('user2', 'user', uuidv4())
        ];
        jest.spyOn(UserService.prototype, 'findAll').mockResolvedValue(mockUsers);

        await UserController.getAllUsers(req as Request, res as Response);

        expect(UserService.prototype.findAll).toHaveBeenCalledTimes(1);
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(mockUsers);
    });

    it('deve retornar erro ao buscar todos os usuários', async () => {
        const mockError = new Error('Erro ao buscar o usuário');
        jest.spyOn(UserService.prototype, 'findAll').mockRejectedValue(mockError);

        await UserController.getAllUsers(req as Request, res as Response);

        expect(UserService.prototype.findAll).toHaveBeenCalledTimes(1);
        expect(statusMock).toHaveBeenCalledWith(500);
        expect(jsonMock).toHaveBeenCalledWith({ message: 'Erro ao Buscar por Usuarios:', error: expect.any(Error) });
    });

    it('deve retornar um usuário pelo ID', async () => {
        const mockUser = new UserResource(
            'user1', 'admin', uuidv4()
        );
        jest.spyOn(UserService.prototype, 'findById').mockResolvedValue(mockUser);
        
        const mockId = mockUser.id;
        req.params = { id: mockId };
        req.headers = { authorization: 'Bearer token-fake' }; // Adicionando o token no header
    
        await UserController.getUserById(req as Request, res as Response);
    
        expect(UserService.prototype.findById).toHaveBeenCalledWith(mockId, 'Bearer token-fake');
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(mockUser);
    });

    it('deve retornar erro 404 quando o usuário não for encontrado', async () => {
        const mockUser = { id: uuidv4(), username: 'user1', role: 'admin' };
    
        // Mock do método findById para retornar null, simulando que o usuário não foi encontrado
        (UserService.prototype.findById as jest.Mock).mockResolvedValue(null);
    
        const mockId = mockUser.id;
        req.params = { id: mockId };
        req.headers = { authorization: 'Bearer token-fake' }; // Adicionando o token no header
    
        await UserController.getUserById(req as Request, res as Response);
    
        // Verifique se o método findById foi chamado com o ID e o token corretos
        expect(UserService.prototype.findById).toHaveBeenCalledWith(mockId, 'Bearer token-fake');
        
        // Verifique se a resposta correta foi enviada para o cliente
        expect(statusMock).toHaveBeenCalledWith(404);
        expect(jsonMock).toHaveBeenCalledWith({ message: 'Usuario não encontrado' });
    });
 
});
