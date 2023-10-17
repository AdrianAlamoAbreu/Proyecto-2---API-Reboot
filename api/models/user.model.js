const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const User = connection.define('user', {
    user_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      require: true
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user'
      },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      require: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    },
    country: {
        type: DataTypes.STRING,
        require: true
    },
    number_phone: {
        type: DataTypes.STRING,
    },
    birth_date: {
        type: DataTypes.DATE,
    }    
  },{
    timestamps: false
  })

  module.exports = User