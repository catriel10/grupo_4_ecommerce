module.exports = (sequelize, DataTypes) => {
    const alias = 'User'
    /* camelCase por default */
    const cols = {  
        name: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.INTEGER
        },
        password: {
            type: DataTypes.BOOLEAN
        },
        address:{
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
    }
    
    const config = {
        underscored: true, /* te busca en snake case las columnas */
        timestamps: false /* no va a buscar las columnas de timestamps */
    }
    
    const User = sequelize.define(alias, cols, config)

    return User
}           