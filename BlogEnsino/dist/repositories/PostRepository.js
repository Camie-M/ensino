"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const Post_1 = require("../models/Post");
const sequelize_1 = require("sequelize");
const PostEntity_1 = require("../entities/PostEntity"); // Importa a entidade
class PostRepository {
    // Retorna uma lista de PostEntities
    async findAll() {
        const posts = await Post_1.Post.findAll();
        return posts.map(post => new PostEntity_1.PostEntity(post.title, post.text, post.user_id, post.id));
    }
    // Retorna uma lista de PostEntities ao buscar pelo título
    async findByTitle(title) {
        try {
            const posts = await Post_1.Post.findAll({
                where: {
                    title: {
                        [sequelize_1.Op.like]: `%${title}%`
                    }
                }
            });
            return posts.map(post => new PostEntity_1.PostEntity(post.title, post.text, post.user_id, post.id));
        }
        catch (error) {
            console.error(`Erro ao procurar pelo titulo ${title} :`, error);
            throw new Error(`Erro ao procurar pelo titulo ${title} :`);
        }
    }
    // Busca por ID e retorna PostEntity
    async findById(id) {
        const post = await Post_1.Post.findByPk(id);
        if (post) {
            return new PostEntity_1.PostEntity(post.title, post.text, post.user_id, post.id);
        }
        return null;
    }
    // Cria um post e retorna PostEntity
    async create(title, text, user_id) {
        try {
            const post = await Post_1.Post.create({
                title,
                text,
                user_id
            });
            if (!user_id) {
                throw new Error('User ID is missing');
            }
            return new PostEntity_1.PostEntity(post.title, post.text, post.user_id, post.id);
        }
        catch (error) {
            console.error('Failed to create post:', error);
            throw new Error('Failed to create post');
        }
    }
    // Atualiza um post e retorna PostEntity
    async update(id, updatedFields) {
        try {
            const post = await Post_1.Post.findByPk(id);
            if (post) {
                const updatedPost = await post.update(updatedFields);
                return new PostEntity_1.PostEntity(updatedPost.title, updatedPost.text, updatedPost.user_id, updatedPost.id);
            }
        }
        catch (error) {
            throw new Error(`Não foi possível atualizar o Post ${error}`);
        }
        return null;
    }
    // Deleta um post e retorna PostEntity ou null
    async delete(id) {
        try {
            const post = await Post_1.Post.findByPk(id);
            if (post) {
                await post.destroy();
                return new PostEntity_1.PostEntity(post.title, post.text, post.user_id, post.id);
            }
        }
        catch (error) {
            throw new Error(`Não foi possível deletar o Post ${error}`);
        }
        return null;
    }
}
exports.PostRepository = PostRepository;
