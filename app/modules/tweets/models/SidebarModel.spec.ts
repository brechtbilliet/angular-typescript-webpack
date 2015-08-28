/// <reference path="../../../_all.ts" />
import {ISidebarModel, ISharedModel} from './Interfaces';
import {SidebarModel} from './SidebarModel';
import {SharedModelMock} from './Mocks';
describe('Model: SidebarModel', () =>{
    var sharedModelMock: ISharedModel;
    var sidebarModel: ISidebarModel;
    beforeEach(() =>{
        sharedModelMock = new SharedModelMock();
        sidebarModel= new SidebarModel(sharedModelMock);
    });
    describe('on initialization', () => {
        it('should expose the tweets from the sharedModel passed in the constructor', () =>{
            expect(sidebarModel.tweets).toBe(sharedModelMock.tweets);
        });
    });
    describe('on toggleCollapsed()', () =>{
        it('should collapse the sidebar', () =>{
            spyOn(sharedModelMock, 'toggleSidebar');
            sidebarModel.toggleCollapsed();
            expect(sharedModelMock.toggleSidebar).toHaveBeenCalled();
        })
    });
});