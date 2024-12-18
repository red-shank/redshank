import React, { useCallback, useState } from 'react';
import {
  Animated,
  Image as ImageNative,
  ImageLoadEventData,
  NativeSyntheticEvent,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Ripple } from '../Ripple';
import { ImageProps } from './types';
import createSxStyle from '../../lib/sx';
import useTheme from '../../context/theme/useTheme';

export const Image: React.FC<ImageProps> = ({
  onPress,
  onLongPress,
  source,
  src,
  Component = onPress || onLongPress ? Ripple : View,
  placeholderStyle,
  placeholderContent,
  errorContent,
  containerStyle,
  persisRatioWithImageFailed = true,
  childrenContainerStyle = null,
  style = {},
  ImageComponent = ImageNative,
  onLoad,
  children,
  transition,
  height,
  width = '100%',
  transitionDuration = 200,
  ...props
}) => {
  const theme = useTheme();
  const [error, setError] = useState(false);
  const placeholderOpacity = React.useRef(new Animated.Value(1));

  const onLoadHandler = useCallback(
    (event: NativeSyntheticEvent<ImageLoadEventData>) => {
      Animated.timing(placeholderOpacity.current, {
        toValue: 0,
        duration: transitionDuration,
        useNativeDriver: true
      }).start();
      onLoad?.(event);
    },
    [transitionDuration, onLoad]
  );

  const onLoadError = useCallback(() => {
    setError(true);
  }, []);

  const hasImage = Boolean(source || src);

  const sourceResolve = typeof source === 'string' ? { uri: source } : source;

  return (
    <Component
      {...{ onPress, onLongPress }}
      accessibilityIgnoresInvertColors={true}
      style={StyleSheet.flatten([
        styles.container,
        (!error || persisRatioWithImageFailed) && { width, height },
        containerStyle
      ])}
    >
      <ImageComponent
        {...props}
        {...{ transition, transitionDuration }}
        source={sourceResolve}
        onLoad={onLoadHandler}
        onError={onLoadError}
        style={StyleSheet.flatten([
          StyleSheet.absoluteFill,
          { width: '100%', height: '100%', aspectRatio: 1 },
          style
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
            opacity: placeholderOpacity.current,
            backgroundColor: error
              ? 'transparent'
              : theme.colors.get('imagePlaceholder')
          },
          style
        ]}
      >
        <Animated.View
          style={StyleSheet.flatten([
            createSxStyle(
              {
                alignItems: 'center',
                justifyContent: 'center',
                width,
                height,
                style
              },
              theme
            ),
            placeholderStyle
          ])}
        >
          {React.isValidElement(placeholderContent) && !error
            ? placeholderContent
            : placeholderContent && !error && <Text>{placeholderContent}</Text>}

          {React.isValidElement(errorContent)
            ? errorContent
            : errorContent && <Text>{errorContent}</Text>}
        </Animated.View>
      </Animated.View>

      {/* Children for Image */}
      {children && (
        <Animated.View
          style={StyleSheet.flatten([
            { width, height, backgroundColor: 'transparent' },
            childrenContainerStyle ?? style
          ])}
        >
          {children}
        </Animated.View>
      )}
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
    overflow: 'hidden'
  }
});

Image.displayName = 'Image';
