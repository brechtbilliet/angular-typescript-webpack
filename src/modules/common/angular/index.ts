import "angular";
import "../../authentication/angular/index.ts";
import {PageComponent} from "./components/page/PageComponent";
import {StarComponent} from "./components/star/StarComponent";
import {PageModel} from "../core/index"

if (ON_TEST) {
    require("./components/star/StarComponent.spec");
}
angular.module("app.common", ["app.authentication"])
    .directive("page", () => new PageComponent())
    .directive("star", () => new StarComponent())
    .service("IPageModel", PageModel);
