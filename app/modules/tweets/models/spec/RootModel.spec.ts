import {RootModel} from "./../RootModel";
import {IRootModel, ITopbarModel, ISidebarModel, IContentModel, ISharedModel} from "./../Interfaces";
import {SharedModelMock, ContentModelMock, TopbarModelMock, SidebarModelMock} from "./Mocks";
describe("model: RootModel", () => {
    var rootModel: IRootModel;
    var sidebarModelMock: ISidebarModel;
    var topbarModelMock: ITopbarModel;
    var contentModelMock: IContentModel;
    var sharedModelMock: ISharedModel;
    beforeEach(() => {
        sharedModelMock = new SharedModelMock();
        topbarModelMock = new TopbarModelMock();
        contentModelMock = new ContentModelMock();
        sidebarModelMock = new SidebarModelMock();
        rootModel = new RootModel(topbarModelMock, sharedModelMock, contentModelMock, sidebarModelMock);
    })
    describe("on initialization", () => {
        it("should expose the sharedModel passed in the constructor", () => {
            expect(rootModel.sharedModel).toBe(sharedModelMock);
        });
        it("should expose the contentModel passed in the constructor", () => {
            expect(rootModel.contentModel).toBe(contentModelMock);
        });
        it("should expose the sidebarModel passed in the constructor", () => {
            expect(rootModel.sidebarModel).toBe(sidebarModelMock);
        });
        it("should expose the topbarModel passed in the constructor", () => {
            expect(rootModel.topbarModel).toBe(topbarModelMock);
        });
    });
});