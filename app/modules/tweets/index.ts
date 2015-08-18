/// <reference path="../../_all.ts" />
import 'angular';
import 'angular-route';
import  RootModel from './models/RootModel';
import  ContentModel from './models/ContentModel';
import  SharedModel from './models/SharedModel';
import  SidebarModel from './models/SidebarModel';
import  TopbarModel from './models/TopbarModel';
import TweetService from './services/TweetService';

import PageTweetsComponent from './components/pageTweets/PageTweetsComponent';
import TweetContentComponent from './components/tweetContent/TweetContentComponent';
import TweetMainComponent from './components/tweetMain/TweetMainComponent';
import TweetSidebarComponent from './components/tweetSidebar/TweetSidebarComponent';
import TweetTopbarComponent from './components/tweetTopbar/TweetTopbarComponent';
import {config as routesConfig} from './configs/routes';

module tweets {
    angular.module('app.tweets', ['ngRoute'])
        .service('IRootModel', RootModel)
        .service('IContentModel', ContentModel)
        .service('ISharedModel', SharedModel)
        .service('ISidebarModel', SidebarModel)
        .service('ITopbarModel', TopbarModel)
        .service('ITweetService', TweetService)
        .directive('pageTweets', PageTweetsComponent.Factory())
        .directive('tweetContent', TweetContentComponent.Factory())
        .directive('tweetMain', TweetMainComponent.Factory())
        .directive('tweetSidebar', TweetSidebarComponent.Factory())
        .directive('tweetTopbar', TweetTopbarComponent.Factory())
        .config(routesConfig);
}