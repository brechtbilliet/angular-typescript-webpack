/// <reference path="../../../../_all.ts" />
import 'angular-mocks';
import {TweetContentComponent,IIsolateScope }from './TweetContentComponent';
import ComponentTest from '../../../../util/test/ComponentTest';
import {RootModelMock} from '../../models/Mocks';
describe('Component TweetContentComponent', () => {
    var directiveTest:ComponentTest<IIsolateScope, any>;
    var rootModelMock = new RootModelMock();
    beforeEach(angular.mock.module('app.tweets', ($provide)=>{
        $provide.service('IRootModel', () =>  rootModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<IIsolateScope, Object>('<tweet-content></tweet-content>');
    });

    it('should expose the sharedModel', () =>{
        var vm = directiveTest.createComponent({}).contentVm;
        expect(vm.model).toBe(rootModelMock.contentModel);
    });

});

