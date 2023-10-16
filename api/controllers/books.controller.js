const Book = require('../models/books.model')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll({
            where: req.query,
        })

        return res.status(200).json(books)
    } catch (error) {
        console.log("Error in get all books")
        return res.status(500).json(error)
    }
}

const getOneBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.bookId)
        if (!book) {
        return res.status(404).send('Book not found')}
        return res.status(200).json(book)
    } catch (error) { 
        console.log("Error getting one book")
        return res.status(500).json(error)
    }
}

const createBook = async (req, res) => {
    try {
        const saltRounds = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_ROUNDS))
        const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
        req.body.password =  hashedPassword

        const book = await Book.create({
          title: req.body.title,  
          author: req.body.author,
          genre: req.body.genre,
          pages: req.body.pages,
          published_date: req.body.published_date,
          publisher: req.body.publisher,
          price: req.body.price,
          language: req.body.language
        })

        res.status(200).json(book)
    } catch (error) {
        console.log("Error creating book file")
        return res.status(500).json(error)
    }
}

const updateBook = async (req, res) => {
    try {
        const [book] = await Book.update(req.body, {
            where: {
                id: req.params.bookId
            }
        })
        if (!book) {
            return res.status(404).send('Book not found')
        }
        return res.status(200).json( { message: 'Book updated' } )
    } catch (error) {
        console.log("Error updating book")
        return res.status(500).json()
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await Book.destroy({
            where: {
                id: req.params.bookId
            }
        })
        if (!book) {
            return res.status(404).send("Book not found")
        }
        return res.status(200).json( { message: "Book deleted" } )
    } catch (error) {
        console.log("Error deleting book")
        res.status(500).json()
    }
}

module.exports = {
    getAllBooks,
    getOneBook,
    createBook,
    updateBook,
    deleteBook
}