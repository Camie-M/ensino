import PostRepository from '../repositories/PostRepository.js';
import crypto from 'node:crypto';

export const getAllPosts = async (req, res) => {
    try {
        const posts = await PostRepository.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getPostById = async (req, res) => {
    try {
        const post = await PostRepository.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const createPost = async (req, res) => {
    try {
        const postToCreate = {
            id: crypto.randomUUID(),
            title: req.body.title,
            text: req.body.text,
        };
        const post = await PostRepository.create(postToCreate);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message, debugMessage: 'Here is what we received', data: req.body }) // Retorna a mensagem de erro
    }
};

export const editPost = async (req, res) => {
    try {
        const post = await PostRepository.update(req.params.id, req.body);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deletePost = async (req, res) => {
    try {
        const post = await PostRepository.delete(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const searchPost = async (req, res) => {
    try {
        const posts = await PostRepository.searchPosts(req.query.search);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
};
