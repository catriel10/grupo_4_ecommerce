const { body } = require('express-validator')
const userModel = require('../../src/models/usersModel')
const { isFileImage } = require('../../src/helpers/file')

const validationRegisterUser = [
    body('name')
        .notEmpty()
        .withMessage('Please enter your name'),
    body('email')
        .notEmpty()
        .withMessage('Please enter your e-mail')
        .isEmail()
        .withMessage('It is not in e-mail format')
        .bail()
        .custom((email) => {
            const userFound = userModel.findByField('email', email)

            if (userFound) {
                return false
            }

            return true
        })
        .withMessage('User already exists'),
    body('password')
        .notEmpty()
        .withMessage('Please enter your password')
        .bail()
        /* .isStrongPassword()
        .withMessage('Por favor ingrese un password etc') */
        ,
    body('image')
        .custom((value, { req }) => {
            const { file } = req

            // chequea que haya cargado imagen
            if (!file) {
                // esto es como si hicieramos .withMessage('Seleccione un archivo')
                throw new Error('Please enter an image')
            }


            if (!isFileImage(file.originalname)) {
                // disparar error
                throw new Error('Please enter a file that is an image')
            }

            // chequea que la extensión sea la correcta
            
            return true
        })
]

module.exports = validationRegisterUser