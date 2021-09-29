const express = require('express')
const productsApiRoutes = express.Router()
const productsApiController = require('../../controllers/api/productsApiController')

// endpoints
productsApiRoutes.get('/search', productsApiController.searchProducts)
productsApiRoutes.get('/', productsApiController.listProducts)
productsApiRoutes.get('/:id', productsApiController.detailProduct)
productsApiRoutes.post('/', productsApiController.createProduct)
productsApiRoutes.put('/:id', productsApiController.updateProduct)
productsApiRoutes.delete('/:id', productsApiController.destroyProduct)
productsApiRoutes.get('/qty', productsApiController.qty)
productsApiRoutes.get('/last', productsApiController.lastProduct)
productsApiRoutes.get('/productsByCategory/:category', productsApiController.filterByCategory)
module.exports = productsApiRoutes