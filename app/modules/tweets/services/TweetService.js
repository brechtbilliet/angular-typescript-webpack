var Tweet_1 = require('../entities/Tweet');
var TweetService = (function () {
    function TweetService() {
    }
    TweetService.prototype.getAll = function () {
        var returnObj = new Array();
        for (var i = 0; i < 5; i++) {
            returnObj.push(new Tweet_1.Tweet('Brecht', 'content', false));
        }
        return returnObj;
    };
    return TweetService;
})();
exports.TweetService = TweetService;
//# sourceMappingURL=TweetService.js.map