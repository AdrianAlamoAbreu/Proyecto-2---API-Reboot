const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Comments = connection.define(
  'comments',
  {
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
      type: DataTypes.DECIMAL,
      require: true,
    }
  },
  { createdAt: false }
)

module.exports = Comments
