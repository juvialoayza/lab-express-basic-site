const express = require('express');
const app = express()
const port = 3000

app.use(express.static("public"))

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about-page.html")
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works-page.html")
})

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/views/gallery-page.html")
})


// ruta 404
app.get("*", (req, res) => {
    res.send("Lo siento, esta pagina no existe :(")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});