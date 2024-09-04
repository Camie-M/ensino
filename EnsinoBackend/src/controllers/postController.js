import Post from "../models/Post.js"
import crypto from "node:crypto"
import { Op } from "sequelize"

export const getAllPosts = async (req, res) => {
    try {
        const posts = Post.findAll()
        res.status(201).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id)
        res.status(201).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const createPost = async (req, res) => {
    try {
        const postToCreate = {
            id: crypto.randomUUID(),
            ...req.body
        }
        const post = await Post.create(postToCreate)
        res.status(201).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const editPost = async (req, res) => {
    try {
        const post = await Post.update(
            { ...req.body },
            { where: { id: req.params.id }}
        )
        res.status(201).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deletePost = async (req, res) => {
    try {        
        const post = await Post.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const searchPost = async (req, res) => {
    // Link usado para fazer isso https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
    try {
        const posts = await Post.findAll({
            where: {
                [Op.or]: [
                    {
                        title: {
                            [Op.like]: req.query.search
                        },
                        text: {
                            [Op.like]: req.query.search
                        }
                    }
                ]
            }
        })
        res.status(201).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
}