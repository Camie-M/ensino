import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

jest.setTimeout(10000); // 10 segundos para o timeout dos testes

describe('User Model', () => {
    // Limpa o banco de dados antes de cada teste
    beforeEach(async () => {
        await prisma.user.deleteMany(); // Limpa todos os usuários
    });

    afterAll(async () => {
        await prisma.$disconnect(); // Desconecta o Prisma ao final dos testes
    });

    test('Deve criar um novo usuário', async () => {
        const userData = {
            username: 'teste11',
            role: 'admin',
        };

        // Testa a criação do usuário diretamente usando o Prisma
        const user = await prisma.user.create({
            data: userData,
        });

        // Verifica se o usuário foi criado corretamente
        expect(user.username).toBe(userData.username);
        expect(user.role).toBe(userData.role);
        expect(user.id).toBeDefined(); // Verifica se o ID foi gerado
    });

    test('Deve consultar um usuário existente pelo ID', async () => {
        const userData = {
            username: 'teste1',
            role: 'admin',
        };

        // Cria um usuário antes de consultar
        const createdUser = await prisma.user.create({
            data: userData,
        });

        // Busca o usuário pelo ID diretamente usando o Prisma
        const user = await prisma.user.findUnique({
            where: { id: createdUser.id },
        });

        // Verifica se o usuário foi encontrado e seus dados são corretos
        expect(user).toBeDefined();
        expect(user?.username).toBe(userData.username);
        expect(user?.role).toBe(userData.role);
    });

    test('Deve atualizar um usuário existente', async () => {
        const userData = {
            username: 'teste1',
            role: 'admin',
        };

        // Cria um usuário antes de atualizar
        const createdUser = await prisma.user.create({
            data: userData,
        });

        // Dados atualizados
        const updatedData = {
            username: 'testeAtualizado',
            role: 'user',
        };

        // Atualiza o usuário diretamente usando o Prisma
        const updatedUser = await prisma.user.update({
            where: { id: createdUser.id },
            data: updatedData,
        });

        // Verifica se os dados do usuário foram atualizados corretamente
        expect(updatedUser).toBeDefined();
        expect(updatedUser.username).toBe(updatedData.username);
        expect(updatedUser.role).toBe(updatedData.role);
    });

    test('Deve deletar um usuário existente', async () => {
        const userData = {
            username: 'teste1',
            role: 'admin',
        };

        // Cria um usuário antes de deletar
        const createdUser = await prisma.user.create({
            data: userData,
        });

        // Deleta o usuário diretamente usando o Prisma
        await prisma.user.delete({
            where: { id: createdUser.id },
        });

        // Verifica se o usuário foi deletado corretamente
        const deletedUser = await prisma.user.findUnique({
            where: { id: createdUser.id },
        });

        // Espera que o usuário não exista mais após a exclusão
        expect(deletedUser).toBeNull(); // O usuário deve ser null após a exclusão
    });
});
