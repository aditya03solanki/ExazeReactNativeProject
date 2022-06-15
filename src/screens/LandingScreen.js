import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../common/Button';
import NavigationService from '../navigation/NavigationService';
import Colors from '../res/Colors';
import Constants from '../res/Constants';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() =>
          NavigationService.navigate(Constants.routeNames.homeScreen)
        }
        style={styles.heading}>
        Welcome
      </Text>
      <Button
        buttonStyle={[styles.btn, {backgroundColor: 'transparent'}]}
        title={'Press me'}
        titleStyles={{color: '#375468'}}
      />
      <Button
        buttonStyle={[styles.btn, {backgroundColor: '#34424a'}]}
        title={'Press me'}
        titleStyles={{color: '#375468'}}
      />
      <Button
        buttonStyle={[styles.btn, {backgroundColor: '#6eb1f7'}]}
        title={'Press me'}
        titleStyles={{color: Colors.white}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#1a1924',
    paddingBottom: 50,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  btn: {
    marginTop: 15,
  },
});

export default LandingScreen;
