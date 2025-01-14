import { AuthService } from './AuthService';
import { PostMapper } from "../mappers/PostMapper";
import { PostRepository } from "../repositories/PostRepository";
import { PostResource } from "../resources/PostResource";
import { AwsS3Service } from './AwsS3Service';
import { v4 as uuidv4 } from 'uuid';

const postRepository = new PostRepository()
const authService = new AuthService()
const awsS3Service = new AwsS3Service()
const allowedRoles = ["admin", "professor"]
export class PostService {
    async create(title: string, text: string, image: Buffer, token: string): Promise<PostResource | Error> {
        await authService.validateUser(token, allowedRoles);
        const user = await authService.decodeToken(token)
        const imageUrl = await awsS3Service.uploadFileToAws(uuidv4(), image)
        const createdPost = await postRepository.create(title, text, user.username, imageUrl, user.id);
        return PostMapper.mapToResource(createdPost);
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

    async update(id: string, token: string, title: string, text: string, image: Buffer | null | undefined): Promise<PostResource | Error> {
        let updatedPost;
        await authService.validateUser(token, allowedRoles);
        const post = await this.findPostById(id);
        if (image && image.length > 0) {
            const image_url = await awsS3Service.uploadFileToAws(uuidv4(), image)
            updatedPost = await postRepository.updateWithImage(post, { title, text, image_url })
        } else {
            updatedPost = await postRepository.update(post, { title, text })
        }

        return PostMapper.mapToResource(updatedPost)
    }

    async delete(id: string, token: string): Promise<void> {
        await authService.validateUser(token, allowedRoles);
        const post = await this.findPostById(id);

        postRepository.delete(post)
    }

    private async findPostById(id: string) {
        const post = await postRepository.findById(id);
        if (!post) throw new Error("Não encontramos nenhum post com esse titulo");
        return post;
    }

}