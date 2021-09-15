const { body } = require('express-validator')
const bcrypt = require('bcryptjs')
const { User } = require('../database/models');

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
        .custom(async(value, { req }) => {
            const { email, password } = req.body
            
            // encontrar un usuario con el email
            const userFound = await User.findOne({
                where: {
                    email
                }
            })    

            // chequear que userFound exista
            if (userFound) {

                // comparar contraseñas
                const passwordMatch = bcrypt.compareSync(password, userFound.password)

                if (!passwordMatch) {
                    return Promise.reject ("The username or password are invalid")
                }
            
            return true

            } else {
                        return Promise.reject ("The username or password are invalid")
            }
            }),
        
]

module.exports = validationLoginUser