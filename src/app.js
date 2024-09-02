import express from "express";

const app = express();

const posts = [
    {
        id: 1,
        titulo: "Titulo 1",
        text: "Lorem ipsum"
    },
    {
        id: 2,
        titulo: "Titulo 2",
        text: "Lorem ipsum"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Blog Ensino")
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts)
})

export default app