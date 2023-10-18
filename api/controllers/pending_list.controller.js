const Pending_list = require('../models/pending_list.model')
const Book = require('../models/books.model')
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
      const pending = await Pending_list.findByPk(req.params.pendingId)  
      if (!pending) {
        return res.status(404).send('Book not found')
      }
      const books = await pending.getBooks()
      return res.status(200).json(books)
    } catch (error) {
      console.log('Error getting one book')
      return res.status(500).json(error)
    }
  }

  const getOwnPendingList = async (req, res) => {
    try {
      const pending = await Pending_list.findByPk({
        userId: res.locals.user.id
      })   
      if (!pending) {
        return res.status(404).send('Book not found')
      }
      const books = await pending.getBooks();
      return res.status(200).json(books)
    } catch (error) {
      console.log('Error getting one book')
      return res.status(500).json(error)
    }
  }
  

  const createPendingBook = async (req, res) => {
    try {
      
        const pending = await Pending_list.create({
            userId: res.locals.user.id
      })  
      const book = await Book.findByPk(req.body.bookId)
      await pending.setBooks(book)
      res.status(200).json(book)
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

  const updatePendingList = async (req, res) => {
    try {
        const [pending] = await Pending_list.update(req.body, {
            where: {
                id: res.locals.pending.id
              },
        })  
        const book = await Book.findByPk(req.body.bookId)
        await pending.setBooks(book)
        res.status(200).json(book)
      } catch (error) {
        console.log('Error updating user')
        res.status(500).json()
      }
    }



  module.exports = {
    getAllPendingBook,
    getOnePendingBook,
    createPendingBook,
    deletePendingBook,
    getOwnPendingList,
    updatePendingList
  }
