const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "./public");

app.use(express.static(publicPath))

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
});

const tablaPath = path.join(__dirname, "./public/views/index.html");

app.get("/", (req,res) => {
    res.sendFile(tablaPath);
})