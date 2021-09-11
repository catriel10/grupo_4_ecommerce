const express = require ('express')
const usersApiRoutes = express.Router()
const usersApiController = require('../../controllers/api/usersApiController')


//(usersApiRoutes.get('/', usersApiController.)
// endpoints

usersApiRoutes.get('/', usersApiController.listUsers)
usersApiRoutes.get('/:id', usersApiController.detailUser)
usersApiRoutes.post('/', usersApiController.createUser)

module.exports = usersApiRoutes