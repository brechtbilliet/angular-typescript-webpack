var Shared_1 = require('./Shared');
var Content_1 = require('./Content');
var Sidebar_1 = require('./Sidebar');
var Topbar_1 = require('./Topbar');
function getRootModel() {
    return SingletonRootModel.getInstance();
}
exports.getRootModel = getRootModel;
var SingletonRootModel = (function () {
    function SingletonRootModel() {
        if (SingletonRootModel._instance) {
            throw new Error("Error: Instantiation failed: Use SingletonRootModel.getInstance() instead of new.");
        }
        this.sharedModel = new Shared_1.SharedModel();
        this.sidebarModel = new Sidebar_1.SidebarModel(this.sharedModel);
        this.topBarModel = new Topbar_1.TopbarModel(this.sharedModel);
        this.contentModel = new Content_1.ContentModel(this.sharedModel);
        this.topBarCollapsed = false;
        this.sidebarCollapsed = false;
        SingletonRootModel._instance = this;
    }
    SingletonRootModel.getInstance = function () {
        return SingletonRootModel._instance;
    };
    SingletonRootModel._instance = new SingletonRootModel();
    return SingletonRootModel;
})();
exports.SingletonRootModel = SingletonRootModel;
//# sourceMappingURL=Root.js.map