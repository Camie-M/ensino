import User from "../models/User.js"
import crypto from "node:crypto"

export const createUser = async (req, res) => {
    try {
        const userToCreate = {
            id: crypto.randomUUID(),
            username: req.body.username,  // Certifique-se de que req.body contém username e role
            role: req.body.role,
        }
        const user = await User.create(userToCreate)
        res.status(201).json(user)
    } catch (error) {
        console.error(error); // Loga o erro no console para depuração

        // return 
        return (
            res.status(500).json({ error: error.message, debugMessage: 'Here is what we received', data: req.body }) // Retorna a mensagem de erro
        ); // Retorna a mensagem de erro

    }
}

export const editUser = async (req, res) => {
    try {
        const user = await User.update(
            { ...req.body },
            { where: { id: req.params.id } }
        )
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}