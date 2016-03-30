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
    .service("ContentModel", ContentModel)
    .service("SharedModel", SharedModel)
    .service("SidebarModel", SidebarModel)
    .service("TopbarModel", TopbarModel)
    .service("TweetService", TweetService)
    .component("pageTweets", new PageTweetsComponent())
    .component("tweetContent", new TweetContentComponent())
    .component("tweetMain", new TweetMainComponent())
    .component("tweetSidebar", new TweetSidebarComponent())
    .component("tweetTopbar", new TweetTopbarComponent())
    .config(routesConfig);
