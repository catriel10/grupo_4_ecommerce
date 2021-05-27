const path = require ("path")
const productsController = {
    productDetail: (req, res) => {
        res.sendFile(path.resolve('views/productDetail.html'))
    },
    productCart: (req, res) => {
        res.sendFile(path.resolve('views/productCart.html'))
    },
}

module.exports = productsController