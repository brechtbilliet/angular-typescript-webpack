import "angular";
import "angular-route";
import {PageAboutComponent} from "./components/pageAbout/PageAboutComponent";
import {config as routesConfig} from "./configs/routes";

angular.module("app.about", ["ngRoute"])
    .component("pageAbout", new PageAboutComponent())
    .config(routesConfig);