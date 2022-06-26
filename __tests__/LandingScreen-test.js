/**
 * @format
 */

import 'react-native';
import 'jest-enzyme';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import LandingScreen from '../src/screens/landingScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store';
import * as redux from 'react-redux';

describe('check Landing screen', () => {
  describe('LandingScreen render', () => {
    let wrapper;
    let spyOnUseSelector;
    let spyOnUseDispatch;
    let mockDispatch;
    beforeEach(() => {
      wrapper = shallow(
        <Provider store={store}>
          <LandingScreen />
        </Provider>,
      );
      // Mock useSelector hook
      // spyOnUseSelector = jest.spyOn(redux, 'useSelector');
      // spyOnUseSelector.mockReturnValue([{name: '', email: '', userName: ''}]);

      // Mock useDispatch hook
      // spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
      // Mock dispatch function returned from useDispatch
      // mockDispatch = jest.fn();
      // spyOnUseDispatch.mockReturnValue(mockDispatch);
    });
    it('should match to snapshot', () => {
      const component = shallow(
        <Provider store={store}>
          <LandingScreen />
        </Provider>,
      );
      expect(component).toMatchSnapshot();
      expect(wrapper.exists()).toBe(true);
    });
  });
});
