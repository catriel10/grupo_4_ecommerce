module.exports = (req, res, next) => {
    // locals.title está disponible desde las vistas
    res.locals.title = 'This is a title'
    res.render('not-found')
}