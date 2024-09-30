import SequelizeMock from 'sequelize-mock';

jest.setTimeout(10000);

let sequelizeMock: any;

jest.mock('../../config/database.ts', () => {
    return {
        __esModule: true,
        default: sequelizeMock,
    };
});

describe('Post Model', () => {
    let MockPost: any;

    beforeAll(() => {

        sequelizeMock = new SequelizeMock();

        MockPost = sequelizeMock.define('Post', {
            id: '',
            title: '',
            text: '',
            user_id: ''
        });
    });

    test('Deve criar um novo post corretamente', async () => {

        const MockPostData = {
            id: '123e4567-e89b-12d3-a456-426614174000',
            title: 'title_1',
            text: 'text_1',
            user_id: '123e4567-e89b-12d3-a456-426614174000'
        };

        const post = await MockPost.create(MockPostData);

        expect(post.id).toBe(MockPostData.id);
        expect(post.title).toBe(MockPostData.title);
        expect(post.text).toBe(MockPostData.text);
    });

    test('Deve retornar um post existente pelo ID', async () => {

        const MockPostData = {
            id: '123e4567-e89b-12d3-a456-426614174001',
            title: 'title_1',
            text: 'text_1',
            user_id: '123e4567-e89b-12d3-a456-426614174000'
        };

        const newPost = await MockPost.create(MockPostData);


        await MockPost.findOne({
            where: { ...MockPostData }
        }).then(function (foundPost: any) {
            expect(foundPost.dataValues.id).toBe(newPost.id)
            expect(foundPost.dataValues.username).toBe(newPost.username)
            expect(foundPost.dataValues.role).toBe(newPost.role)
        });
    });

    test('Deve deletar um post', async () => {

        const MockPostData = {
            id: '123e4567-e89b-12d3-a456-426614174002',
            title: 'title_1',
            text: 'text_1',
            user_id: '123e4567-e89b-12d3-a456-426614174000'
        };

        await MockPost.create(MockPostData);


        await MockPost.destroy({
            where: { ...MockPostData }
        }).then(function (affectedRows: any) {
            expect(affectedRows).toBe(1)
        });
    });

    test('Deve editar um post', async () => {

        const newMockPostData = {
            id: '123e4567-e89b-12d3-a456-426614174003',
            title: 'title_1',
            text: 'text_1',
            user_id: '123e4567-e89b-12d3-a456-426614174000'
        };

        await MockPost.create(newMockPostData);


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