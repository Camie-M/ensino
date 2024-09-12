var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Post } from '../entities/Post';
import { v4 as uuidv4 } from 'uuid';
export class PostRepository {
    constructor() {
        this.posts = [];
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.posts;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = this.posts.find(post => post.id === id);
            return post || null;
        });
    }
    create(title, text, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPost = new Post(title, text, userId, uuidv4());
            this.posts.push(newPost);
            return newPost;
        });
    }
    update(id, updatedFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const postIndex = this.posts.findIndex(post => post.id === id);
            if (postIndex !== -1) {
                this.posts[postIndex] = Object.assign(Object.assign(Object.assign({}, this.posts[postIndex]), updatedFields), { updatedAt: new Date() });
                return this.posts[postIndex];
            }
            return null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const postIndex = this.posts.findIndex(post => post.id === id);
            if (postIndex !== -1) {
                this.posts.splice(postIndex, 1);
                return true;
            }
            return false;
        });
    }
}
