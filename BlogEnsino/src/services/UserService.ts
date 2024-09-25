import { UserResource } from '../resources/UserResource';
import { UserRepository } from '../repositories/UserRepository';

const userRepository = new UserRepository();

export class UserService {

    async create(username: string, role: string): Promise<UserResource> {
        try {
            const user = await userRepository.findByUsername(username)
            if (user) throw new Error("Usuario com este username já existe");
            const createdUser = await userRepository.create(username, role)
            return new UserResource(createdUser.username, createdUser.role, createdUser.id)
        } catch (error) {
            throw new Error(`Não foi possível criar o usuário: ${error}`);
        }
    }

    async findAll(): Promise<UserResource[]> {
        try {
            const users = await userRepository.findAll();
            if (users === null || users.length == 0) throw new Error("Não existe usuarios na tabela");
            const usersArray = users.map(user => new UserResource(user.username, user.role, user.id));
            return usersArray
        } catch (error) {
            throw new Error(`Não foi possível encontrar os usuários: ${error}`);
        }
    }

    async update(id: string, updatedFields: { username: string; role: string }): Promise<UserResource | null> {
        try {
            const user = await this.findUserById(id);
            const updatedUser = await userRepository.update(user, updatedFields);
            return new UserResource(updatedUser.username, updatedUser.role, updatedUser.id);
        } catch (error) {
            throw new Error(`Não foi possível atualizar o usuário: ${error}`);
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const user = await this.findUserById(id);
            userRepository.delete(user)
        } catch (error) {
            throw new Error(`Não foi possível deletar o usuário: ${error}`);
        }
    }

    private async findUserById(id: string) {
        const user = await userRepository.findById(id);
        if (!user) throw new Error(`Usuário não encontrado por ID: ${id}`);
        return user;
    }

}
