import "angular";
import "angular-route";
import {config as routesConfig} from "./configs/routes";
import {PageTweetsComponent} from "./components/pageTweets/PageTweetsComponent";
import {TweetContentComponent} from "./components/tweetContent/TweetContentComponent";
import {TweetMainComponent} from "./components/tweetMain/TweetMainComponent";
import {TweetSidebarComponent} from "./components/tweetSidebar/TweetSidebarComponent";
import {TweetTopbarComponent} from "./components/tweetTopbar/TweetTopbarComponent";
import {ContentModel} from "../core/models/impl/ContentModel";
import {SharedModel} from "../core/models/impl/SharedModel";
import {SidebarModel} from "../core/models/impl/SidebarModel";
import {TopbarModel} from "../core/models/impl/TopbarModel";
import {TweetService} from "../core/services/impl/TweetService";

angular.module("app.tweets", ["ngRoute"])
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
