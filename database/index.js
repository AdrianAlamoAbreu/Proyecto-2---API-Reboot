const { Sequelize } = require('sequelize')

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  logging: false
})

const checkConnection = async () => {
    try {
      await connection.authenticate()
      console.log('Connected to DB')
    } catch (error) {
      throw error
    }
  }

const syncModels = async () => {
    try {
        await connection.sync({alter: false})
        console.log("Models Synched")
    } catch (error) {
        throw error
        console.log("El error está en la función Sync Models")
    }
}

module.exports = {
    connection,
    checkConnection,
    syncModels
}