/// <reference path="../../../../_all.ts" />
var Root = require('../../models/Root');
var TweetMainController = (function () {
    function TweetMainController() {
        this.sharedModel = Root.getRootModel().sharedModel;
    }
    return TweetMainController;
})();
var TweetMainComponent = (function () {
    function TweetMainComponent() {
        this.restrict = 'E';
        this.controllerAs = 'mainVm';
        this.template = require('./index.html');
        this.controller = TweetMainController;
    }
    TweetMainComponent.Factory = function () {
        var directive = function () {
            return new TweetMainComponent();
        };
        return directive;
    };
    return TweetMainComponent;
})();
exports.TweetMainComponent = TweetMainComponent;
exports.default = TweetMainComponent;
//# sourceMappingURL=index.js.map