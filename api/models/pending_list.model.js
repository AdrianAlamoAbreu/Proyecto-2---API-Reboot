const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Pending_list = connection.define("Pending_list", {}, {timestamps: false})

module.exports =
    Pending_list
