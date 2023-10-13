const router = require('express').Router()

const {
    checkAuth,
    checkAdmin
} = require('../utils/middlewares')

const {
    getAllPublisher,
    getOnePublisher,
    createPublisher,
    updatePublisher,
    deletePublisher
} = require('../controllers/publisher.controller')

router
    .get('/', checkAuth, getAllPublisher)
    .get('/:name', checkAuth, getOnePublisher)
    .post('/', checkAuth, checkAdmin, createPublisher)
    .put('/:bookId', checkAuth, checkAdmin, updatePublisher)
    .delete('/:bookId', checkAuth, checkAdmin, deletePublisher)

    module.exports = router
