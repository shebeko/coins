var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    //models
    CoinModel = require('../models/coin.js'),
    // views
    CoinView = require('../views/coinView.js'),
    MainView = require('../views/mainView.js');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'showMain',
        'coinss?id=:id': 'showCoin'
    },
    showMain: function(id) {
        var mainView = new MainView({el: $("#main_menu"), ab: "just ab"});
        _.extend(this, {'mainView': mainView});
        _.extend(mainView, {'router': this});
        mainView.render();
    },
    showCoin: function(id) {
        if (this.mainView) {
            this.mainView.remove();
            this.mainView.render();
        }
        var coinModel = new CoinModel({'id':id});
        var coinView = new CoinView(({'el': $('#view_coin').first(), 'model': coinModel}));
        _.extend(coinView, {'router': this});
        coinView.render();
    }
});