const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Comments = sequelize.define(
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
  { updateAt: false }
)

module.exports = Comments
