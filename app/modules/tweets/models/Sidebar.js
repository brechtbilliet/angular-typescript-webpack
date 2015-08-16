var SidebarModel = (function () {
    function SidebarModel(sharedModel) {
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }
    SidebarModel.prototype.toggleCollapsed = function () {
        this.sharedModel.sidebarCollapsed = !this.sharedModel.sidebarCollapsed;
    };
    return SidebarModel;
})();
exports.SidebarModel = SidebarModel;
//# sourceMappingURL=Sidebar.js.map