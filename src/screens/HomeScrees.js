import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigationService from '../navigation/NavigationService';
import Constants from '../res/Constants';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() =>
          NavigationService.navigate(Constants.routeNames.landingScreen)
        }>
        {' '}
        HomeScreen{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
