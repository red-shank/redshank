import React, { useCallback } from 'react';
import {
  Animated,
  Image as ImageNative,
  ImageLoadEventData,
  NativeSyntheticEvent,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Ripple } from '../Ripple';
import { ImageProps } from './types';

export const Image: React.FC<ImageProps> = ({
  onPress,
  onLongPress,
  source,
  Component = onPress || onLongPress ? Ripple : View,
  placeholderStyle,
  placeholderContent,
  containerStyle,
  childrenContainerStyle = null,
  style = {},
  ImageComponent = ImageNative,
  onLoad,
  children,
  transition,
  height,
  width,
  transitionDuration = 360,
  ...props
}) => {
  const placeholderOpacity = React.useRef(new Animated.Value(1));

  const onLoadHandler = useCallback(
    (event: NativeSyntheticEvent<ImageLoadEventData>) => {
      if (transition) {
        Animated.timing(placeholderOpacity.current, {
          toValue: 0,
          duration: transitionDuration,
          useNativeDriver: true,
        }).start();
      } else {
        placeholderOpacity.current.setValue(0);
      }
      onLoad?.(event);
    },
    [transition, transitionDuration, onLoad]
  );

  const hasImage = Boolean(source);

  const sourceResolve = typeof source === 'string' ? { uri: source } : source;

  return (
    <Component
      {...{ onPress, onLongPress }}
      accessibilityIgnoresInvertColors={true}
      style={StyleSheet.flatten([styles.container, containerStyle])}
    >
      <ImageComponent
        {...props}
        {...{ transition, transitionDuration }}
        source={sourceResolve}
        onLoad={onLoadHandler}
        style={StyleSheet.flatten([
          StyleSheet.absoluteFill,
          { width, height },
          style,
        ])}
      />
      {/* Transition placeholder */}
      <Animated.View
        pointerEvents={hasImage ? 'none' : 'auto'}
        accessibilityElementsHidden={hasImage}
        importantForAccessibility={hasImage ? 'no-hide-descendants' : 'yes'}
        style={[
          StyleSheet.absoluteFillObject,
          {
            opacity: hasImage ? placeholderOpacity.current : 1,
          },
        ]}
      >
        <View
          style={StyleSheet.flatten([
            { width, height },
            style,
            styles.placeholder,
            placeholderStyle,
          ])}
        >
          {React.isValidElement(placeholderContent)
            ? placeholderContent
            : placeholderContent && <Text>{placeholderContent}</Text>}
        </View>
      </Animated.View>
      {/* Children for Image */}
      <View
        style={StyleSheet.flatten([
          { width, height },
          childrenContainerStyle ?? style,
        ])}
      >
        {children}
      </View>
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
    overflow: 'hidden',
  },
  placeholder: {
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Image.displayName = 'Image';
