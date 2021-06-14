const express = require ("express")
const productsRoutes = express.Router()
const multer = require('multer')
const productsController = require('../controllers/productsController')

// destino donde guardar el archivo
// nombre del archivo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // guardamos el destino de la carpeta absoluta
        const detinationPath = path.join(__dirname, '../../public/img')
        // llamamos al callback con error (null) y el path de donde guardaría el archivo
        cb(null, detinationPath)
    },
    filename: (req, file, cb) => {
        console.log('file', file)
        // El nombre del archivo original es: file.originalname
        const extension = path.extname(file.originalname) // .jpg

        // generamos un identificador único a partir de la fecha
        const now = Date.now() // 32173821637218631

        // generar un nombre para nuestro archivo
        //const filename = `${now}${extension}`
        const filename = now + extension
        
        // ejecutamos callback con null (error) y el nombre del archivo
        cb(null, filename)
    },
})

const upload = multer({ storage })

// Proyecto
//productsRoutes.get('/:id', productsController.showDetail)
productsRoutes.get('/cart', productsController.showCart)
productsRoutes.get('/catalogue', productsController.showCatalogue)
productsRoutes.get('/edit', productsController.showEdit)

productsRoutes.get('/:id', productsController.detail)

// Create
productsRoutes.get('/create', productsController.formNew);

// aca deberíamos pasar multer
productsRoutes.post('/create', upload.single('image'), productsController.store);

// Update
productsRoutes.get('/:id/edit', productsController.edit);

// aca deberíamos pasar multer
productsRoutes.put('/:id', upload.single('image'), productsController.update);

// Delete
productsRoutes.delete('/:id', productsController.destroy);

module.exports = productsRoutes