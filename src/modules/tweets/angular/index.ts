import "angular";
import "angular-route";
import {RootModel, ContentModel, SharedModel, SidebarModel, TopbarModel, TweetService} from "../core/index"
import {config as routesConfig} from "./configs/routes";
import {PageTweetsComponent} from "./components/pageTweets/PageTweetsComponent";
import {TweetContentComponent} from "./components/tweetContent/TweetContentComponent";
import {TweetMainComponent} from "./components/tweetMain/TweetMainComponent";
import {TweetSidebarComponent} from "./components/tweetSidebar/TweetSidebarComponent";
import {TweetTopbarComponent} from "./components/tweetTopbar/TweetTopbarComponent";
if (ON_TEST) {
    require("./components/pageTweets/PageTweetsComponent.spec");
    require("./components/tweetTopbar/TweetTopbarComponent.spec");
    require("./components/tweetContent/TweetContentComponent.spec");
    require("./components/tweetMain/TweetMainComponent.spec");
    require("./components/tweetSidebar/TweetSidebarComponent.spec");
}
angular.module("app.tweets", ["ngRoute"])
    .service("IRootModel", RootModel)
    .service("IContentModel", ContentModel)
    .service("ISharedModel", SharedModel)
    .service("ISidebarModel", SidebarModel)
    .service("ITopbarModel", TopbarModel)
    .service("ITweetService", TweetService)
    .directive("pageTweets", () => new PageTweetsComponent())
    .directive("tweetContent", () => new TweetContentComponent())
    .directive("tweetMain", () => new TweetMainComponent())
    .directive("tweetSidebar", () => new TweetSidebarComponent())
    .directive("tweetTopbar", () => new TweetTopbarComponent())
    .config(routesConfig);
