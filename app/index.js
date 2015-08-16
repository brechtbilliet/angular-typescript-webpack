/// <reference path="_all.ts" />
require('./modules/core');
require('./modules/tweets');
require('./modules/about');
require('angular');
var app;
(function (app) {
    require('font-awesome/css/font-awesome.css');
    require('bootstrap/dist/css/bootstrap.css');
    require('./styles/screen.scss');
    angular.module('app', ['app.core', 'app.tweets', 'app.about']);
    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
})(app || (app = {}));
//# sourceMappingURL=index.js.map