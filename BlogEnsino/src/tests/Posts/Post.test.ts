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

describe('Post Model', () => {
    let MockPost: any;

    beforeAll(() => {
        // Inicializa o mock do Sequelize aqui
        sequelizeMock = new SequelizeMock();
        // Inicializa o mock do model de Post
        MockPost = sequelizeMock.define('Post', {
            id: '',
            title: '',
            text: '',
            user_id: ''
        });
    });

    test('Deve criar um novo post corretamente', async () => {
        // Simula os dados de entrada
        const MockPostData = {
            id: '123e4567-e89b-12d3-a456-426614174000',
            title: 'title_1',
            text: 'text_1',
            user_id: '123e4567-e89b-12d3-a456-426614174000'
        };
        // Simula a criação de um post
        const post = await MockPost.create(MockPostData);
        // Verifica se o post foi criado corretamente
        expect(post.id).toBe(MockPostData.id);
        expect(post.title).toBe(MockPostData.title);
        expect(post.text).toBe(MockPostData.text);
    });

    test('Deve retornar um post existente pelo ID', async () => {
        // Simula os dados de entrada
        const MockPostData = {
            id: '123e4567-e89b-12d3-a456-426614174001',
            title: 'title_1',
            text: 'text_1',
            user_id: '123e4567-e89b-12d3-a456-426614174000'
        };
        // Simula a criação de um post
        const newPost = await MockPost.create(MockPostData);

        // Encontra post criado e checa se dados estão iguais
        await MockPost.findOne({
            where: { ...MockPostData }
        }).then(function (foundPost: any) {
            expect(foundPost.dataValues.id).toBe(newPost.id)
            expect(foundPost.dataValues.username).toBe(newPost.username)
            expect(foundPost.dataValues.role).toBe(newPost.role)
        });
    });

    test('Deve deletar um post', async () => {
        // Simula os dados de entrada
        const MockPostData = {
            id: '123e4567-e89b-12d3-a456-426614174002',
            title: 'title_1',
            text: 'text_1',
            user_id: '123e4567-e89b-12d3-a456-426614174000'
        };
        // Simula a criação de um post
        await MockPost.create(MockPostData);

        // Simula exclusão do post
        await MockPost.destroy({
            where: { ...MockPostData }
        }).then(function (affectedRows: any) {
            expect(affectedRows).toBe(1)
        });
    });

    test('Deve editar um post', async () => {
        // Simula os dados de entrada
        const newMockPostData = {
            id: '123e4567-e89b-12d3-a456-426614174003',
            title: 'title_1',
            text: 'text_1',
            user_id: '123e4567-e89b-12d3-a456-426614174000'
        };
        // Simula a criação de um usuário
        await MockPost.create(newMockPostData);

        // Simula atualização dos dados do usuário
        const updatedMockPostData = {
            id: '123e4567-e89b-12d3-a456-426614174003',
            title: 'title_1_updated',
            text: 'text_1_updated',
        };
        await MockPost.update(
            updatedMockPostData,
            { returning: true }
        ).then(function (result: any) {
            const updatedPost = result[1][0].dataValues
            expect(updatedPost.title).toBe(updatedMockPostData.title)
            expect(updatedPost.text).toBe(updatedMockPostData.text)
        });
    });
});