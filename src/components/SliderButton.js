import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Text from '../common/Text';
import Assets from '../res/Assets';
import Colors from '../res/Colors';
import Dimen from '../res/Dimen';

const BUTTON_WIDTH = 60;

const SliderButton = () => {
  const animateSlider = useSharedValue(0);

  const gestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = animateSlider.value;
    },
    onActive: (event, context) => {
      if (
        event.translationX < 0 &&
        context.translateX + 60 < (Dimen.phoneWidth * 0.9) / 2
      ) {
        animateSlider.value = 0;
      } else if (
        event.translationX + context.translateX + 60 >
        Dimen.phoneWidth * 0.9
      ) {
        animateSlider.value = Dimen.phoneWidth * 0.9 - 60;
      } else animateSlider.value = event.translationX + context.translateX;
    },
    onEnd: (event, context) => {
      if (
        event.translationX < (Dimen.phoneWidth * 0.9) / 2 &&
        context.translateX + 60 < (Dimen.phoneWidth * 0.9) / 2
      )
        animateSlider.value = 0;
      else animateSlider.value = Dimen.phoneWidth * 0.9 - 60;
    },
  });

  const AnimatedStyles = {
    btnSlider: useAnimatedStyle(() => {
      return {
        transform: [{translateX: animateSlider.value}],
      };
    }),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Slide me to continue </Text>
      <PanGestureHandler onGestureEvent={gestureEvent}>
        <Animated.View
          style={[styles.slideContainer, AnimatedStyles.btnSlider]}>
          <Image
            source={Assets.common.diamond}
            style={{tintColor: Colors.white}}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: Dimen.phoneWidth * 0.9,
    borderColor: Colors.white,
    borderWidth: 0.5,
    borderRadius: 7,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#6eb1f7',
  },
  slideContainer: {
    height: '101%',
    width: 60,
    backgroundColor: '#6eb1f7',
    borderRadius: 7,
    position: 'absolute',
    left: -1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SliderButton;
