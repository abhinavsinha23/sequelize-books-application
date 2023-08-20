require("dotenv").config()

const express = require("express")

const Book = require("./books/model")

const Author = require("./authors/model")

const Genre = require("./genres/model")

const bookRouter = require("./books/routes")

const authorRouter = require("./authors/routes")

const genreRouter = require("./genres/routes")

const port = 5001

const app = express()
     

const syncTables = () => {
    Author.hasMany(Book)
    Book.belongsTo(Author)

    Genre.hasMany(Book)
    Book.belongsTo(Genre)
    
    Book.sync({alter: true});
    Author.sync({alter: true});
    Genre.sync({alter: true})
}

app.use(bookRouter)

app.use(authorRouter)

app.use(genreRouter)

app.get("/health", (req, res) => {
    res.status(200).json({message: "API is working"})
})

app.listen(port, () => {
    syncTables()
    console.log(`Server is running on port ${port}`)
})