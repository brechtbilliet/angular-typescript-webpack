var Tweet = (function () {
    function Tweet(user, content, starred) {
        this.user = user;
        this.content = content;
        this.starred = starred;
    }
    Tweet.createInstance = function (user, content, starred) {
        return new Tweet(user, content, starred);
    };
    return Tweet;
})();
exports.Tweet = Tweet;
//# sourceMappingURL=Tweet.js.map