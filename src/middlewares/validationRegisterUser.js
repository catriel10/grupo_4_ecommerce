
const { body } = require('express-validator')
const userModel = require('../../src/models/usersModel')
const { isFileImage } = require('../../src/helpers/file')
const path = require('path')

const validationRegisterUser = [
    body('name')
        .notEmpty()
        .withMessage('Please enter your name'),
    body('address')
        .notEmpty()
        .withMessage('Please enter your address'),
    body('email')
        .notEmpty()
        .withMessage('Please enter your e-mail')
        .isEmail()
        .withMessage('It is not in e-mail format')
        .bail()
        .custom(async (value, { req }) => {
            const {email} = req.body
            
            // encontrar un usuario con el email
            const userFound = await User.findOne({
                where: {
                    email
                }
            })

            if (userFound) {
                return false
            }

            return true 
            
        })
 /*        .custom((email) => {
            // FIXME Modificar el método de búsqueda
            const userFound = userModel.findByField('email', email)

            if (userFound) {
                return false
            }

            return true
        })
*/
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