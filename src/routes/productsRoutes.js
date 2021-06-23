const express = require ("express")
const productsRoutes = express.Router()
const multer = require('multer')
const path = require ("path")


// destino donde guardar el archivo
// nombre del archivo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // guardamos el destino de la carpeta absoluta
        const detinationPath = path.join(__dirname, '../../public/img/article')
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

const productsController = require('../controllers/productsController')

// Routes

//Cart
productsRoutes.get('/cart', productsController.showCart)

// 1. /products (GET) Listado de productos
productsRoutes.get('/catalogue', productsController.showCatalogue)

// 2. /products/create (GET) Formulario de creación de productos
productsRoutes.get('/create', productsController.formNew);
// aca deberíamos pasar multer
productsRoutes.post('/create', upload.single('image'), productsController.store);

// 3. /products/:id (GET) Detalle de un producto particular

productsRoutes.get('/:id', productsController.showDetail)

// 4. /products (POST)Acción de creación (a donde se envía el formulario)
//productsRoutes.post ('/create', productsController.store);

// 5. /products/:id/edit (GET) Formulario de edición de productos
productsRoutes.get('/:id/edit', productsController.edit);

// 6. /products/:id (PUT) Acción de edición (a donde se envía el formulario):
//productsRoutes.put('/:id', productsController.edit)
// aca deberíamos pasar multer
productsRoutes.put('/:id', upload.single('image'), productsController.update);

// 7. /products/:id (DELETE) Acción de borrado
productsRoutes.delete('/:id', productsController.destroy); 

module.exports = productsRoutes