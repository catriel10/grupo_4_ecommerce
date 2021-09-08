const { body } = require('express-validator')

const { isFileImage } = require('../helpers/file')

const validationNewProduct = [
    body('name')
        .notEmpty()
        .withMessage('Please enter a product name')
        .bail()
        //
        .isLength({ min: 5 })
        .withMessage('Please put a longer name'),
        // como es la última no usamos bail()
    body('description')
        .notEmpty()
        .withMessage('Please indicate your description')
        .isLength({ min: 20 })
        .withMessage('Please put a longer name'),
    body('price')
        .notEmpty().withMessage('Please indicate product price'),
    body('discount')
        .notEmpty().withMessage('Please indicate product discount'),
    body('color')
        .notEmpty().withMessage('Please select the color or colors'),
    body('category')
        .notEmpty().withMessage('Please select the category'),
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