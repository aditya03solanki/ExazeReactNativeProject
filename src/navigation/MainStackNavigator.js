import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LandingScreen from '../screens/LandingScreen';
import Constants from '../res/Constants';
import DisplayScreen from '../screens/DisplayScreen';

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
        <Stack.Screen
          name={Constants.routeNames.displayScreen}
          component={DisplayScreen}
        />
      </Stack.Navigator>
    );
  };

  return <Screens />;
};

export default MainStackNavigator;
