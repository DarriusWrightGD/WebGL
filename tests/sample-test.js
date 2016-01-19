var expect = require('expect');
var app = require('../src/components/App');
var ReactTestUtils = require('react-addons-test-utils');


describe('testing', function(){
  it('testing is working', function(){
    var root = ReactTestUtils.renderIntoDocument(<App/>);
    expect(root).toExist();
  });
});
