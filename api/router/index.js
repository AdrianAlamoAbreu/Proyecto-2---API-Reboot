const router = require('express').Router()

const authRouter = require('./auth.router')
const commentsRouter = require('./comments.router')
const booksRouter= require('./books.router')
const userRouter= require('./user.router')
const pending_listRouter= require('./pending_list.router')
router 
    .use('/auth', authRouter)
    .use('/user', userRouter)
    .use('/books', booksRouter)
    .use('/comment', commentsRouter)
    .use('/pending_list', pending_listRouter)

module.exports = router