require('angular');
require('angular-route');
var index_1 = require('./components/pageAbout/index');
var routes_1 = require('./configs/routes');
var about;
(function (about) {
    angular.module('app.about', ['ngRoute'])
        .directive('pageAbout', index_1.PageAboutComponent.Factory())
        .config(routes_1.config);
})(about = exports.about || (exports.about = {}));
