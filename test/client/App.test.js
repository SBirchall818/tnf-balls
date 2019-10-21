import React from 'react';
import renderer from 'react-test-renderer';
// import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';

import App from '../../src/client/App';

describe('App :: ', () => {
  // beforeEach(() => {
  //   StyleSheetTestUtils.suppressStyleInjection();
  // });

  // afterEach(() => {
  //   StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  // });

  it('should exist', () => {
    expect(App).toBeDefined();
  });

  it('should render App with defaults', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should use enzyme to shallow render', () => {
    const appComponent = shallow(<App />);
    const foundDiv = appComponent.find('div');
    expect(foundDiv.children()).toHaveLength(1);
  });
});