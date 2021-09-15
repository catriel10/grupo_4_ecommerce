const { User } = require('../database/models');

module.exports = (req, res, next) => {
    // chequeamos si existe cookie
    // Si existe buscamos en el modelo el usuario
    // Lo guardamos en la session


    const userCookie = req.signedCookies.user
    
    if (userCookie) {
/*         const user = usersModel.findByPk(userCookie) */
         User.findByPk(userCookie)
            .then(user => {
            // Buscar al usuario por ID .then()
            delete user.password
            // pasar a la sesión
            req.session.logged = user
            next();
        })

    } else {
        next()
    }
 
}
