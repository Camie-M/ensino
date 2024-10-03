import { PostMapper } from "../mappers/PostMapper";
import { PostRepository } from "../repositories/PostRepository";
import { PostResource } from "../resources/PostResource";

const postRepository = new PostRepository()

export class PostService {
    async create(title: string, text: string, user_id: string): Promise<PostResource> {
        try {
            const createdPost = await postRepository.create(title, text, user_id)
            return PostMapper.mapToResource(createdPost)
        } catch (error) {
            throw new Error(`Não foi possível criar o post: ${error}`);
        }
    }

    async findAll(): Promise<PostResource[]> {
        try {
            const posts = await postRepository.findAll();
            return posts.map(post => PostMapper.mapToResource(post));
        } catch (error) {
            throw new Error(`Não foi possível encontrar os posts: ${error}`);
        }

    }

    async findByTitle(title: string): Promise<PostResource[]> {
        try {
            const posts = await postRepository.findByTitle(title);
            if (posts === null || posts.length == 0) throw new Error("Não encontramos nenhum post com esse titulo");
            const postList = posts.map(post => PostMapper.mapToResource(post));
            return postList
        } catch (error) {
            throw new Error(`Não foi possível realizar a busca de posts: ${error}`);
        }
    }

    async findById(id: string): Promise<PostResource> {
        try {
            const post = await this.findPostById(id);
            return PostMapper.mapToResource(post)
        } catch (error) {
            throw new Error(`Não foi possível encontrar o usuário: ${error}`);
        }
    }

    async update(id: string, updatedFields: { title: string; text: string }): Promise<PostResource | null> {
        try {
            const post = await this.findPostById(id);
            const updatedPost = await postRepository.update(post, updatedFields)
            return PostMapper.mapToResource(updatedPost)
        } catch (error) {
            throw new Error(`Não foi possível atualizar o Post ${error}`);
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const post = await this.findPostById(id);
            postRepository.delete(post)
        } catch (error) {
            throw new Error(`Não foi possível deletar o post: ${error}`);
        }
    }

    private async findPostById(id: string) {
        const post = await postRepository.findById(id);
        if (!post) throw new Error("Não encontramos nenhum post com esse titulo");
        return post;
    }
}
