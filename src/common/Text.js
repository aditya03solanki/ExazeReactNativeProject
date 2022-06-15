import React from 'react';
import {Text as RNText} from 'react-native';

const appearanceStyle = {
  default: {},
  heading: {
    fontSize: 26,
    color: 'black',
    lineHeight: 31,
  },
  subheading: {
    color: 'black',
    fontSize: 15,
    lineHeight: 18,
  },
  tabHeading: {
    fontSize: 26,
    color: 'black',
    lineHeight: 31,
  },
};

/**
 * Text component.
 */
const Text = props => {
  const {
    children,
    appearance,
    title,
    style,
    size = 'h4',
    type = 'regular',
    numberOfLines,
    onPress,
  } = props;
  return (
    <RNText
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      onPress={onPress}
      style={[appearanceStyle[appearance], style]}>
      {children ? children : title}
    </RNText>
  );
};

export default Text;
