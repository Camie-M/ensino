var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from '../entities/User';
import { v4 as uuidv4 } from 'uuid';
export class UserRepository {
    constructor() {
        this.users = [];
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.users.find(user => user.id === id);
            return user || null;
        });
    }
    create(username, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new User(username, role, uuidv4());
            this.users.push(newUser);
            return newUser;
        });
    }
    update(id, updatedFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const userIndex = this.users.findIndex(user => user.id === id);
            if (userIndex !== -1) {
                this.users[userIndex] = Object.assign(Object.assign(Object.assign({}, this.users[userIndex]), updatedFields), { updatedAt: new Date() });
                return this.users[userIndex];
            }
            return null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userIndex = this.users.findIndex(user => user.id === id);
            if (userIndex !== -1) {
                this.users.splice(userIndex, 1);
                return true;
            }
            return false;
        });
    }
}
