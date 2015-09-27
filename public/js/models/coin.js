var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    urlRoot: 'http://localhost:8686/coins',
    url: function() {
        console.log(this.get("id") + '________');
        return this.urlRoot + '/' + this.get("id");
    },
    defaults: {
        'id': 1,
        'value': 0,
        'unit': '',
        'country': '',
        'year': 0,
        'additionalInfo': 'default info'
    },
    validate: function(attrs) {
            if (isNaN(attrs.value) === true) {
            return {
                attrValue: attrs.value,
                attrName: 'Номинал',
                msg: 'not a number'
            };
        }
    }
});