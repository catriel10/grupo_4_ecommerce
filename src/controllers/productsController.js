const path = require ("path")
 //const productsModel = require('../models/productsModel')
const fs = require('fs')
const db = require ("../database/models")
const { Op } = require('sequelize')
const {Product,User,Color, Category} = require("../database/models")
const { name } = require("ejs")
const { validationResult } = require('express-validator')

const productsController = {

 // primera version de los controladores    

    showCart: (req, res) => {
        res.render('products/productCart');
    },

    showCatalogue: async (req, res) => {
        const searchText = req.query.text
        let productList; 
        
        if (!searchText){
            productList = await Product.findAll()
        } else {
            productList = await Product.findAll({
            order:[
                ["name","ASC"],
            ],
            where: {
                name: {
                    [Op.substring] : searchText
                }
            
             }
             
        })
        }
 
        // aca leo el json y se lo paso al template
        // res.render('products/list', { productList: productList })
        res.render('products/catalogue', { productList })
    },

    showEdit: (req, res) => {
        res.render('products/productEdit');
    },

    showDetail: async (req, res) => {
        // levantamos el id desde la url (parámetro)
        
        //const id = req.params.id
        const { id } = req.params
        
        const productDetail = await Product.findByPk(id,{
            include:[{
                association:"category",
            },
            {
                association:"colors"
            }          
            ]
        })
       
        res.render('products/productDetail', { productDetail });

    },
    formNew: async (req, res) => {
        const categories = await Category.findAll()
        const colors = await Color.findAll()
        res.render('products/productNew', {
            categories,
            colors
        })
    },

    store: async (req, res) => {
        const formValidation = await validationResult(req)
        const categories = await Category.findAll()

        /* si encuentro un error devuelvo el formulario
        con los valores ya cargados y los errores */
        
       // console.log('formValidation.mapped()',formValidation.mapped())
        
        if (!formValidation.isEmpty()) {
            // borrar imagen
            if (req.file) {
                // primero chequeamos que exista
                fs.unlinkSync(req.file.path)
            }
        
          // tenemos errores
            const oldValues = req.body
            const colors = await Color.findAll()
            res.render('products/productNew', {colors,categories, oldValues, errors: formValidation.mapped() })
          return  
        }
    
        // Crear el objeto product
        const {name, quantity, description,color, price, discount, category} = req.body;
console.log (req.body)
         // dentro de req.file va a venir la información del archivo
         const { file } = req
        
         // nuestra ruta al archivo
         const image = file.filename

        const product = {
            name: name,
            quantity: quantity,
            description: description,
            price: price,
            discount: discount,
            category_id: category,
            image: image,
        }

        Product.create(product)
            .then((productCreated)=>{
                productCreated.setColors (color)
                res.redirect('/products/' + productCreated.id);
            }
            )
        
    },
    edit: async (req, res) => {
        const {id}= req.params
        
        const product = await Product.findByPk(id,{
            include:[{
                association:"category",
            },
            {
                association:"colors"
            }          
            ]
        });
        const categories = await Category.findAll()
        const colors = await Color.findAll()

        res.render('products/productEdit', {
            product,
            categories,
            colors
        });
    },
    update: async (req, res) => {
        const data = req.body;
        const { id } = req.params;

        // el product original
        const productOriginal = await Product.findByPk(id)
        // la imagen original: productOriginal.image

        // dentro de req.file va a venir la información del archivo
        const { file } = req
        
        /* Si viene una imagen nueva, cargar la imagen nueva
        sino poner la original */
        let image

        if (file) {
            image = '/img/article/' + file.filename
        } else {
            image = productOriginal.image
        }
        const {name, category, color, price, description} =req.body
        //return res.send (req.body)
        productOriginal.setColors(color)
        
        const propertiesToEdit = {
            name: name,
            category_id: category,
            colors:color,
            price:price,
            description:description,
            }
        
        await Product.update(propertiesToEdit, {
            where: {
                id
            }
        });

        res.redirect('/products/' + id);
    },
    destroy: (req, res) => {
        const id = req.params.id;
        
        Product.destroy({
            where:{
                id
            }
        })
            .then(() => {
                res.redirect('/products/catalogue');
            })
       
    }
}

module.exports = productsController