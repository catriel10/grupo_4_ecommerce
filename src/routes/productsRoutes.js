const express = require ("express")
const productsRoutes = express.Router()
const productsController = require('../controllers/productsController')

productsRoutes.get('/detail', productsController.showDetail)
productsRoutes.get('/cart', productsController.showCart)
productsRoutes.get('/catalogue', productsController.showCatalogue)
productsRoutes.get('/edit', productsController.showEdit)

// Create
productsRoutes.get('/create', productsController.formNew);
productsRoutes.post('/create', productsController.store);

// Update
productsRoutes.get('/:id/edit', productsController.edit);
productsRoutes.put('/:id', productsController.update);

// Delete
productsRoutes.delete('/:id', productsController.destroy);

module.exports = productsRoutes