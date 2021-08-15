const usersModel = require('../models/usersModel')
const db = require("../database/models/")

module.exports = (req, res, next) => {
    // chequeamos si existe cookie
    // Si existe buscamos en el modelo el usuario
    // Lo guardamos en la session


    const userCookie = req.cookies.user
    
    if (userCookie) {
/*         const user = usersModel.findByPk(userCookie) */
            db.User.findByPk(userCookie)
        .then ( User =>{
        // Buscar al usuario por ID .then()
        delete user.password
        // pasar a la sesión
        req.session.logged = User
        next();
        })

    }else {
        next()
    }
 
}
