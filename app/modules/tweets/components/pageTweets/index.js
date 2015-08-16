/// <reference path="../../../../_all.ts" />
var Root = require('../../models/Root');
var PageTweetsController = (function () {
    function PageTweetsController() {
        this.sharedModel = Root.getRootModel().sharedModel;
    }
    return PageTweetsController;
})();
var PageTweetsComponent = (function () {
    function PageTweetsComponent() {
        this.restrict = 'E';
        this.controllerAs = 'pageVm';
        this.template = require('./index.html');
        this.controller = PageTweetsController;
    }
    PageTweetsComponent.Factory = function () {
        var directive = function () {
            return new PageTweetsComponent();
        };
        return directive;
    };
    return PageTweetsComponent;
})();
exports.PageTweetsComponent = PageTweetsComponent;
exports.default = PageTweetsComponent;
//# sourceMappingURL=index.js.map