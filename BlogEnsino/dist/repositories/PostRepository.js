"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const Post_1 = require("../models/Post");
const sequelize_1 = require("sequelize");
class PostRepository {
    async findAll() {
        return Post_1.Post.findAll();
    }
    async findByTitle(title) {
        try {
            const posts = await Post_1.Post.findAll({
                where: {
                    title: {
                        [sequelize_1.Op.like]: `%${title}%`
                    }
                }
            });
            return posts;
        }
        catch (error) {
            console.error(`Erro ao procurar pelo titulo ${title} :`, error);
            throw new Error(`Erro ao procurar pelo titulo ${title} :`);
        }
    }
    async findById(id) {
        return Post_1.Post.findByPk(id);
    }
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
            return post;
        }
        catch (error) {
            console.error('Failed to create post:', error); // Isso ajuda a depurar o erro
            throw new Error('Failed to create post');
        }
    }
    async update(id, updatedFields) {
        try {
            const post = await Post_1.Post.findByPk(id);
            if (post) {
                return post.update(updatedFields);
            }
        }
        catch (error) {
            throw new Error(`Não foi possivel atualizar o Post ${error}`);
        }
    }
    async delete(id) {
        try {
            const post = await Post_1.Post.findByPk(id);
            if (post) {
                post.destroy();
            }
            return post;
        }
        catch (error) {
            throw new Error(`Não foi deletar o Post ${error}`);
        }
    }
}
exports.PostRepository = PostRepository;
