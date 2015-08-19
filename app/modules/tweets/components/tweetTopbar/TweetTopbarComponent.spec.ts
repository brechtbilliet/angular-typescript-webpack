/// <reference path="../../../../_all.ts" />
import 'angular-mocks';
import {TweetTopbarComponent,IIsolateScope }from './TweetTopbarComponent';
import ComponentTest from '../../../../util/test/ComponentTest';
import {IRootModel, ISharedModel, IContentModel, ITopbarModel, ISidebarModel} from '../../models/Interfaces';

describe('Component StarComponent', () => {
    var directiveTest:ComponentTest<IIsolateScope, any>;
    var rootModelMock = <IRootModel>{},
        sharedModelMock = <ISharedModel>{},
        contentModelMock = <IContentModel>{},
        sidebarModelMock = <ISidebarModel>{},
        topbarModelMock = <ITopbarModel>{};
    beforeEach(angular.mock.module('app.tweets', ($provide)=>{
        $provide.service('IRootModel', () =>  rootModelMock);
        $provide.service('ISharedModelMock', () => sharedModelMock);
        $provide.service('IContentModelMock', () => contentModelMock);
        $provide.service('ISidebarModelMock', () => sidebarModelMock);
        $provide.service('ITopbarModelMock', () => topbarModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<IIsolateScope, Object>('<tweet-topbar></tweet-topbar>');
    });

    it('should expose the sharedModel', () =>{
        var vm = directiveTest.createComponent({}).topbarVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
        console.log(vm);
    });
    it('should expose the contentModel', () =>{
        var vm = directiveTest.createComponent({}).topbarVm;
        expect(vm.model).toBe(rootModelMock.contentModel);
    });

    describe('on toggleCollapsed()', function(){
        it('should collapse the topbar', function(){
            var vm = directiveTest.createComponent({}).topbarVm;
            topbarModelMock.toggleCollapsed = angular.noop;
            spyOn(topbarModelMock, 'toggleCollapsed');
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
});

