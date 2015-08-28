/// <reference path="../../_all.ts" />
import 'angular';
import 'angular-route';
import  {RootModel} from './models/RootModel';
import  {ContentModel} from './models/ContentModel';
import  {SharedModel} from './models/SharedModel';
import  {SidebarModel} from './models/SidebarModel';
import  {TopbarModel} from './models/TopbarModel';
import {TweetService} from './services/TweetService';

import {PageTweetsComponent} from './components/pageTweets/PageTweetsComponent';
import TweetContentComponent from './components/tweetContent/TweetContentComponent';
import TweetMainComponent from './components/tweetMain/TweetMainComponent';
import TweetSidebarComponent from './components/tweetSidebar/TweetSidebarComponent';
import TweetTopbarComponent from './components/tweetTopbar/TweetTopbarComponent';
import {config as routesConfig} from './configs/routes';
if(ON_TEST){
    require('./models/Mocks.ts');
    require('./services/Mocks.ts');
    require('./components/pageTweets/PageTweetsComponent.spec');
    require('./components/tweetTopbar/TweetTopbarComponent.spec');
    require('./components/tweetContent/TweetContentComponent.spec');
    require('./components/tweetMain/TweetMainComponent.spec');
    require('./components/tweetSidebar/TweetSidebarComponent.spec');
    require('./models/ContentModel.spec');
    require('./models/RootModel.spec');
    require('./models/SharedModel.spec');
    require('./models/SidebarModel.spec');
    require('./models/TopbarModel.spec');
}
module tweets {
    angular.module('app.tweets', ['ngRoute'])
        .service('IRootModel', RootModel)
        .service('IContentModel', ContentModel)
        .service('ISharedModel', SharedModel)
        .service('ISidebarModel', SidebarModel)
        .service('ITopbarModel', TopbarModel)
        .service('ITweetService', TweetService)
        .directive('pageTweets', () => new PageTweetsComponent())
        .directive('tweetContent', () => new TweetContentComponent())
        .directive('tweetMain', () => new TweetMainComponent())
        .directive('tweetSidebar', () => new TweetSidebarComponent())
        .directive('tweetTopbar', () => new TweetTopbarComponent())
        .config(routesConfig);
}