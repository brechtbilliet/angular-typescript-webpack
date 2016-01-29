import {ISharedModel} from "../int/ISharedModel";
import {IContentModel} from "../int/IContentModel";
import {ContentModel} from "../impl/ContentModel";
describe("model: ContentModel", () => {
    describe("on initialization", () => {
        it("should expose the tweets passed from the sharedModel", () => {
            var sharedModelMock: ISharedModel = jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
            sharedModelMock.tweets = [];
            sharedModelMock.sidebarCollapsed = false;
            sharedModelMock.topbarCollapsed = false;
            var contentModel: IContentModel = new ContentModel(sharedModelMock);
            expect(contentModel.tweets).toBe(sharedModelMock.tweets);
        });
    });
});