const router = require('express').Router()

const {
    checkAuth,
    checkAdmin
} = require('../utils/middlewares')

const {
    getAllPendingBook,
    getOnePendingBook,
    createPendingBook,
    deletePendingBook
} = require('../controllers/pending_list.controller')

router.get('/', checkAuth, getAllPendingBook)
router.get('/pendingId', checkAuth, getOnePendingBook)
router.post('/', checkAuth, createPendingBook)
router.delete('/pendingId', checkAuth, deletePendingBook)

module.exports = router