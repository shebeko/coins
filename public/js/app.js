var Backbone = require('backbone'),
    $ = require('jquery'),
    Router = require('./routers/router.js');
var fs = require('fs');

$(document).ready(function() {
    var router = new Router();
    Backbone.history.start({
        root: '/'
    });
});