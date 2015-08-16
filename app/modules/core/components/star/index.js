/// <reference path="../../../../_all.ts" />
var StarController = (function () {
    function StarController() {
    }
    StarController.prototype.toggle = function () {
        this.starred = !this.starred;
    };
    return StarController;
})();
var StarComponent = (function () {
    function StarComponent() {
        this.restrict = 'E';
        this.controllerAs = 'starVm';
        this.bindToController = true;
        this.scope = {
            starred: '='
        };
        this.template = require('./index.html');
        this.controller = StarController;
    }
    StarComponent.Factory = function () {
        var directive = function () {
            return new StarComponent();
        };
        return directive;
    };
    return StarComponent;
})();
exports.StarComponent = StarComponent;
exports.default = StarComponent;
