import { UserEntity } from '../entities/UserEntity';
import { User } from '../models/User';

export class UserRepository {
    async findAll(): Promise<UserEntity[]> {
        const users = await User.findAll();
        return users.map(user => new UserEntity(user.username, user.role, user.id));
    }

    async findById(id: string): Promise<UserEntity | null> {
        const user = await User.findByPk(id);
        if (user) {
            return new UserEntity(user.username, user.role, user.id);
        }
        return null;
    }

    async create(username: string, role: string): Promise<UserEntity> {
        const user = await User.create({ username, role });
        return new UserEntity(user.username, user.role, user.id);
    }


    async update(id: string, updatedFields: { username: string; role: string }): Promise<UserEntity | null> {
        try {
            const user = await User.findByPk(id);
            if (user) {
                const updatedUser = await user.update(updatedFields);
                return new UserEntity(updatedUser.username, updatedUser.role, updatedUser.id);
            }
            return null;
        } catch (error) {
            throw new Error(`Não foi possível atualizar o usuário: ${error}`);
        }
    }

    async delete(id: string): Promise<UserEntity | null> {
        try {
            const user = await User.findByPk(id);
            if (user) {
                await user.destroy();
                return new UserEntity(user.username, user.role, user.id);
            }
            return null;
        } catch (error) {
            throw new Error(`Não foi possível deletar o usuário: ${error}`);
        }
    }
}
