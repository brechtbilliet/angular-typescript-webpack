import "./modules/application/angular/index";
import "./modules/tweets/angular/index";
import "./modules/about/angular/index";
import "angular";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";

angular.module("app", ["app.application", "app.tweets", "app.about"]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});