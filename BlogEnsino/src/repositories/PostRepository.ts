import { Post } from '../models/Post';
import { Op } from 'sequelize';
import { PostResource } from '../resources/PostResource'; // Importa a entidade

export class PostRepository {
    // Retorna uma lista de PostEntities
    async findAll(): Promise<PostResource[]> {
        const posts = await Post.findAll();
        return posts.map(post => new PostResource(post.title, post.text, post.user_id, post.id));
    }

    // Retorna uma lista de PostEntities ao buscar pelo título
    async findByTitle(title: string): Promise<PostResource[]> {
        try {
            const posts = await Post.findAll({
                where: {
                    title: {
                        [Op.like]: `%${title}%`
                    }
                }
            });

            return posts.map(post => new PostResource(post.title, post.text, post.user_id, post.id));
        } catch (error) {
            console.error(`Erro ao procurar pelo titulo ${title} :`, error);
            throw new Error(`Erro ao procurar pelo titulo ${title} :`);
        }
    }

    // Busca por ID e retorna PostResource
    async findById(id: string): Promise<PostResource | null> {
        const post = await Post.findByPk(id);
        if (post) {
            return new PostResource(post.title, post.text, post.user_id, post.id);
        }
        return null;
    }

    // Cria um post e retorna PostResource
    async create(title: string, text: string, user_id: string): Promise<PostResource> {
        try {
            const post = await Post.create({
                title,
                text,
                user_id
            });

            if (!user_id) {
                throw new Error('User ID is missing');
            }

            return new PostResource(post.title, post.text, post.user_id, post.id);
        } catch (error) {
            console.error('Failed to create post:', error);
            throw new Error('Failed to create post');
        }
    }

    // Atualiza um post e retorna PostResource
    async update(id: string, updatedFields: Partial<{ title: string; text: string }>): Promise<PostResource | null> {
        try {
            const post = await Post.findByPk(id);
            if (post) {
                const updatedPost = await post.update(updatedFields);
                return new PostResource(updatedPost.title, updatedPost.text, updatedPost.user_id, updatedPost.id);
            }
        } catch (error) {
            throw new Error(`Não foi possível atualizar o Post ${error}`);
        }
        return null;
    }

    // Deleta um post e retorna PostResource ou null
    async delete(id: string): Promise<PostResource | null> {
        try {
            const post = await Post.findByPk(id);
            if (post) {
                await post.destroy();
                return new PostResource(post.title, post.text, post.user_id, post.id);
            }
        } catch (error) {
            throw new Error(`Não foi possível deletar o Post ${error}`);
        }
        return null;
    }
}
