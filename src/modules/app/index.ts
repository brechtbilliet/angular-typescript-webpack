import "../common/angular/index";
import "../tweets/angular/index";
import "../about/angular/index";
import "angular";
require("toastr/toastr.js");

require("font-awesome/css/font-awesome.css");
require("bootstrap/dist/css/bootstrap.css");
require("./styles/screen.scss");
require("toastr/build/toastr.css");

angular.module("app", ["app.common", "app.tweets", "app.about"]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});
