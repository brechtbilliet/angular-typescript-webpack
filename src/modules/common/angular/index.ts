import "angular";
import "../../authentication/angular/index";
import {PageComponent} from "./components/page/PageComponent";
import {StarComponent} from "./components/star/StarComponent";
import {PageModel} from "../core/index";

angular.module("app.common", ["app.authentication"])
    .directive("page", () => new PageComponent())
    .directive("star", () => new StarComponent())
    .service("IPageModel", PageModel);
