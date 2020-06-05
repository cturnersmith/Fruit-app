const users = require('../models/users');

const index = (req, res) => {
    res.render('users/index.ejs')
}

module.exports = {
    index
}