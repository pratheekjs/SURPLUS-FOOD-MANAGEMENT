
var users = require('../users.json');

exports.view = function (req, res) {
    res.render('settings', users);
};
