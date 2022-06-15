import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScrees';
import Constants from '../res/Constants';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const Screens = () => {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name={Constants.routeNames.landingScreen}
          component={LandingScreen}
        />
        <Stack.Screen
          name={Constants.routeNames.homeScreen}
          component={HomeScreen}
        />
      </Stack.Navigator>
    );
  };

  return <Screens />;
};

export default MainStackNavigator;
