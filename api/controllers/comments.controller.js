const Comment = require('../models/comments.model')
require('dotenv').config()
const bcrypt = require('bcrypt')


const getAllComments = async (req, res) => {
    try {
      const comments = await Comment.findAll({
        where: req.query,
        
      })
  
      return res.status(200).json(comments)
    } catch (error) {
      console.log('Error comments not found')
      return res.status(500).json(error)
    }
  }
  
  const getOneComment = async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.commentId, {
        attributes: ['id', 'title', 'body', 'rating', 'createdAt', 'updatedAt', 'userId', 'bookId']
        });     
      if (!comment) {
        return res.status(404).send('Comment not found')
      }
      return res.status(200).json(comment)
    } catch (error) {
      console.log('Error getting one comment')
      return res.status(500).json(error)
    }
  }
  
  const getOwnComment = async (req, res) => {
    try {
      const comment = await User.findByPk(res.locals.user.comment, {
        
      
        
      })
      if (!comment) {
        return res.status(404).send('Comment not found')
      }
      return res.status(200).json(comment)
    } catch (error) {
      console.log('Error getting comment')
      return res.status(500).json({error: error.message})
    }
  }
  
  const createComment = async (req, res) => {
    try {
      
        const comment = await Comment.create({
          title: req.body.title,
          body: req.body.body,
          rating: req.body.rating,
          userId: req.body.userId,
          bookId: req.body.bookId
            
        });
      res.status(200).json(comment)
    } catch (error) {
      console.log('Error creating comment')
      return res.status(500).json(error)
    }
  }
  
  const updateComment = async (req, res) => {
    try {
      const [comment] = await Comment.update(req.body, {
        where: {
          id: req.params.commentId
        }
      })
      if (!comment) {
        return res.status(404).send('Comment not found')
      }
      return res.status(200).json({ message: 'Comment updated' })
    } catch (error) {
      console.log('Error updating comment')
      res.status(500).json()
    }
  }

  const updateOwnComment = async (req, res) => {
    try {
      const comment = await Comment.update(req.body, {
        where: {
          id: res.locals.comment.id
        },
      })
      if (!comment) {
        return res.status(404).send('Comment not found')
      }
      return res.status(200).json(comment)
    } catch (error) {
      console.log('Error getting comment')
      return res.status(500).json({error: error.message})
    }
  }
  
  const deleteComment = async (req, res) => {
    try {
      const comment = await Comment.destroy({
        where: {
          id: req.params.commentId
        }
      }) 
      if (!comment) {
        return res.status(404).send('Comment not found')
      }
      
      return res.status(200).json({ message: 'Comment deleted' })
    } catch (error) {
      console.log('Error deleting comment')
      res.status(500).json()
    }
  }

  const deleteOwnComment = async (req, res) => {
    try {
      const comment = await Comment.destroy({
        where: {
          id: res.locals.comment.id
        }
      }) 
      if (!comment) {
        return res.status(404).send('Comment not found')
      }
      
      return res.status(200).json({ message: 'Comment deleted' })
    } catch (error) {
      console.log('Error deleting comment')
      res.status(500).json()
    }
  }

 
  
  module.exports = {
    getAllComments,
    getOneComment,
    getOwnComment,
    createComment,
    updateComment,
    updateOwnComment,
    deleteComment,
    deleteOwnComment,
   
  }