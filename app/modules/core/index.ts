import 'angular';

import PageComponent from './components/page/PageComponent';
import StarComponent from './components/star/StarComponent';

export module core{
    angular.module('app.core', [])
        .directive('page', PageComponent.Factory())
        .directive('star', StarComponent.Factory());
}