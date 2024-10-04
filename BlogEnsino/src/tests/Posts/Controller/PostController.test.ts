import { Request, Response } from 'express';
import { PostController } from '../../../controllers/PostController';
import { PostService } from '../../../services/PostService';
import { AuthService } from '../../../services/AuthService';
import { v4 as uuidv4 } from 'uuid';
import { PostResource } from '../../../resources/PostResource';
import { ValidateUserService } from '../../../services/ValidateService';
import jwt from 'jsonwebtoken';
import { UserResource } from '../../../resources/UserResource';

jest.mock('../../../services/PostService');
const mockTeste = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI1YjcxY2FhLTJhYTItNDgzYy1iNGExLTZjYzA3ODZmNDVjZCIsInVzZXJuYW1lIjoicHJvZmVzc29yIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI4MDA5MDcwLCJleHAiOjE3MjgwOTU0NzB9.92zFUWHREZq5nNgG - sYqtDTeCrqJzY3kfjbqftidjLs"
describe('Testes da PostController', () => {
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

    it('deve criar um post com sucesso', async () => {
        const mockPost = new PostResource(
            'titulo1', 'texto1', mockTeste
        )
        jest.spyOn(PostService.prototype, 'create').mockResolvedValue(mockPost);
        req.body = { title: mockPost.title, text: mockPost.text };
        req.headers = { authorization: mockTeste };
        await PostController.createPost(req as Request, res as Response);

        expect(PostService.prototype.create).toHaveBeenCalledWith('titulo1', 'texto1', mockTeste);
        expect(statusMock).toHaveBeenCalledWith(201);
        expect(jsonMock).toHaveBeenCalledWith(mockPost);
    });
    it('Deve lançar erro se role do usuário for diferente de "admin" na criação do post', async () => {
        const mockError = new Error('Usuário sem permissão');

        // Simulando que o serviço de validação lança um erro de permissão
        jest.spyOn(ValidateUserService.prototype, 'validateUser').mockRejectedValue(mockError);

        // Simula a criação do post
        req.body = { title: 'titulo1', text: 'texto1', user_id: 'mockUserId' };
        await PostController.createPost(req as Request, res as Response);


        expect(statusMock).toHaveBeenCalledWith(403);
        expect(jsonMock).toHaveBeenCalledWith({ message: 'Usuário sem permissão' });
    });


    it('deve retornar um erro ao falhar na criação do post', async () => {
        const mockError = new Error('Falha ao criar o Post');
        jest.spyOn(PostService.prototype, 'create').mockRejectedValue(mockError);

        await PostController.createPost(req as Request, res as Response);

        expect(PostService.prototype.create).toHaveBeenCalledWith('titulo1', 'texto1', expect.any(String));
        expect(statusMock).toHaveBeenCalledWith(500);
        expect(jsonMock).toHaveBeenCalledWith({ message: 'Falha ao criar o Post', error: expect.any(Error) });

    });

    it('deve retornar todos os post', async () => {
        const mockPost = [
            new PostResource('titulo1', 'texto1', uuidv4()),
            new PostResource('titulo2', 'texto2', uuidv4())
        ];
        jest.spyOn(PostService.prototype, 'findAll').mockResolvedValue(mockPost);

        await PostController.getAllPosts(req as Request, res as Response);

        expect(PostService.prototype.findAll).toHaveBeenCalledTimes(1);
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(mockPost);
    });

    it('deve retornar erro ao buscar todos os Posts', async () => {
        const mockError = new Error('Não foi possível criar o post:');
        jest.spyOn(PostService.prototype, 'findAll').mockRejectedValue(mockError);

        await PostController.getAllPosts(req as Request, res as Response);

        expect(PostService.prototype.findAll).toHaveBeenCalledTimes(1);
        expect(statusMock).toHaveBeenCalledWith(500);
        expect(jsonMock).toHaveBeenCalledWith({ message: "Falha ao Buscar os Posts", error: expect.any(Error) });
    });

    it('deve retornar um post pelo ID', async () => {
        const mockPost = new PostResource(
            'titulo1', 'texto1', uuidv4()
        )
        jest.spyOn(PostService.prototype, 'findById').mockResolvedValue(mockPost);
        const mockId = mockPost.id
        req.params = { id: mockId };

        await PostController.getPostById(req as Request, res as Response);

        expect(PostService.prototype.findById).toHaveBeenCalledWith(mockId);
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(mockPost);
    });

    it('deve retornar erro 404 quando o id não for encontrado', async () => {
        const mockError = new Error('Post não encontrado');
        jest.spyOn(PostService.prototype, 'findAll').mockRejectedValue(mockError);


        const mockUser = { id: uuidv4(), username: 'user1', role: 'admin' };
        (PostService.prototype.findById as jest.Mock).mockResolvedValue(null); // Mock do método create
        const mockId = mockUser.id
        req.params = { id: mockId };

        await PostController.getPostById(req as Request, res as Response);

        expect(PostService.prototype.findById).toHaveBeenCalledWith(mockId);
        expect(statusMock).toHaveBeenCalledWith(404);
        expect(jsonMock).toHaveBeenCalledWith({ message: 'Post não encontrado' });
    });

    it('deve retornar um post pelo titulo', async () => {
        const mockPost = new PostResource(
            'titulo1', 'texto1', uuidv4()
        )
        jest.spyOn(PostService.prototype, 'findByTitle').mockResolvedValue([mockPost]);
        req.query = { title: mockPost.title };

        await PostController.getPostByTitle(req as Request, res as Response);

        expect(PostService.prototype.findByTitle).toHaveBeenCalledTimes(1);
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith([mockPost]);
    });
});
