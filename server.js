const { PORT } = require("./config")
const express = require("express")
const exphbs = require("express-handlebars")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, "/public")))

app.engine(".hbs",exphbs.create({
    layoutsDir: path.join(__dirname, "/views/layouts"),
    defaultLayout: path.join(__dirname, "/views/layouts/main_layout.hbs"),
    partialsDir: path.join(__dirname, "/views/partials"),
    extname: ".hbs"
}).engine)

app.set("view engine", ".hbs")

app.use(require("./router/landing/index"))

app.listen(PORT)