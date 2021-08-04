module.exports = (sequelize, DataTypes) => {
    const name = "Color"
    const columns = {
        name: DataTypes.STRING
    }
    const config = {
        timestamps: false
    }

    const ColorModel = sequelize.define(name, columns, config)

    ColorModel.associate = models => {
        ColorModel.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_color',
            foreignKey: 'color_id', // fk de color dentro de la tabla pivote
            otherKey: 'product_id',
            timestamps: false, // tabla pivot
        })
    }

    return ColorModel
}