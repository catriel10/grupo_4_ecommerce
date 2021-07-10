module.exports = (sequelize, DataTypes) => {
    const alias = "ModelName"
    const columns = {}
    const config = {}
   
    const Model = sequelize.define(alias, columns, config);
    return Model;
   }