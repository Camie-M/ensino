import express from "express"
import Sequelize from "sequelize"

import Post from "./models/Post.js"
import config from './config/database.js'

import postRoutes from './routes.js'

const app = express()
app.use(express.json())

const sequelize = new Sequelize(config)
Post.init(sequelize)

app.use('/posts', postRoutes)

sequelize.authenticate().then(() => {
    console.log("Banco de dados conectado")
    app.listen(3001, () => console.log("Servidor ON"))
}).catch(err => {
    console.error(err)
})


/* const mockPosts = [
    {
        title: "Titulo 1",
        author: "Author 1",
        text: "Lorem ipsum"
    },
    {
        title: "Titulo 2",
        author: "Author 2",
        text: "Lorem ipsum"
    }
] */