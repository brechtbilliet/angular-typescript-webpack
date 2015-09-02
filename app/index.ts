import "./modules/core/index";
import "./modules/tweets/index";
import "./modules/about/index";
import "angular";

require("font-awesome/css/font-awesome.css");
require("bootstrap/dist/css/bootstrap.css");
require("./styles/screen.scss");
angular.module("app", ["app.core", "app.tweets", "app.about"]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});
