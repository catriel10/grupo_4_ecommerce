const path = require ("path")
const productsController = {
    showDetail: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/productDetail.html'))
    },
    showCart: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'))
    },
}

module.exports = productsController