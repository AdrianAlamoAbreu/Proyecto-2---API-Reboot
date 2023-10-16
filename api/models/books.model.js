const { DataTypes, INTEGER } = require('sequelize')
const { connection } = require('../../database/index')


const Book = connection.define ('books', {
    title: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        require: true
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        require: true
    },
    genre: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        require: true
    },
    pages: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false,
        require: true
    },
    published_date: {
        type: DataTypes.DATE,
        unique: false,
        allowNull: false
    },
    the_publisher: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        require: true
    },
    price: {
        type: DataTypes.DECIMAL,
        unique: false,
        allowNull: false,
        require: true
    },
    language: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        require: true
    }, 
    user_rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    }
}, {
    updateAt: false
})

module.exports = Book
