const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Comment = connection.define('comments', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    body: {
      type: DataTypes.STRING,
      require: true,
    },
    rating: {
      type: DataTypes.FLOAT(10, 2),
      require: true,
    }
  },{
    timestamps: false
  })

module.exports = Comment
