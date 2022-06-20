//@flow
import React from 'react';
import type {Node} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../common/Button';
import Text from '../common/Text';
import SliderButton from '../components/SliderButton';
import NavigationService from '../navigation/NavigationService';
import Colors from '../res/Colors';
import Constants from '../res/Constants';

type ReduxState = {
  name: String,
};

const HomeScreen: () => Node = () => {
  const {name} = useSelector(state => state.UserDetail);
  return (
    <View style={{flex: 1, backgroundColor: '#1a1924'}}>
      <Text style={styles.title}>Hi, {name}</Text>
      <View style={styles.container}>
        <Text
          onPress={() =>
            NavigationService.navigate(Constants.routeNames.homeScreen)
          }
          style={styles.heading}>
          4 Variations of button
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
          onPress={() =>
            NavigationService.navigate(Constants.routeNames.displayScreen)
          }
        />
        <Button
          buttonStyle={[styles.btn, {backgroundColor: '#6eb1f7'}]}
          title={'Press me'}
          titleStyles={{color: Colors.white}}
          onPress={() =>
            NavigationService.navigate(Constants.routeNames.landingScreen)
          }
        />
        <SliderButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  heading: {
    fontSize: 20,
    color: '#b2bf16',
  },
  btn: {
    marginTop: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: Colors.white,
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 10,
  },
});

export default HomeScreen;
