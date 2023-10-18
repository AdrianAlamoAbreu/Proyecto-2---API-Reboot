const Pending_list = require('../models/pending_list.model')
const User = require('../models/user.model')


const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const getAllPendingBook = async (req, res) => {
    try {
      const pending = await Pending_list.findAll({
        where: req.query,
        
      })
  
      return res.status(200).json(pending)
    } catch (error) {
      console.log('Error comments not found')
      return res.status(500).json(error)
    }
  }
  
  const getOnePendingBook = async (req, res) => {
    try {
      const pending = await Pending_list.findByPk(req.param.id, {
        include: [
            {
              model: books,
              as: 'pending_list'
            }
        ] 
      })  
      if (!pending) {
        return res.status(404).send('Book not found')
      }
      return res.status(200).json({pending})
    } catch (error) {
      console.log('Error getting one book')
      return res.status(500).json(error)
    }
  }

  const createPendingBook = async (req, res) => {
    try {
      
        const pending = await Pending_list.create({
          bookPending: req.body.title
      })  

      const user = await User.findByPk(req.param.id)
      await pending.setUser(user)

      return res.status(200).json({message: 'Pending book created:', pending})
    } catch (error) {
      console.log('Error creating Book')
      return res.status(500).json(error)
    }
  }

  const deletePendingBook = async (req, res) => {
    try {
      const pending = await Pending_list.destroy({
        where: {
          id: req.params.pendingId
        }
      }) 
      if (!pending) {
        return res.status(404).send('Book not found')
      }
      
      return res.status(200).json({ message: 'Book deleted' })
    } catch (error) {
      console.log('Error deleting comment')
      res.status(500).json()
    }
  }

  module.exports = {
    getAllPendingBook,
    getOnePendingBook,
    createPendingBook,
    deletePendingBook
  }
