config.$inject = ["$routeProvider"];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider.when("/tweets", {
        template: "<page-tweets></page-tweets>"
    });
}