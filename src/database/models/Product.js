module.exports = (sequelize, DataTypes) => {
    const alias = 'Product'
    /* camelCase por default */
    const cols = {
        /* opcional */
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER
        },
        discount: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        category_id: DataTypes.INTEGER,
        //color_id: DataTypes.INTEGER,
    }
    
    const config = {
        underscored: true, /* te busca en snake case las columnas */
        timestamps: false /* no va a buscar las columnas de timestamps */
    }
    
    const Product = sequelize.define(alias, cols, config)
    
    Product.associate = models => {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });

        Product.belongsToMany(models.Color, {
            as: 'colors',
            through: 'product_color',
            foreignKey: 'product_id', // fk de Products dentro de la tabla pivote
            otherKey: 'color_id',
            timestamps: false, // tabla pivot
        })
    }
    return Product
}           