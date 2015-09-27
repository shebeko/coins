var Backbone = require('backbone');
var $ = require('jquery');
var    _ = require('underscore');
var base = require('./base.js');
var fs = require('fs');
var viewTemplate = fs.readFileSync(__dirname + '/templates/coinView.html', {encoding: 'utf8'});
var editTemplate = fs.readFileSync(__dirname + '/templates/coinEdit.html', {encoding: 'utf8'});
var templateFunction = _.template(viewTemplate);
module.exports = base.extend({
    template: templateFunction,
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'invalid', this.catchError);
        this.model.fetch();
    },
    events: {
        'click #edit': 'edit',
        'click #cancel': 'cancel',
        'click #save': 'save',
        'click #delete': 'delete'
    },
    edit: function() {
        this.template = _.template(editTemplate);
        this.render();
    },
    cancel: function() {
        this.template = _.template(viewTemplate);
        this.render();
    },
    save: function() {
        // store in database
        this.template = _.template(viewTemplate);
        if (checkIfChanged(this)) {
            this.model.set({
                'unit': $("#unit").val(),
                'value': $("#value").val(),
                'country': $("#country").val(),
                'year': $("#year").val(),
                'additionalInfo': $("#additionalInfo").val()
            });
            this.model.save();
        } else {
            this.render();
        }
    },
    delete: function() {
        this.model.destroy();
    },
    catchError: function() {
        var errorObj = this.model.validationError;
        console.log(errorObj.attrName + " " + errorObj.attrValue + ": " + errorObj.msg);
    }
});

function checkIfChanged(viewObj) {
    if (($("#unit").val() != viewObj.model.get("unit")) ||
        ($("#value").val() != viewObj.model.get("value")) ||
        ($("#country").val() != viewObj.model.get("country")) ||
        ($("#year").val() != viewObj.model.get("year")) ||
        ($("#additionalInfo").val() != viewObj.model.get("additionalInfo"))
    ) {
        console.log("fuck");
        return true;
    } else return false;
}
