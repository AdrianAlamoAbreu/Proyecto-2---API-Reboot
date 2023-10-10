const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')


const Publisher = connection.define ('publisher', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        unique: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        unique: false
    },
    foundation_year: {
        type: DataTypes.DATE,
        allowNull: false,
        require: false,
        unique: false
    }
}, {timestamps: false  
})

module.exports = Publisher