/// <reference path="../../_all.ts" />
import 'angular';

import PageComponent from './components/page/PageComponent';
import StarComponent from './components/star/StarComponent';
if(ON_TEST){
    require('./components/star/StarComponent.spec');
}
export module core{
    angular.module('app.core', [])
        .directive('page', () => new PageComponent())
        .directive('star', () => new StarComponent());
}