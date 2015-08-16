/// <reference path="../../../../_all.ts" />
var PageAboutComponent = (function () {
    function PageAboutComponent() {
        this.restrict = 'E';
        this.template = require('./index.html');
    }
    PageAboutComponent.Factory = function () {
        var directive = function () {
            return new PageAboutComponent();
        };
        return directive;
    };
    return PageAboutComponent;
})();
exports.PageAboutComponent = PageAboutComponent;
