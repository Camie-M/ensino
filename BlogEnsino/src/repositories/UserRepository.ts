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

    async update(id: string, updatedFields: Partial<{ username: string; role: string }>) {
        const user = await User.findByPk(id);
        if (user) {
            return user.update(updatedFields);
        }
        return null;
    }

    async delete(id: string) {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return true;
        }
        return false;
    }
}
