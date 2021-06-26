const { body } = require('express-validator')

const { isFileImage } = require('../helpers/file')

const validationNewProduct = [
    body('name')
        .notEmpty()
        .withMessage('Please enter a product name')
        .bail()
        //
        .isLength({ min: 3 })
        .withMessage('Please put a longer name'),
        // como es la última no usamos bail()
    body('description')
        .notEmpty().withMessage('Please indicate your description'),
    body('price')
        .notEmpty().withMessage('Please indicate your price'),
    body('discount')
        .notEmpty().withMessage('Please indicate your discount'),
    body('image')
        .custom((value, { req }) => {
            const { file } = req

            console.log('file', file)
            
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

module.exports = validationNewProduct