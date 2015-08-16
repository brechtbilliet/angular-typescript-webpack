require('angular');
var index_1 = require('./components/page/index');
var index_2 = require('./components/star/index');
var core;
(function (core) {
    angular.module('app.core', [])
        .directive('page', index_1.PageComponent.Factory())
        .directive('star', index_2.StarComponent.Factory());
})(core = exports.core || (exports.core = {}));
