const Book = require("./model")
const Author = require("../authors/model")
const Genre = require("../genres/model")

const addBook = async (req, res) => {
    try {
        const author = await Author.findOne({
            where: {
                authorName: req.body.author
            }
        })
        const genre = await Genre.findOne({
            where: {
                genreName: req.body.genre
            }
        })
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            AuthorId: author.id,
            GenreId: genre.id
        })
        res.status(200).json({message: "Success", book: newBook})
    }
    catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll()
        res.status(200).json({message: "Success", books: books})
    }
    catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

const getOneBook = async (req, res) => {
    try {
        const book = await Book.findOne({
            where: {
                title: req.body.title
            }
        })
        res.status(200).json({message: "Success", book: book})
    }
    catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

const updateBooks = async (req, res) => {
    try {
        const updatedBook = await Book.update(
            {
                [req.body.key]: req.body.newKey
            },
            {
                where: {
                    title: req.body.title
                }
            }    
        )  
        res.status(200).json({message: "Success", updatedBook: updatedBook})
    }
    catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
} 

const deleteBooks = async (req, res) => {
    try {
        const deletedBook = await Book.destroy({
            where: {
                title: req.body.title
            }
        })
        res.status(200).json({message: "Success", deletedBook: deletedBook})
    }
    catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

const deleteAll = async (req, res) => {
    try {
        const deletedBooks = await Book.destroy({
            where: {
                
            }
        })
        res.status(200).json({message: "Success", deletedBooks: deletedBooks})
    }
    catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

module.exports = {
    addBook,
    getAllBooks,
    updateBooks,
    deleteBooks,
    getOneBook,
    deleteAll
}