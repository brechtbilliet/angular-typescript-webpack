import {ContentModel} from "./../ContentModel";
import {IContentModel, ISharedModel} from "./../Interfaces";
import {SharedModelMock} from "./Mocks";
describe("model: ContentModel", () => {
    describe("on initialization", () => {
        it("should expose the tweets passed from the sharedModel", () => {
            var sharedModel: ISharedModel = new SharedModelMock()
            var contentModel: IContentModel = new ContentModel(sharedModel);
            expect(contentModel.tweets).toBe(sharedModel.tweets);
        });
    });
});