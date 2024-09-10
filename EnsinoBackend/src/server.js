import express from "express"
import Sequelize from "sequelize"

import Post from "./models/Post.js"
import User from "./models/User.js"
import config from './config/database.js'

import postRoutes from './routes/postRoutes.js'
import userRoutes from "./routes/userRoutes.js"

const app = express()
app.use(express.json())

const sequelize = new Sequelize(config)
Post.init(sequelize)
User.init(sequelize)

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

sequelize.authenticate().then(() => {
    console.log("Banco de dados conectado")
    app.listen(3001, () => console.log("Servidor ON"))
}).catch(err => {
    console.error(err)
})