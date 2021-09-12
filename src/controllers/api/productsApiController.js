const { Op } = require('sequelize')
const { Product, Category } = require('../../database/models')

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
            const products = await Product.findAndCountAll({
                attributes: ['id', 'name', 'description', 'price', 'quantity', 'discount'],
                include: ['category', 'color', 'image']
            })

            const productsMapped = products.rows.map(products=> {
                const urlDetail = 'http://localhost:4444/api/products/' + product.id
                product.setDataValue('detail', urlDetail)
                return product;
            });

            const categories = await Category.findAll({
                include: [products]
            })

            const objectCategories = categories.reduce((acum, category)=> {
                acum[category.name] = category.products.name
                return acum
            }, {})

            return res.json(objectCategories);

            res.status(200).json({
                meta: {
                    status: "success",
                    total: products.count
                },
                data: {
                    products: productsMapped
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
        const { name, quantity, description, price, discount, color, category,image } = req.body

        const product = await Product.create({
            name,
            quantity,
            description,
            price,
            discount,
            color, 
            category_id: category,
            image
        }
        )

        
        res.status(201).json({
            meta: {
                status: "success",
            },
            data: {
                product,
            }
        })
    },

    async updateProduct(req, res) {
        const product = await Product.findByPk(req.params.id)

        if (!product) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        const { name, category, color, price, description, image } = req.body

        const productUpdated = await product.update({
            name,
            color: color, /*Preguntar*/
            category_id: category,
            price,
            description,
            image
        })

        res.status(201).json({
            meta: {
                status: "success",
            },
            data: {
                product: productUpdated,
            }
        })
    },

    async destroyProduct(req, res) {
        const product = await Product.findByPk(req.params.id)

        if (!product) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        await product.destroy()

        res.status(200).json({
            meta: {
                status: "success",
            },
        })
    }
}