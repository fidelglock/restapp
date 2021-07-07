'use strict';

// create App function
    module.exports = function(app) {
        var restappList = require('../controllers/restappController');

// todoList Routes

// get and post request for /todos endpoints
        app
        .route("/restapp")
        .get(restappList.listAllRestapp)
        .post(restappList.createNewRestapp);

// put and delete request for /todos endpoints
        app
        .route("/restapp/:id")
        .put(restappList.updateRestapp)
        .delete(restappList.deleteRestapp);
    };