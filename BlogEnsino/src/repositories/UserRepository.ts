import { UserResource } from '../resources/UserResource';
import { User } from '../models/User';
import { Op } from 'sequelize';

export class UserRepository {
    findAll(): Promise<User[]> {
        return User.findAll();
    }

    findById(id: string): Promise<User | null> {
        return User.findByPk(id);
    }

    findByUsername(username: string): Promise<User | null> {
        return User.findOne({ where: { username: username } })
    }

    create(username: string, role: string, password:string): Promise<User> {
        if (!role || !username || !password) {
            return Promise.reject(new Error('Role, Username e senha são necessarios'));
        }
        return User.create({ username, role, password})
    }

    update(user: User, fields: { username: string; role: string }): Promise<User> {
        return user.update(fields)
    }

    delete(user: User): Promise<void> {
        return user.destroy()
    }
}
