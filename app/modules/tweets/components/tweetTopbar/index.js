/// <reference path="../../../../_all.ts" />
var Root = require('../../models/Root');
var TweetTopbarController = (function () {
    function TweetTopbarController() {
        this.sharedModel = Root.getRootModel().sharedModel;
        this.model = Root.getRootModel().topBarModel;
    }
    TweetTopbarController.prototype.toggleCollapsed = function () {
        this.model.toggleCollapsed();
    };
    TweetTopbarController.prototype.post = function () {
        this.model.addTweet();
    };
    return TweetTopbarController;
})();
var TweetTopbarComponent = (function () {
    function TweetTopbarComponent() {
        this.restrict = 'E';
        this.controllerAs = 'topbarVm';
        this.template = require('./index.html');
        this.controller = TweetTopbarController;
    }
    TweetTopbarComponent.Factory = function () {
        var directive = function () {
            return new TweetTopbarComponent();
        };
        return directive;
    };
    return TweetTopbarComponent;
})();
exports.TweetTopbarComponent = TweetTopbarComponent;
exports.default = TweetTopbarComponent;
//# sourceMappingURL=index.js.map