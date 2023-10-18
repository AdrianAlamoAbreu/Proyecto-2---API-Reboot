const User = require('../models/user.model')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signup = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_ROUNDS))
        req.body.password = bcrypt.hashSync(req.body.password, salt)

        const user = await User.create({
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
            country: req.body.country,
            number_phone: req.body.number_phone,
            birth_date: req.body.birth_date
        })

        const payload = { email: req.body.email }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h'})
        return res.status(200).json({ token })
    } catch (error) {
        console.log('Error signing up user')
        return res.status(500).json(error)
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!user) {
            return res.status(404).send('Email or password incorrect')
        }

        const checkPass= bcrypt.compareSync(req.body.password, user.password)

        if (checkPass) {
            const payload = { email: req.body.email }
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' })
            return res.status(200).json({ token })
        } else {
            return res.status(404).send('Email or password incorrect')
        }
    } catch (error) {
        console.log(error.message)
        console.log('Error in log in')
        return res.status(500).json(error)
    }
}

module.exports = {
    signup,
    login
}