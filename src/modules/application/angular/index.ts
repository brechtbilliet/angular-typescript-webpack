import "angular";

import {StarComponent} from "./components/star/StarComponent";
import {TwitterApplicationComponent} from "./components/twitterApplication/TwitterApplicationComponent";
angular.module("app.application", [])
    .directive("twitterApplication", () => new TwitterApplicationComponent())
    .directive("star", () => new StarComponent());