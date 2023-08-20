const {Router} = require("express")

const bookRouter = Router()

const {addBook, getAllBooks, updateBooks, deleteBooks, getOneBook, deleteAll} = require("./controllers")

bookRouter.post("/books/addBook", addBook)

bookRouter.get("/books/getBooks", getAllBooks)

bookRouter.put("/books/updateBooks", updateBooks)

bookRouter.delete("/books/deleteBooks", deleteBooks)

bookRouter.get("/books/getOneBook", getOneBook)

bookRouter.delete("/books/deleteAll", deleteAll)

module.exports = bookRouter