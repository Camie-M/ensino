"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const PostEntity_1 = require("../entities/PostEntity");
const uuid_1 = require("uuid");
class PostRepository {
    constructor() {
        this.posts = [];
    }
    async findAll() {
        return this.posts;
    }
    async findById(id) {
        const post = this.posts.find(post => post.id === id);
        return post || null;
    }
    async create(title, text, userId) {
        const newPost = new PostEntity_1.PostEntity(title, text, userId, (0, uuid_1.v4)());
        this.posts.push(newPost);
        return newPost;
    }
    async update(id, updatedFields) {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex !== -1) {
            this.posts[postIndex] = { ...this.posts[postIndex], ...updatedFields, updatedAt: new Date() };
            return this.posts[postIndex];
        }
        return null;
    }
    async delete(id) {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex !== -1) {
            this.posts.splice(postIndex, 1);
            return true;
        }
        return false;
    }
}
exports.PostRepository = PostRepository;
