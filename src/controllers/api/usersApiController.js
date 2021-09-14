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
                const urlDetail = 'http://localhost:4444/api/users/' + users.id
                users.setDataValue('detail', urlDetail)
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
        const user = await User.findByPk(req.params.id)   
        


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
                user,
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
}