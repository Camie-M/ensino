import { Post } from '../models/Post';
import { Op } from 'sequelize';

export class PostRepository {
    async findAll() {
        return Post.findAll();
    }
    async findByTitle(title: string) {
        try {
            const posts = await Post.findAll({
                where: {
                    title: {
                        [Op.like]: `%${title}%`
                    }
                }
            });
            return posts;
        } catch (error) {
            console.error(`Erro ao procurar pelo titulo ${title} :`, error);
            throw new Error(`Erro ao procurar pelo titulo ${title} :`);
        }
    }
    async findById(id: string) {
        return Post.findByPk(id);
    }

    async create(title: string, text: string, user_id: string) {
        try {
            const post = await Post.create({
                title,
                text,
                user_id
            });

            if (!user_id) {
                throw new Error('User ID is missing');
            }
            return post;
        } catch (error) {
            console.error('Failed to create post:', error);
            throw new Error('Failed to create post');
        }
    }


    async update(id: string, updatedFields: Partial<{ title: string; text: string }>) {
        try {
            const post = await Post.findByPk(id);
            if (post) {
                return post.update(updatedFields);
            }
        } catch (error) {
            throw new Error(`Não foi possivel atualizar o Post ${error}`);
        }
    }


    async delete(id: string) {
        try {
            const post = await Post.findByPk(id);
            if (post) {
                post.destroy();
            }
            return post
        } catch (error) {
            throw new Error(`Não foi deletar o Post ${error}`);
        }
    }
}
