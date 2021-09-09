const express = require ('express')
const apiRoutes = express.Router()

const usersApiRoutes = require ('./usersApiRoutes')

apiRoutes.use('/users', usersApiRoutes)




module.exports = apiRoutes

