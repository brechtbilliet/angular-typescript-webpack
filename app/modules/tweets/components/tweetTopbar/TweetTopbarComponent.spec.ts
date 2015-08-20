/// <reference path="../../../../_all.ts" />
import 'angular-mocks';
import {TweetTopbarComponent,IIsolateScope }from './TweetTopbarComponent';
import ComponentTest from '../../../../util/test/ComponentTest';
import {IRootModel, ISharedModel, IContentModel, ITopbarModel, ISidebarModel} from '../../models/Interfaces';
import RootModel from '../../models/RootModel';
describe('Component StarComponent', () => {
    var directiveTest:ComponentTest<IIsolateScope, any>;
    var rootModelMock: IRootModel=  <IRootModel> {};
    rootModelMock.contentModel = <IContentModel>{};
    rootModelMock.sharedModel = <ISharedModel>{};
    rootModelMock.topbarModel = <ITopbarModel>{};
    rootModelMock.sidebarModel = <ISidebarModel>{};
    beforeEach(angular.mock.module('app.tweets', ($provide)=>{
        $provide.service('IRootModel', () =>  rootModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<IIsolateScope, Object>('<tweet-topbar></tweet-topbar>');
    });

    it('should expose the sharedModel', () =>{
        var vm = directiveTest.createComponent({}).topbarVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
    });
    it('should expose the contentModel', () =>{
        var vm = directiveTest.createComponent({}).topbarVm;
        expect(vm.model).toEqual(rootModelMock.contentModel);
    });

    describe('on toggleCollapsed()', function(){
        it('should collapse the topbar', function(){
            var vm = directiveTest.createComponent({}).topbarVm;
            rootModelMock.topbarModel.toggleCollapsed = angular.noop;
            spyOn(rootModelMock.topbarModel, 'toggleCollapsed');
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
});

