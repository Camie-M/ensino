import { Request, Response } from "express";
import { PostRepository } from "../repositories/PostRepository";

const postRepository = new PostRepository();

export class PostController {
  static async createPost(req: Request, res: Response): Promise<void> {
    try {
      const { title, text, userId } = req.body;
      const post = await postRepository.create(title, text, userId);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to create post", error });
    }
  }

  static async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const posts = await postRepository.findAll();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve posts", error });
    }
  }

  static async getPostById(req: Request, res: Response): Promise<void> {
    try {
      const post = await postRepository.findById(req.params.id);
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve post", error });
    }
  }

  static async editPost(req: Request, res: Response): Promise<void> {
    try {
      const updatedPost = await postRepository.update(req.params.id, req.body);
      if (updatedPost) {
        res.status(200).json(updatedPost);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to update post", error });
    }
  }

  static async deletePost(req: Request, res: Response): Promise<void> {
    try {
      const success = await postRepository.delete(req.params.id);
      if (success) {
        res.status(200).json({ message: "Post deleted successfully" });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to delete post", error });
    }
  }
}
