const { Op } = require('sequelize')
const { Product } = require('../../database/models')

module.exports = {
    async searchProducts(req, res) {
        const { name } = req.query

        const products = await Product.findAndCountAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        })

        res.status(200).json({
            meta: {
                status: "success",
                total: products.count
            },
            data: {
                products: products.rows
            }
        })
    },
    async listProducts(req, res) {
        try {
            const products = await Product.findAndCountAll()

            res.status(200).json({
                meta: {
                    status: "success",
                    total: products.count
                },
                data: {
                    products: products.rows
                }
            })
        } catch(err) {
            res.status(500).json({
                meta: {
                    status: "error"
                },
                error: {
                    msg: "Cant connect to database",
                    err
                }
            })
        }
    },

    async detailProduct(req, res) {
        const product = await Product.findByPk(req.params.id)   
        
        if (!product) {
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
                product,
            }
        })
    },

    async createProduct(req, res) {
        const { id, name, description, price, discount, color, category } = req.body

        const product = await Product.create({
            id: id,
            name: name,
            description: description,
            price: price,
            discount: discount,
            color: color, /*Preguntar*/
            category_id: category,
            image: image,
        })
        res.status(201).json({
            meta: {
                status: "success",
            },
            data: {
                product,
            }
        })
    },

    async updatePlanet(req, res) {
        const planet = await Planet.findByPk(req.params.id)

        if (!planet) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        const { name, discovered, hasRings } = req.body

        const planetUpdated = await planet.update({
            name, 
            discovered, 
            hasRings,
        })

        res.status(201).json({
            meta: {
                status: "success",
            },
            data: {
                planet: planetUpdated,
            }
        })
    },

    async destroyPlanet(req, res) {
        const planet = await Planet.findByPk(req.params.id)

        if (!planet) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        await planet.destroy()

        res.status(200).json({
            meta: {
                status: "success",
            },
        })
    }
}