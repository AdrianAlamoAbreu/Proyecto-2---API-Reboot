require('dotenv').config()
console.log(process.env)
const express = require('express')
const morgan = require('morgan')

const { checkConnection, syncModels } = require ('./database/index.js')

const addRelations = require('./database/relations.js')

function starExpress () {
  const app = express()
  .use(morgan('dev'))
  .use(express.json())

  .use('/api', require('./api/routes'))

  .listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
  })
}

async function checkDB () {
    await checkConnection()
    addRelations()
    await syncModels ()
}

;(async function startAPI () {
    await checkDB()
    startExpress()
}) ()