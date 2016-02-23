import 'should';
import <%= component %> from '../src/index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
describe('test', function() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  it('Hello', function() {
    let cp = ReactDOM.render(<<%= component %>/>, container);
    return ReactDOM.findDOMNode(cp).innerText.should.be.eql('Hello world');
  });
  it('Element', function() {
    let cp = <<%= component %>/>;
    TestUtils.isElement(cp).should.be.true();
  });
});
