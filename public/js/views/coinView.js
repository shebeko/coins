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
        this.model.fetch(); // triggers model's 'change' event if and only if the model's attributes changed after fetching
        this.render();
    },
    save: function() {
        // store in database
        this.template = _.template(viewTemplate);
        // don't rerender view automatically after setting new attributes values to model
        this.model.set({
            'unit': $("#unit").val(),
            'value': $("#value").val(),
            'country': $("#country").val(),
            'year': $("#year").val(),
            'additionalInfo': $("#additionalInfo").val()
         }, {silent:true});
         this.model.save();
    },
    delete: function() {
        this.model.destroy();
    },
    catchError: function() {
        var errorObj = this.model.validationError;
        var errorMsg = errorObj.attrName + " " + errorObj.attrValue + " " + errorObj.msg;
        $("#errorMsg").html(errorMsg);
    }
});