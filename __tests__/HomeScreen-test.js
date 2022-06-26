/**
 * @format
 */

import 'react-native';
import 'jest-enzyme';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import HomeScreen from '../src/screens/HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store';

jest.mock('react-native-gesture-handler', () => {});

describe('check Landing screen', () => {
  describe('HomeScreen render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Provider store={store}>
          <HomeScreen />
        </Provider>,
      );
    });
    it('should match to snapshot', () => {
      const component = shallow(
        <Provider store={store}>
          <HomeScreen />
        </Provider>,
      );
      expect(component).toMatchSnapshot();
      expect(wrapper.exists()).toBe(true);
    });
  });
});
