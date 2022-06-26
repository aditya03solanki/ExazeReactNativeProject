/**
 * @format
 */

import 'react-native';
import 'jest-enzyme';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import DisplayScreen from '../src/screens/DisplayScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store';

describe('check Landing screen', () => {
  describe('DisplayScreen render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Provider store={store}>
          <DisplayScreen />
        </Provider>,
      );
    });
    it('should match to snapshot', () => {
      const component = shallow(
        <Provider store={store}>
          <DisplayScreen />
        </Provider>,
      );
      expect(component).toMatchSnapshot();
      expect(wrapper.exists()).toBe(true);
    });
  });
});
