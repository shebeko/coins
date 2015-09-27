var Backbone = require('backbone'),
    _ = require('underscore');

module.exports = Backbone.View.extend({
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});