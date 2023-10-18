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
    deleteBook,
    getUserRating
} = require('../controllers/books.controller')

router
    .get('/:bookId', checkAuth, getUserRating)
    .get('/', getAllBooks)    
    .get('/:bookId', getOneBook)    
    .post('/', checkAuth, checkAdmin, createBook)
    .put('/:bookId', checkAuth, checkAdmin, updateBook)
    .delete('/:bookId', checkAuth, checkAdmin, deleteBook)
    


    module.exports = router