//@flow
import React from 'react';
import type {Node} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../common/Button';
import Text from '../common/Text';
import NavigationService from '../navigation/NavigationService';
import Colors from '../res/Colors';
import Constants from '../res/Constants';

type reduxstate = {
  name: string,
  email: string,
  userName: string,
};

const DisplayScreen: () => Node = () => {
  const {name, email, userName}: reduxstate = useSelector(
    state => state.UserDetail,
  );
  return (
    <View style={{flex: 1, backgroundColor: '#1a1924'}}>
      <Text style={styles.title}>Hi, {name}</Text>
      <Text style={styles.email}>{email}</Text>
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello{' '}
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{userName},</Text>
          {'\n'}
          Here is the sample React Native App created.
        </Text>
        <Button
          buttonStyle={[styles.btn, {backgroundColor: '#6eb1f7'}]}
          title={'Navigate to Welcome Screen'}
          titleStyles={{color: '#375468'}}
          onPress={() =>
            NavigationService.navigate(Constants.routeNames.landingScreen)
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: Colors.white,
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
  },
  btn: {
    marginTop: 15,
  },
  email: {
    fontSize: 18,
    color: Colors.white,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});

export default DisplayScreen;
