import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import Colors from '../res/Colors';
import Text from './Text';

const Button = ({title, onPress, titleStyles, buttonStyle, disabled}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle]}
      disabled={disabled}>
      <Text numberOfLines={1} style={[styles.titleText, titleStyles]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: '700',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '85%',
    borderRadius: 10,
  },
});
