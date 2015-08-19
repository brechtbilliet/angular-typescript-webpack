/// <reference path="../../../../_all.ts" />
import 'angular-mocks';
import {PageTweetsComponent,IIsolateScope }from './PageTweetsComponent';
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
        directiveTest = new ComponentTest<IIsolateScope, Object>('<page-tweets></page-tweets>');
    });

    it('should expose the sharedModel', () =>{
        var vm = directiveTest.createComponent({}).pageVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
    });

});

