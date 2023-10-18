const router = require('express').Router()

const {
    checkAuth,
    checkAdmin
} = require('../utils/middlewares')

const {
    getAllBooks,
    getOneBook,
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/books.controller')

router
    .get('/', getAllBooks)
    .get('/:bookId', getOneBook)
    .post('/', checkAuth, checkAdmin, createBook)
    .put('/:bookId', checkAuth, checkAdmin, updateBook)
    .delete('/:bookId', checkAuth, checkAdmin, deleteBook)

    module.exports = router