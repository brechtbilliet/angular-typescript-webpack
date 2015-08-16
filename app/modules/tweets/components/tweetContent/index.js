/// <reference path="../../../../_all.ts" />
var Root = require('../../models/Root');
var TweetContentController = (function () {
    function TweetContentController() {
        this.model = Root.getRootModel().contentModel;
    }
    return TweetContentController;
})();
var TweetContentComponent = (function () {
    function TweetContentComponent() {
        this.restrict = 'E';
        this.controllerAs = 'contentVm';
        this.template = require('./index.html');
        this.controller = TweetContentController;
    }
    TweetContentComponent.Factory = function () {
        var directive = function () {
            return new TweetContentComponent();
        };
        return directive;
    };
    return TweetContentComponent;
})();
exports.TweetContentComponent = TweetContentComponent;
exports.default = TweetContentComponent;
//# sourceMappingURL=index.js.map