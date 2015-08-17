/// <reference path="_all.ts" />
import './modules/core';
import './modules/tweets';
import './modules/about';
import 'angular';

module app{
    require('font-awesome/css/font-awesome.css');
    require('bootstrap/dist/css/bootstrap.css');
    require('./styles/screen.scss');
    angular.module('app', ['app.core', 'app.tweets', 'app.about']);
    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
}