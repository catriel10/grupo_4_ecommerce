const { name } = require('ejs')
const { Op } = require('sequelize')
const { Product, Category, Image} = require('../../database/models')
const fs = require('fs')
const path = require('path')
const { count } = require('console')
const resourcesPath = path.join(__dirname, '../../../public')

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
                attributes: ['id', 'name', 'description', 'price', 'quantity', 'discount', 'image'],
                include: ['colors', 'category']
            })

            const productsMapped = products.rows.map(products=> {
                const urlDetail = 'http://localhost:4444/api/products/' + products.id
                products.setDataValue('detail', urlDetail)
                return products;
            });

            const categories = await Category.findAll({
                include: ['product']
            })

            const objectCategories = categories.reduce((acum, category)=> {
                acum[category.name] = category.product.length
                return acum
            }, {})

            /*return res.json(objectCategories);*/

            /*return res.send(products)*/

            res.status(200).json({
                meta: {
                    status: "200",
                    total: products.count,
                    category: categories.count
                },
                data: {
                    categories:categories.length,
                    objectCategories:objectCategories,
                    products: productsMapped, 
                    
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
        /*const product = await Product.findByPk(req.params.id)*/

        const product = await Product.findOne({
            attributes: ['id', 'name', 'description', 'price', 'quantity', 'discount', 'image'],
            include: ['colors', 'category'],
            where: { 
                id: req.params.id,
            }
        })

       /* const productsFind = await Product.findAndCountAll({
            attributes: ['id', 'name', 'description', 'price', 'quantity', 'discount', 'image'],
            include: ['colors', 'category']
        })
        */
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
                product: product,
            }
        })
    },

    async lastProduct (req, res) {
		let products = await Product.findAll()
		let last = products[products.length - 1]
		let url = 'http://localhost:4444/img/'
		let productToShow = await Product.findByPk(last.id,
            {
                    attributes: ['id', 'name', 'description', 'price', 'quantity', 'discount', 'image'],
                    include: ['colors', 'category']

			})
            
        
		if (productToShow) {
			productToShow.setDataValue('image', url + productToShow.images[0].name)
		}

		let response = {
			meta: {
				status: 200,
				url: 'api/products/last'
			},
            data: {
                products: productToShow,
            }

		}
		res.json(response)
	},

	async qty (req, res) {
		let totalProducts = await Product.count()

		let response = {

			meta: {
				status: 200,
				url: 'api/products/qty',
				message: 'total amount of products in DB'
			},

			data: totalProducts
		}
		res.json(response)
	},

	async filterByCategory (req, res) {
		let categoryToFind = req.params.category
		let category = await Category.findOne({
			where: { name: categoryToFind }
		})
		let products = await Product.findAll({
			where: {
				category_id: category.id
			}
		})

		let response = {
			data: { products: products.length }
		}
		res.json(response)

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