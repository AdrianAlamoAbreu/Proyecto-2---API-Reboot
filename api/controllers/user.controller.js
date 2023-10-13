const Comments = require('../models/comments.model')
const User = require('../models/user.model')

const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll({
        where: req.query,
        attributes: {
          exclude: ['password']
        }
      })
  
      return res.status(200).json(users)
    } catch (error) {
      console.log('Error getting all users')
      return res.status(500).json(error)
    }
  }
  
  const getOneUser = async (req, res) => {
    try {
      const user = await User.findByPk(req.params.userId, {
        attributes: {
          exclude: ['password']
        },
      })  
      if (!user) {
        return res.status(404).send('User not found')
      }
      return res.status(200).json(user)
    } catch (error) {
      console.log('Error getting one user')
      return res.status(500).json(error)
    }
  }
  
  const getOwnProfile = async (req, res) => {
    try {
      const user = await User.findByPk(res.locals.user.id, {
        attributes: {
          exclude: ['password']
        },
        include: [
            {
              model: Comments,
              as: 'comments'
            }
        ]
      })
      if (!user) {
        return res.status(404).send('User not found')
      }
      return res.status(200).json(user)
    } catch (error) {
      console.log('Error getting profile')
      return res.status(500).json({error: error.message})
    }
  }
  
  const createUser = async (req, res) => {
    try {
      const saltRounds = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_ROUNDS))
      const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
      req.body.password = hashedPassword
  
      const user = await User.create({
        user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
            country: req.body.country,
            number_phone: req.body.number_phone,
            birth_date: req.body.birth_date
      })  
      res.status(200).json(user)
    } catch (error) {
      console.log('Error creating user')
      return res.status(500).json(error)
    }
  }
  
  const updateUser = async (req, res) => {
    try {
      const [user] = await User.update(req.body, {
        where: {
          id: req.params.userId
        }
      })
      if (!user) {
        return res.status(404).send('User not found')
      }
      return res.status(200).json({ message: 'User updated' })
    } catch (error) {
      console.log('Error updating user')
      res.status(500).json()
    }
  }

  const updateOwnProfile = async (req, res) => {
    try {
      const user = await User.update(req.body, {
        where: {
          id: res.locals.user.id
        },
      })
      if (!user) {
        return res.status(404).send('User not found')
      }
      return res.status(200).json(user)
    } catch (error) {
      console.log('Error getting profile')
      return res.status(500).json({error: error.message})
    }
  }
  
  const deleteUser = async (req, res) => {
    try {
      const user = await User.destroy({
        where: {
          id: req.params.userId
        }
      }) 
      if (!user) {
        return res.status(404).send('User not found')
      }
      
      return res.status(200).json({ message: 'User deleted' })
    } catch (error) {
      console.log('Error deleting user')
      res.status(500).json()
    }
  }

  const deleteOwnProfile = async (req, res) => {
    try {
      const user = await User.destroy({
        where: {
          id: res.locals.user.id
        }
      }) 
      if (!user) {
        return res.status(404).send('User not found')
      }
      
      return res.status(200).json({ message: 'User deleted' })
    } catch (error) {
      console.log('Error deleting user')
      res.status(500).json()
    }
  }

  const resetPassword = async (req, res) => {
    const { oldPassword, newPassword, repeatPassword } = req.body;
    
    try {
      const currentUser = await User.findByPk(res.locals.user.id);
  
      const isPasswordValid = await bcrypt.compare(oldPassword, currentUser.password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'La contraseña es incorrecta' });
      }
      if (newPassword !== repeatPassword) {
        return res.status(400).json({ error: 'Las contraseñas no coinciden' });
      }
      const saltRounds = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_ROUNDS));
      const hashedPassword = bcrypt.hashSync(newPassword, saltRounds);
      
      await currentUser.update({
        password: hashedPassword,
      });
  
      return res.status(200).json({ message: 'Contraseña actualizada' });
    } catch (error) {
      console.error('Error al restablecer la contraseña', error);
      return res.status(500).json({ error: 'Error al restablecer la contraseña' });
    }
  };
  
  
  module.exports = {
    getAllUsers,
    getOneUser,
    getOwnProfile,
    createUser,
    updateUser,
    updateOwnProfile,
    deleteUser,
    deleteOwnProfile,
    resetPassword
  }