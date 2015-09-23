config.$inject = ["$routeProvider"];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider
        .when("/login", {
            template: "<login-page></login-page>"
        })
        .when("/register", {
            template: "<register-page></register-page>"
        });
}