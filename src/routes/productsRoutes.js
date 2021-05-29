const express = require ("express")
const productsRoutes = express.Router()
const productsController = require('../controllers/productsController')

productsRoutes.get('/detail', productsController.showDetail)
productsRoutes.get('/cart', productsController.showCart)

module.exports = productsRoutes