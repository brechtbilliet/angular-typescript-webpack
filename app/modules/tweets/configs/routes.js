/// <reference path="../../../_all.ts" />
config.$inject = ['$routeProvider'];
function config($routeProvider) {
    $routeProvider.when('/tweets', {
        template: '<page-tweets></page-tweets>'
    });
}
exports.config = config;
//# sourceMappingURL=routes.js.map