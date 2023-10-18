const router = require('express').Router()

const {
    checkAuth,
    checkAdmin
} = require('../utils/middlewares')

const {
    getAllPendingBook,
    getOnePendingBook,
    createPendingBook,
    deletePendingBook,
    getOwnPendingList,
    updatePendingList
} = require('../controllers/pending_list.controller')


router.get('/', checkAuth, getAllPendingBook)
router.get('/:pendingId', checkAuth, getOnePendingBook)
router.get('/pending_list', checkAuth, getOwnPendingList)
router.post('/', checkAuth, createPendingBook)
router.put('/pending_list', checkAuth, updatePendingList)
router.delete('/:pendingId', checkAuth, deletePendingBook)



module.exports = router