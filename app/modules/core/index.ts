import 'angular';

import {PageComponent} from './components/page/index';
import {StarComponent} from './components/star/index';

export module core{
    angular.module('app.core', [])
        .directive('page', PageComponent.Factory())
        .directive('star', StarComponent.Factory());
}