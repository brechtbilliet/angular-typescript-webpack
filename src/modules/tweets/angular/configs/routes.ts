config.$inject = ["$routeProvider"];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider.when("/", {
        template: "<page-tweets></page-tweets>"
    });
}