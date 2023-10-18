const router = require('express').Router()

const {
    checkAuth,
    checkAdmin
  } = require('../utils/middlewares')

const { 
    getAllComments, 
    getOneComment, 
    createComment, 
    updateComment, 
    deleteComment 
} = require('../controllers/comments.controller')

router.get('/', checkAuth, getAllComments)
router.get('/:commentId', checkAuth, getOneComment)
router.post('/', checkAuth, createComment)
router.put('/:commentId', checkAuth, updateComment)
router.delete('/:commentId', checkAuth, deleteComment)

module.exports = router