import { User } from '../models/User';

export class UserRepository {
    async findAll() {
        return User.findAll();
    }

    async findById(id: string) {
        return User.findByPk(id);
    }

    async create(username: string, role: string) {
        return User.create({ username, role });
    }

    async update(id: string, updatedFields: { username: string; role: string }) {
        try {
            const user = await User.findByPk(id);
            if (user) {
                return user.update(updatedFields);
            }
        } catch (error) {
            throw new Error(`Não foi possivel atualizar o user ${error}`);
        }
    }

    async delete(id: string) {
        try {
            const user = await User.findByPk(id);
            if (user) {
                user.destroy();
            }
            return user
        } catch (error) {
            throw new Error(`Não foi deletar o user ${error}`);
        }
    }
}
