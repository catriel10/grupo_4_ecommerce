const express = require ("express")
const productsRoutes = express.Router()
const productsController = require('../controllers/productsController')

productsRoutes.get('/productDetail', productsController.productDetail)
productsRoutes.get('/productCart', productsController.productCart)

module.exports = productsRoutes