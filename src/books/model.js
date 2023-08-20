const {DataTypes} = require("sequelize")

const connection = require("../db/connection")

const Book = connection.define("Book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false, // every book must have a title
        unique: true // every title must be unique in the table
    },
    author: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    },
    AuthorId: {
        type: DataTypes.INTEGER
    },
    GenreId: {
        type: DataTypes.INTEGER
    }
})

module.exports = Book;