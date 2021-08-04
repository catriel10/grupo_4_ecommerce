module.exports = (sequelize, DataType) => {
    const alias = 'Users'
    /* camelCase por default */
    const cols = {  
        name: {
            type: DataType.STRING
        },
        lastname: {
            type: DataType.STRING
        },
        email: {
            type: DataType.INTEGER
        },
        password: {
            type: DataType.BOOLEAN
        },
        address:{
            type: DataType.STRING
        },
        image: {
            type: DataType.STRING
        },
    }
    
    const config = {
        underscored: true, /* te busca en snake case las columnas */
        timestamps: false /* no va a buscar las columnas de timestamps */
    }
    
    const UsersModel = sequelize.define(alias, cols, config)

    return UsersModel
}           