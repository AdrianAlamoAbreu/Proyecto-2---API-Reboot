const router = require('express').Router()

const {
  checkAuth,
  checkAdmin
} = require('../utils/middlewares')

const {
    getAllUsers,
    getOneUser,
    getOwnProfile,
    createUser,
    updateUser,
    updateOwnProfile,
    deleteUser,
    deleteOwnProfile,
    resetPassword
} = require('../controllers/user.controller')

router
  .get('/', checkAuth, checkAdmin, getAllUsers)
  .get('/:userId', checkAuth, getOneUser)
  .get('/profile', checkAuth, getOwnProfile)  
  .post('/', checkAuth, checkAdmin, createUser)
  .put('/:userId', checkAuth, checkAdmin, updateUser)
  .put('/profile', checkAuth, updateOwnProfile)
  .delete('/:userId', checkAuth, checkAdmin, deleteUser)
  .delete('/profile', checkAuth, deleteOwnProfile)
  .put('/password', checkAuth, resetPassword)

module.exports = router