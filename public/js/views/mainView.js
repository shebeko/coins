var Backbone = require('backbone'),
    $ = require('jquery'),
    _ = require('underscore');
var fs = require('fs');
var mainMenu = fs.readFileSync(__dirname + '/templates/mainView.html', {encoding: 'utf8'});

module.exports = Backbone.View.extend({
    initialize: function(options) {
        console.log("ab value:" + options.ab);
        console.log("within mainView init");
        console.log("options " + options);
    },
    render: function() {
        this.$el.html(mainMenu);
    },
    'events': {
        'click #addNew': 'addNewCoin'
    },
    addNewCoin: function() {
        this.router.navigate("coinss?id=1", {trigger:'true'});
    }
});