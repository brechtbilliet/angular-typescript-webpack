import 'angular';
import 'angular-route';

import {PageTweetsComponent} from './components/pageTWeets/index';
import {TweetContentComponent} from './components/tweetContent/index';
import {TweetMainComponent} from './components/tweetMain/index';
import {TweetSidebarComponent} from './components/tweetSidebar/index';
import {TweetTopbarComponent} from './components/tweetTopbar/index';
import {config as routesConfig} from './configs/routes';

module tweets{
    angular.module('app.tweets', ['ngRoute'])
        .directive('pageTweets', PageTweetsComponent.Factory())
        .directive('tweetContent', TweetContentComponent.Factory())
        .directive('tweetMain', TweetMainComponent.Factory())
        .directive('tweetSidebar', TweetSidebarComponent.Factory())
        .directive('tweetTopbar', TweetTopbarComponent.Factory())
        .config(routesConfig);
}