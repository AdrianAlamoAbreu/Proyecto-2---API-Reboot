const router = require('express').Router()

const authRouter = require('./auth.router')
const commentsRouter = require('./comments.router')
const booksRouter= require('./comments.router')
const userRouter= require('./user.router')

router 
    .use('/auth', authRouter)
    .use('/user', userRouter)
    .use('/books', bookRouter)
    .use('/comment', commentsRouter)

module.exports = router