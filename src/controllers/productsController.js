const path = require ("path")
const productsModel = require('../models/productsModel')

const productsController = {
    showDetail: (req, res) => {
        // levantamos el id desde la url (parámetro)
        
        //const id = req.params.id
        const { id } = req.params
        
        const productDetail = productsModel.findByPk(id)
        
        res.render('products/productDetail', { productDetail });

    },
    showCart: (req, res) => {
        res.render('products/productCart');
    },

    showCatalogue: (req, res) => {
        const productList = productsModel.findAll()

        // aca leo el json y se lo paso al template
        // res.render('planets/list', { planetList: planetList })
        res.render('products/catalogue', { productList })
    },

    showEdit: (req, res) => {
        res.render('products/productEdit');
    },

    formNew: (req, res) => {
        res.render('products/new')
    },

    store: (req, res) => {
        // Crear el objeto product
        const { id, foto, name, description, price, colour, category, stock, size} = req.body;

        const product = {
            id: id,
            foto: foto,
            name: name,
            description: description,
            price: price,
            colour: colour,
            category: category,
            stock: stock,
            size: size,
        }
        const productCreated = productsModel.create(product);

        res.redirect('/products/detail/' + productCreated.id);
    },
    edit: (req, res) => {
        const product = productsModel.findByPk(req.params.id);

        res.render('products/edit', {
            product
        });
    },
    update: (req, res) => {
        const data = req.body;
        const { id } = req.params;

        productsModel.update(data, id);

        res.redirect('/products/detail/' + id);
    },
    destroy: (req, res) => {
        const id = req.params.id;
        
        productsModel.destroy(id);

        res.redirect('/products/list');
    }
}

module.exports = productsController