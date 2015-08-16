/// <reference path="../../../../_all.ts" />
var PageComponent = (function () {
    function PageComponent() {
        this.restrict = 'E';
        this.template = require('./index.html');
    }
    PageComponent.Factory = function () {
        var directive = function () {
            return new PageComponent();
        };
        return directive;
    };
    return PageComponent;
})();
exports.PageComponent = PageComponent;
