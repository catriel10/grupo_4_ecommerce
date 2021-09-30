const { Op } = require('sequelize')
const { User } = require('../../database/models')
//const usersApiController = require('../../controllers/api/usersApiController')

module.exports = {
    async listUsers(req, res) {
        try {
            const users = await User.findAndCountAll({
                attributes: ['id', 'name', 'lastname', 'address', 'email', 'password', 'image']
            })

            const usersMapped = users.rows.map(users=> {
                const urlList = 'http://localhost:4444/api/users/' + users.id
                users.setDataValue('detail', urlList)
                return users;
            });

            res.status(200).json({
                meta: {
                    status: "success",
                    total: users.count
                },
                data: {
                    users: usersMapped
                }
            })
        } catch(err) {
            res.status(500).json({
                meta: {
                    status: "error"
                },
                error: {
                    msg: "Can't connect to the database",
                    err
                }
            })
        }
    },

    async detailUser(req, res) {
           console.log("Entro...........")
            const user = await User.findOne({
                attributes: ['id', 'name', 'lastname', 'address', 'email', 'image'],
                where: { 
                    id: req.params.id,
                }
            })

        let url = 'http://localhost:4444/img/users/'
        user.image = url + image

        if (!user) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        res.status(200).json({
            meta: {
                status: "success",
            },
            data: {
                user //userMapped,
            }
        })
    },

    async createUser(req, res) {
        const { name, lastname, address, email, image } = req.body

        const user = await User.create({
            name, 
            lastname,
            address,
            email,
            image
        })

        res.status(201).json({
            meta: {
                status: "success",
            },
            data: {
                user,
            }
        })
    },

    async lastUser (req, res) {
		let users = await User.findAll({
			attributes: ['id', 'name', 'lastname', 'address', 'email', 'image']
		})
		let lastUser = users[users.length - 1]

		let response = {
			meta: {
				status: 200,
				url: 'http://localhost:4444/api/users/last',
				message: 'last user in DB'
			},
            data:{
                users: lastUser
            } 
		}
		res.json(response)
        },

    async qty (req, res) {
            let totalUsers = await User.count()
            let response = {
                meta: {
                    status: 200,
                    url: 'api/users/qty',
                    message: 'total amount of users in DB'
                },
                data:{
                    users: totalUsers
                } 
            }
                        
            res.json(response)
        },
}