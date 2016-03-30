import {ContentModel} from '../../../core/models/impl/ContentModel';
export class TweetContentComponent implements ng.IComponentOptions {
    public controller: Function = TweetContentController;
    public template: string = `
        <div>
            <h2>Feed</h2>
            <p>These are the most recent tweets</p>
            <div class="dp-tweets">
                <div class="row dp-tweet" ng-repeat="tweet in $ctrl.model.tweets">
                    <div class="col-sm-8">
                        <h3>{{::tweet.user}} Tweeted</h3>
                        <p>{{::tweet.content}}</p>
                        <i class="fa fa-reply dp-tweet-icon"></i>
                        <i class="fa fa-retweet dp-tweet-icon"></i>
                        <i class="fa fa-star dp-tweet-icon"></i>
                        <i class="fa fa-ellipsis-h dp-tweet-icon"></i>
                    </div>
                    <div class="col-sm-4">
                        <star starred="tweet.starred" class="pull-right"></star>
                    </div>
                </div>
            </div>
        </div>
    `;
}
export class TweetContentController {
    public static $inject: Array<string> = ["ContentModel"];
    constructor(public model: ContentModel) {
    }
}