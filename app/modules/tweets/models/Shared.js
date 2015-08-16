var TweetService_1 = require('../services/TweetService');
var SharedModel = (function () {
    function SharedModel() {
        this.sidebarCollapsed = false;
        this.topbarCollapsed = false;
        var tweetService = new TweetService_1.TweetService();
        this.tweets = tweetService.getAll();
    }
    return SharedModel;
})();
exports.SharedModel = SharedModel;
//# sourceMappingURL=Shared.js.map