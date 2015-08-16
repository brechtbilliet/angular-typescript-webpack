var ContentModel = (function () {
    function ContentModel(sharedModel) {
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }
    return ContentModel;
})();
exports.ContentModel = ContentModel;
//# sourceMappingURL=Content.js.map