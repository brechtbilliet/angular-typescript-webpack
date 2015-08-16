/// <reference path="../../../_all.ts" />
config.$inject = ['$routeProvider'];
function config($routeProvider) {
    $routeProvider.when('/about', {
        template: '<page-about></page-about>'
    });
}
exports.config = config;
