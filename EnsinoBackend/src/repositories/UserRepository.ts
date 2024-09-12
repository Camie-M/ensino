import { UserEntity } from '../entities/UserEntity';
import { v4 as uuidv4 } from 'uuid';

export class UserRepository {
    private users: UserEntity[] = [];

    async findAll(): Promise<UserEntity[]> {
        return this.users;
    }

    async findById(id: string): Promise<UserEntity | null> {
        const user = this.users.find(user => user.id === id);
        return user || null;
    }

    async create(username: string, role: string): Promise<UserEntity> {
        const newUser = new UserEntity(username, role, uuidv4());
        this.users.push(newUser);
        return newUser;
    }

    async update(id: string, updatedFields: Partial<UserEntity>): Promise<UserEntity | null> {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedFields, updatedAt: new Date() };
            return this.users[userIndex];
        }
        return null;
    }

    async delete(id: string): Promise<boolean> {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            return true;
        }
        return false;
    }
}
