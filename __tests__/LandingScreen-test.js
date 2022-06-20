/**
 * @format
 */

import 'react-native';
import React from 'react';
import LandingScreen from '../src/screens/landingScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store';

it('LandingScreen render', () => {
  renderer.create(
    <Provider store={store}>
      <LandingScreen />
    </Provider>,
  );
});
