const path = require ("path")
const productsController = {
    showDetail: (req, res) => {
        res.render('products/productDetail');
    },
    showCart: (req, res) => {
        res.render('products/productCart');
    },
    showCatalogue: (req, res) => {
        res.render('products/catalogue');
    },
    showEdit: (req, res) => {
        res.render('products/productEdit');
    },
}

module.exports = productsController