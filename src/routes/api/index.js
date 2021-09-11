const express = require ('express')
const apiRoutes = express.Router()

const usersApiRoutes = require ('./usersApiRoutes')
const productsApiRoutes = require('./productsApiRoutes')
const newsletterApiRoutes = require('./newsletterApiRoutes')

apiRoutes.use('/users', usersApiRoutes)
apiRoutes.use('/products', productsApiRoutes)
//apiRoutes.use('/newsletter', newsletterApiRoutes)

module.exports = apiRoutes

