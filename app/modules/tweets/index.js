require('angular');
require('angular-route');
var index_1 = require('./components/pageTWeets/index');
var index_2 = require('./components/tweetContent/index');
var index_3 = require('./components/tweetMain/index');
var index_4 = require('./components/tweetSidebar/index');
var index_5 = require('./components/tweetTopbar/index');
var routes_1 = require('./configs/routes');
var tweets;
(function (tweets) {
    angular.module('app.tweets', ['ngRoute'])
        .directive('pageTweets', index_1.PageTweetsComponent.Factory())
        .directive('tweetContent', index_2.TweetContentComponent.Factory())
        .directive('tweetMain', index_3.TweetMainComponent.Factory())
        .directive('tweetSidebar', index_4.TweetSidebarComponent.Factory())
        .directive('tweetTopbar', index_5.TweetTopbarComponent.Factory())
        .config(routes_1.config);
})(tweets || (tweets = {}));
//# sourceMappingURL=index.js.map