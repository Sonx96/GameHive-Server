

function isTokenValid (req, res, next) {

    console.log(req.headers)
    
    
    next()

}

module.exports = isTokenValid