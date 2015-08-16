/// <reference path="../../../../_all.ts" />
var Root = require('../../models/Root');
var TweetSidebarController = (function () {
    function TweetSidebarController() {
        this.sharedModel = Root.getRootModel().sharedModel;
        this.model = Root.getRootModel().sidebarModel;
    }
    TweetSidebarController.prototype.toggleCollapsed = function () {
        this.model.toggleCollapsed();
    };
    return TweetSidebarController;
})();
var TweetSidebarComponent = (function () {
    function TweetSidebarComponent() {
        this.restrict = 'E';
        this.controllerAs = 'sidebarVm';
        this.template = require('./index.html');
        this.controller = TweetSidebarController;
    }
    TweetSidebarComponent.Factory = function () {
        var directive = function () {
            return new TweetSidebarComponent();
        };
        return directive;
    };
    return TweetSidebarComponent;
})();
exports.TweetSidebarComponent = TweetSidebarComponent;
exports.default = TweetSidebarComponent;
//# sourceMappingURL=index.js.map