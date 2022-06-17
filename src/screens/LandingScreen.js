//@flow
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, NativeModules} from 'react-native';
import NavigationService from '../navigation/NavigationService';
import Dimen from '../res/Dimen';
import Colors from '../res/Colors';
import Button from '../common/Button';
import {useSelector, useDispatch} from 'react-redux';
import SetUserDetailAction from '../redux/actions/UserDetailAction';
import Constants from '../res/Constants';

const {NativeBridgeModule} = NativeModules;

const LandingScreen = props => {
  const [inputName, setInputName] = useState('');
  const [inputUserName, setInputUserName] = useState('');
  const [inputemail, setInputEmail] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const {name, email, userName} = useSelector(state => state.UserDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    NativeBridgeModule.showMessage(e => {
      setToastMessage(e);
      setTimeout(() => {
        setToastMessage('');
      }, 2000);
    });
  }, []);

  const onBtnPress = () => {
    dispatch(
      SetUserDetailAction.setDetail({
        name: inputName === '' ? name : inputName,
        email: inputemail === '' ? email : inputemail,
        userName: inputUserName === '' ? userName : inputUserName,
      }),
    );
    setStateBlank();
  };

  const setStateBlank = () => {
    setInputEmail('');
    setInputName('');
    setInputUserName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, {name}</Text>
      <TextInput
        placeholder={'Enter Name...'}
        placeholderTextColor={Colors.white}
        style={styles.input}
        onChangeText={text => setInputName(text)}
        value={inputName}
      />
      <TextInput
        placeholder={'Enter Username...'}
        placeholderTextColor={Colors.white}
        style={styles.input}
        onChangeText={text => setInputUserName(text)}
        value={inputUserName}
      />
      <TextInput
        placeholder={'Enter Email...'}
        placeholderTextColor={Colors.white}
        style={styles.input}
        onChangeText={text => setInputEmail(text)}
        value={inputemail}
      />
      <Button
        onPress={onBtnPress}
        buttonStyle={[styles.btn, {backgroundColor: '#6eb1f7'}]}
        title={'Save'}
        titleStyles={{color: '#375468'}}
      />
      <Button
        onPress={() =>
          NavigationService.navigate(Constants.routeNames.homeScreen)
        }
        buttonStyle={[styles.btn, {backgroundColor: '#6eb1f7'}]}
        title={'Navigate To HomeScreen'}
        titleStyles={{color: '#375468'}}
      />
      {toastMessage !== '' && (
        <View style={styles.toastMessageContainer}>
          <Text style={styles.toastMessage}>{toastMessage}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1924',
  },
  input: {
    height: 60,
    width: Dimen.phoneWidth * 0.9,
    borderWidth: 0.5,
    borderColor: Colors.white,
    borderRadius: 7,
    paddingLeft: 10,
    fontSize: 18,
    marginTop: 15,
    color: Colors.white,
  },
  btn: {
    marginTop: 15,
  },
  title: {
    marginBottom: 25,
    alignSelf: 'flex-start',
    fontSize: 25,
    fontWeight: '800',
    color: Colors.white,
    marginLeft: 20,
  },
  toastMessageContainer: {
    position: 'absolute',
    bottom: 50,
    height: 60,
    width: '90%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  toastMessage: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.white,
  },
});

export default LandingScreen;
