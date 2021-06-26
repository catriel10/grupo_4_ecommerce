const { body } = require('express-validator')
const bcrypt = require('bcryptjs')
const userModel = require('../models/usersModel')

const validationLoginUser = [
    body('email')
        .notEmpty()
        .withMessage('Please enter your email')
        .isEmail()
        .withMessage('It is not in e-mail format'),
    body('password')
        .notEmpty()
        .withMessage('Please enter your password')
        .bail()
        .custom((value, { req }) => {
            const { email, password } = req.body
            
            // encontrar un usuario con el email
            const userFound = userModel.findByField('email', email)

            // chequear que userFound exista
            if (userFound) {

                // comparar contraseñas
                const passwordMatch = bcrypt.compareSync(password, userFound.password)

                if (passwordMatch) {
                    return true
                }
            }

            return false
        })
        .withMessage('The username or password is invalid'),
]

module.exports = validationLoginUser