var Tweet_1 = require('../entities/Tweet');
var TopbarModel = (function () {
    function TopbarModel(sharedModel) {
        this.sharedModel = sharedModel;
    }
    TopbarModel.prototype.toggleCollapsed = function () {
        this.sharedModel.topbarCollapsed = !this.sharedModel.topbarCollapsed;
    };
    TopbarModel.prototype.addTweet = function () {
        this.sharedModel.tweets.push(new Tweet_1.Tweet('@brecht', this.tweetContent, false));
        this.tweetContent = '';
    };
    return TopbarModel;
})();
exports.TopbarModel = TopbarModel;
//# sourceMappingURL=Topbar.js.map