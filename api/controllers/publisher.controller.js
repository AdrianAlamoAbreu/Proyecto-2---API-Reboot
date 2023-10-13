const Publisher = require('../models/publisher.model')


const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const getAllPublisher = async (req, res) => {
    try {
        const publisher = await Publisher.findAll({
            where: req.query,
        })

        return res.status(200).json(books)
    } catch (error) {
        console.log("Error in get all publisher")
        return res.status(500).json(error)
    }
}

const getOnePublisher = async (req, res) => {
    try {
        const publisher = await Publisher.findByPk(req.params.name)            
        if (!publisher) {
        return res.status(404).send('Publisher not found')}
        return res.status(200).json(book)
    } catch (error) { 
        console.log("Error getting one publishe")
        return res.status(500).json(error)
    }
}

const createPublisher = async (req, res) => {
    try {
        
        const publisher = await Publisher.create({
          name: req.body.name,  
          country: req.body.country,
          foundation_year: req.body.foundation_year
        })

        res.status(200).json(publisher)
    } catch (error) {
        console.log("Error creating publisher file")
        return res.status(500).json(error)
    }
}

const updatePublisher = async (req, res) => {
    try {
        const [publisher] = await Publisher.update(req.body, {
            where: {
                id: req.params.publisherId
            }
        })
        if (!publisher) {
            return res.status(404).send('Publisher not found')
        }
        return res.status(200).json( { message: 'Publisher updated' } )
    } catch (error) {
        console.log("Error updating publisher")
        return res.status(500).json()
    }
}

const deletePublisher = async (req, res) => {
    try {
        const publisher = await Publisher.destroy({
            where: {
                id: req.params.publisherId
            }
        })
        if (!publisher) {
            return res.status(404).send("Publisher not found")
        }
        return res.status(200).json( { message: "Publisher deleted" } )
    } catch (error) {
        console.log("Error deleting Publisher")
        res.status(500).json()
    }
}

module.exports = {
    getAllPublisher,
    getOnePublisher,
    createPublisher,
    updatePublisher,
    deletePublisher
}
