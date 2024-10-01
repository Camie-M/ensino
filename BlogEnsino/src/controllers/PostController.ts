import { Request, Response } from "express";
import { PostService } from "../services/PostService";

const postService = new PostService();

export class PostController {
  static async createPost(req: Request, res: Response): Promise<void> {
    try {
      const { title, text, user_id } = req.body;
      const post = await postService.create(title, text, user_id);
      res.status(201).json(post);
      console.log({ title, text, user_id });
    } catch (error) {
      res.status(500).json({ message: "Falha ao criar o Post", error });
      // throw new Error(`Falha ao criar o Post", ${error}`)
    }
  }

  static async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const posts = await postService.findAll();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Falha ao Buscar os Posts", error });
      // throw new Error(`Falha ao Buscar os Posts", ${error}`)
    }
  }

  static async getPostById(req: Request, res: Response): Promise<void> {
    try {
      const post = await postService.findById(req.params.id);
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Falha ao Buscar o Post", error });
      // throw new Error(`Falha ao Buscar o Post", ${error}`)
    }
  }

  static async getPostByTitle(req: Request, res: Response): Promise<void> {
    try {
      const title = req.query.title as string
      const posts = await postService.findByTitle(title);
      if (posts.length > 0) {
        res.status(200).json(posts);
      } else {
        res.status(404).json({ message: "Post não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Falha ao Buscar o Post title", error });
      // throw new Error(`Falha ao Buscar o Post title", ${error}`)
    }
  }

  static async editPost(req: Request, res: Response): Promise<void> {
    try {
      const updatedPost = await postService.update(req.params.id, req.body);
      if (updatedPost) {
        res.status(200).json(updatedPost);
      } else {
        res.status(404).json({ message: "Post não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Falha ao atualizar o Post", error });
      // throw new Error(`Falha ao atualizar o Post", ${error}`)
    }
  }

  static async deletePost(req: Request, res: Response): Promise<void> {
    try {
      await postService.delete(req.params.id);
      res.status(200).json({ message: 'Post deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar post:', error);

      if (error instanceof Error) {
        if (error.message.includes('Post não encontrado')) {
          res.status(404).json({ message: 'Post não encontrado' });
        } else {
          res.status(500).json({ message: 'Erro ao deletar Post', error: error.message });
        }
      } else {
        res.status(500).json({ message: 'Erro desconhecido ao deletar Post' });
      }
    }
  }
}
