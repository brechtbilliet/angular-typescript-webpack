import "angular";
import "jquery";
import "angular-route";
import "angular-formly";
import "angular-formly-templates-bootstrap";

import {config as routesConfig} from "./configs/routes";
import {LoginPageComponent} from "./components/loginPage/LoginPageComponent";
import {RegisterPageComponent} from "./components/registerPage/RegisterPageComponent";
import {LoginModel, RegisterModel, AuthenticationService, AuthenticationLocationCheckService, IAuthenticationLocationCheckService}
    from "../core/index";

angular.module("app.authentication", ["formly", "formlyBootstrap", "ngRoute"])
    .directive("loginPage", () => new LoginPageComponent())
    .directive("registerPage", () => new RegisterPageComponent())
    .service("ILoginModel", LoginModel)
    .service("IRegisterModel", RegisterModel)
    .service("IAuthenticationService", AuthenticationService)
    .service("IAuthenticationLocationCheckService", AuthenticationLocationCheckService)
    .config(routesConfig)
    .run(bootstrapped);

bootstrapped.$inject = ["IAuthenticationLocationCheckService"];
function bootstrapped(authenticationLocationCheckService: IAuthenticationLocationCheckService): void {
    authenticationLocationCheckService.startListening();
}