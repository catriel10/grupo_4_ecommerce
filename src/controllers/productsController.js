const path = require ("path")
const productsModel = require('../models/productsModel')

const productsController = {

 // primera version de los controladores    

    showCart: (req, res) => {
        res.render('products/productCart');
    },

    showCatalogue: (req, res) => {
        const productList = productsModel.findAll()

        // aca leo el json y se lo paso al template
        // res.render('products/list', { productList: productList })
        res.render('products/catalogue', { productList })
    },

    showEdit: (req, res) => {
        res.render('products/productEdit');
    },

    showDetail: (req, res) => {
        // levantamos el id desde la url (parámetro)
        
        //const id = req.params.id
        const { id } = req.params
        
        const productDetail = productsModel.findByPk(id)
        
        res.render('products/productDetail', { productDetail });

    },
    
    detail: (req, res) => {
        // levantamos el id desde la url (parámetro)
        
        //const id = req.params.id
        const { id } = req.params
        
        const productDetail = productsModel.findByPk(id)
        
        res.render('products/productDetail', { productDetail })
    },

    formNew: (req, res) => {
        res.render('products/productNew')
    },

    store: (req, res) => {
        // Crear el objeto product
        const { id, name, description, price, colour, category} = req.body;

         // dentro de req.file va a venir la información del archivo
         const { file } = req
        
         // nuestra ruta al archivo
         const image = file.filename

        const product = {
            id: id,
            name: name,
            description: description,
            price: price,
            colour: colour,
            category: category,
            image:'/img/article/' + image,
        }

        const productCreated = productsModel.create(product);

        res.redirect('/products/' + productCreated.id);
    },
    edit: (req, res) => {
        const product = productsModel.findByPk(req.params.id);

        res.render('products/productEdit', {
            product
        });
    },
    update: (req, res) => {
        const data = req.body;
        const { id } = req.params;

        // el product original
        const productOriginal = productsModel.findByPk(id)
        // la imagen original: productOriginal.image

        // dentro de req.file va a venir la información del archivo
        const { file } = req
        
        /* Si viene una imagen nueva, cargar la imagen nueva
        sino poner la original */
        let image

        if (file) {
            image = '/img/article/' + file.filename
        } else {
            image = productOriginal.image
        }

        data.image = image
        
        productsModel.update(data, id);

        res.redirect('/products/' + id);
    },
    destroy: (req, res) => {
        const id = req.params.id;
        
        productsModel.destroy(id);

        res.redirect('/products/list');
    }
}

module.exports = productsController