module.exports = (sequelize, DataType) => {
    const name = "Color"
    const columns = {
        name: DataType.STRING
    }
    const config = {
        timestamps: false
    }

    const ColorModel = sequelize.define(name, columns, config)

    ColorModel.associate = models => {
        ColorModel.belongsToMany(models.Product, {
            as: 'product',
            through: 'product_color',
            foreignKey: 'color_id', // fk de color dentro de la tabla pivote
            otherKey: 'product_id',
            timestamps: false, // tabla pivot
        })
    }

    return ColorModel
}