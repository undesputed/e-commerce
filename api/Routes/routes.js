'use strict';

const userController = require('../Users/useController');

module.exports = function(app){
    app.route('/Login')
        .get(userController.about);
}