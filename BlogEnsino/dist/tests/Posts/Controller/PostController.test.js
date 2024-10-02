"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostController_1 = require("../../../controllers/PostController");
const PostService_1 = require("../../../services/PostService");
const uuid_1 = require("uuid");
// Mock do PostService
jest.mock('../../../services/PostService');
describe('Testes da PostController', () => {
    let req;
    let res;
    let jsonMock;
    let statusMock;
    beforeEach(() => {
        jsonMock = jest.fn();
        statusMock = jest.fn(() => ({ json: jsonMock }));
        req = { body: {} };
        res = { status: statusMock };
        // Reseta o mock entre os testes
        PostService_1.PostService.prototype.create.mockClear();
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('deve criar um post com sucesso', async () => {
        const mockPost = { id: (0, uuid_1.v4)(), title: 'titulo1', text: 'texto1', user_id: (0, uuid_1.v4)() };
        PostService_1.PostService.prototype.create.mockResolvedValue(mockPost);
        req.body = { title: mockPost.title, text: mockPost.text, user_id: mockPost.user_id };
        await PostController_1.PostController.createPost(req, res);
        expect(PostService_1.PostService.prototype.create).toHaveBeenCalledWith('titulo1', 'texto1', mockPost.user_id);
        expect(statusMock).toHaveBeenCalledWith(201);
        expect(jsonMock).toHaveBeenCalledWith(mockPost);
    });
    it('deve retornar um erro ao falhar na criação do post', async () => {
        const errorMessage = 'Erro na criação do post';
        PostService_1.PostService.prototype.create.mockRejectedValue(new Error(errorMessage));
        req.body = { title: 'titulo1', text: 'texto1', user_id: (0, uuid_1.v4)() };
        await PostController_1.PostController.createPost(req, res);
        expect(PostService_1.PostService.prototype.create).toHaveBeenCalledWith('titulo1', 'texto1', expect.any(String));
        expect(statusMock).toHaveBeenCalledWith(500);
    });
    it('deve retornar todos os post', async () => {
        const mockUsers = [
            { id: (0, uuid_1.v4)(), title: 'titulo1', text: 'texto1', user_id: (0, uuid_1.v4)() },
            { id: (0, uuid_1.v4)(), title: 'titulo2', text: 'texto2', user_id: (0, uuid_1.v4)() }
        ];
        PostService_1.PostService.prototype.findAll.mockResolvedValue(mockUsers);
        await PostController_1.PostController.getAllPosts(req, res);
        expect(PostService_1.PostService.prototype.findAll).toHaveBeenCalledTimes(1);
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(mockUsers);
    });
    it('deve retornar erro ao buscar todos os usuários', async () => {
        const errorMessage = 'Erro ao buscar todos os posts';
        PostService_1.PostService.prototype.findAll.mockRejectedValue(new Error(errorMessage));
        await PostController_1.PostController.getAllPosts(req, res);
        expect(PostService_1.PostService.prototype.findAll).toHaveBeenCalledTimes(1);
        expect(statusMock).toHaveBeenCalledWith(500);
        expect(jsonMock).toHaveBeenCalledWith({ message: 'Falha ao Buscar os Posts', error: expect.any(Error) });
    });
    it('deve retornar um post pelo ID', async () => {
        const mockPost = { id: (0, uuid_1.v4)(), title: 'titulo1', text: 'texto1', user_id: (0, uuid_1.v4)() };
        PostService_1.PostService.prototype.findById.mockResolvedValue(mockPost);
        const mockId = mockPost.id;
        req.params = { id: mockId };
        await PostController_1.PostController.getPostById(req, res);
        expect(PostService_1.PostService.prototype.findById).toHaveBeenCalledWith(mockId);
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(mockPost);
    });
    it('deve retornar erro 404 quando o id não for encontrado', async () => {
        const mockPost = { id: (0, uuid_1.v4)(), title: 'titulo1', text: 'texto1', user_id: (0, uuid_1.v4)() };
        PostService_1.PostService.prototype.findById.mockResolvedValue(null);
        const mockId = mockPost.id;
        req.params = { id: mockId };
        await PostController_1.PostController.getPostById(req, res);
        expect(PostService_1.PostService.prototype.findById).toHaveBeenCalledWith(mockId);
        expect(statusMock).toHaveBeenCalledWith(404);
        expect(jsonMock).toHaveBeenCalledWith({ message: 'Post não encontrado' });
    });
    // it('deve retornar um post pelo titulo', async () => {
    //     const mockPost = { id: uuidv4(), title: 'titulo1', text: 'texto1', user_id: uuidv4() };
    //     (PostService.prototype.findByTitle as jest.Mock).mockResolvedValue(mockPost);
    //     const mockTitle = mockPost.title
    //     req.params = { id: mockTitle };
    //     await PostController.getPostByTitle(req as Request, res as Response);
    //     expect(PostService.prototype.findByTitle).toHaveBeenCalledWith(mockTitle);
    //     expect(statusMock).toHaveBeenCalledWith(200);
    //     expect(jsonMock).toHaveBeenCalledWith(mockPost);
    // });
});
