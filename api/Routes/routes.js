'use strict';

const userController = require('../Users/useController');

module.exports = function(app){
    app.route('/about')
        .get(userController.about);
}