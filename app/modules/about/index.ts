import 'angular';
import 'angular-route';
import {PageAboutComponent} from './components/pageAbout/index';
import {config as routesConfig} from './configs/routes';

export module about{
    angular.module('app.about', ['ngRoute'])
        .directive('pageAbout', PageAboutComponent.Factory())
        .config(routesConfig);
}