require('angular');
var RootModelMock = (function () {
    function RootModelMock() {
        this.sharedModel = new SharedModelMock();
        this.sidebarModel = new SidebarModelMock();
        this.topbarModel = new TopbarModelMock();
        this.contentModel = new ContentModelMock();
    }
    return RootModelMock;
})();
exports.RootModelMock = RootModelMock;
var TopbarModelMock = (function () {
    function TopbarModelMock() {
        this.tweetContent = '';
        this.toggleCollapsed = angular.noop;
        this.addTweet = angular.noop;
    }
    return TopbarModelMock;
})();
exports.TopbarModelMock = TopbarModelMock;
var SidebarModelMock = (function () {
    function SidebarModelMock() {
        this.toggleCollapsed = angular.noop;
        this.tweets = new Array();
    }
    return SidebarModelMock;
})();
exports.SidebarModelMock = SidebarModelMock;
var ContentModelMock = (function () {
    function ContentModelMock() {
        this.tweets = new Array();
    }
    return ContentModelMock;
})();
exports.ContentModelMock = ContentModelMock;
var SharedModelMock = (function () {
    function SharedModelMock() {
        this.tweets = new Array();
        this.topbarCollapsed = false;
        this.sidebarCollapsed = false;
        this.toggleTopbar = angular.noop;
        this.toggleSidebar = angular.noop;
    }
    return SharedModelMock;
})();
exports.SharedModelMock = SharedModelMock;
//# sourceMappingURL=Mocks.js.map