const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')


const Book = connection.define ('books', {
    Title: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        require: true
    },
    Author: {
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
    publisher: {
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
        type: INTERGER,
        allowNull: false,
        unique: false
    }
}, {
    timestamps: false
})

module.exports = Book