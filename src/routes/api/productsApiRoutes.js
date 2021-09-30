const express = require('express')
const productsApiRoutes = express.Router()
const productsApiController = require('../../controllers/api/productsApiController')

// endpoints
productsApiRoutes.get('/', productsApiController.listProducts)
productsApiRoutes.get('/last', productsApiController.lastProduct)
productsApiRoutes.get('/search', productsApiController.searchProducts)
productsApiRoutes.get('/qty', productsApiController.qty)

productsApiRoutes.get('/productsByCategory/:category', productsApiController.filterByCategory)
productsApiRoutes.get('/:id', productsApiController.detailProduct)

productsApiRoutes.post('/', productsApiController.createProduct)

productsApiRoutes.put('/:id', productsApiController.updateProduct)
productsApiRoutes.delete('/:id', productsApiController.destroyProduct)


module.exports = productsApiRoutes