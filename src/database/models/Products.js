module.exports = (sequelize, DataType) => {
    const alias = 'Products'
    /* camelCase por default */
    const cols = {
        /* opcional */
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING
        },
        category: {
            type: DataType.STRING
        },
        colors: {
            type: DataType.STRING
        },
        quantity: {
            type: DataType.INTEGER
        },
        price: {
            type: DataType.INTEGER
        },
        discount: {
            type: DataType.INTEGER
        },
        description: {
            type: DataType.STRING
        },
        image: {
            type: DataType.STRING
        },
        category_id: DataType.INTEGER,
        color_id: DataType.INTEGER,
    }
    
    const config = {
        underscored: true, /* te busca en snake case las columnas */
        timestamps: false /* no va a buscar las columnas de timestamps */
    }
    
    const ProductsModel = sequelize.define(alias, cols, config)
    
    ProductsModel.associate = models => {
        ProductsModel.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });

        ProductsModel.belongsToMany(models.Color, {
            as: 'colors',
            through: 'product_color',
            foreignKey: 'product_id', // fk de Products dentro de la tabla pivote
            otherKey: 'color_id',
            timestamps: false, // tabla pivot
        })
    }

    


    return ProductsModel
}           