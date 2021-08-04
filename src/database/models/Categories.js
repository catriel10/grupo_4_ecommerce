module.exports = (sequelize, DataType) => {
    const alias = 'Category'
    /* camelCase por default */
    const cols = {
        /* opcional */
        name: {
            type: DataType.STRING
        },

    }
    
    const config = {
        underscored: true, /* te busca en snake case las columnas */
        timestamps: false /* no va a buscar las columnas de timestamps */
    }
    
    const CategoryModel = sequelize.define(alias, cols, config)

    CategoryModel.associate = models => {
        CategoryModel.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'Category_id',
        })
    }

    return CategoryModel
}  