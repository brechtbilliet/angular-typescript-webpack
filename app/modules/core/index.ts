import "angular";
import "../authentication/index";

import {PageComponent} from "./components/page/PageComponent";
import {StarComponent} from "./components/star/StarComponent";
import {PageModel} from "./models/PageModel";

if (ON_TEST) {
    require("./components/star/StarComponent.spec");
}
angular.module("app.core", ["app.authentication"])
    .directive("page", () => new PageComponent())
    .directive("star", () => new StarComponent())
    .service("IPageModel", PageModel);
