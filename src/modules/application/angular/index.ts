import "angular";

import {StarComponent} from "./components/star/StarComponent";
import {TwitterApplicationComponent} from "./components/twitterApplication/TwitterApplicationComponent";
angular.module("app.application", [])
    .component("twitterApplication", new TwitterApplicationComponent())
    .component("star",  new StarComponent());