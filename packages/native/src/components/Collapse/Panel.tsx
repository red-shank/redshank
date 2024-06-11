import React, { ReactElement, useMemo, useState } from 'react';
import { Animated, View } from 'react-native';

import { Text } from '../Text';
import { useCollapse } from './Context';
import { CollapseInternalItemProps, CollapseItemProps, KeyType } from './types';
import Header from './Header';
import createSxStyle from '../../lib/sx';
import useTheme from '../../context/theme/useTheme';
import { Box } from '../Box';
import { isChildrenCollapse } from './utils';

const animationDuration = 100;

const Panel: React.FC<CollapseItemProps> = (props) => {
  const theme = useTheme();
  const [nestedKey, setNestedKey] = useState<KeyType[]>([]);
  const fadeAnimation = React.useRef(new Animated.Value(0)).current;
  const heightAnimation = React.useRef(new Animated.Value(0)).current;

  const [contentHeight, setContentHeight] = useState(0);

  const { openKeys, onChange, contentColor } = useCollapse();

  const {
    id,
    title,
    disabled,
    children,
    subTitle,
    styleHeader,
    styleContent,
    isFirstElement,
    isLastElement
  } = props as CollapseInternalItemProps;

  const collapsed = !openKeys.includes(id);

  const startInAnimation = React.useCallback(() => {
    Animated.parallel([
      Animated.timing(heightAnimation, {
        toValue: contentHeight,
        duration: animationDuration,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        delay: animationDuration,
        duration: animationDuration,
        useNativeDriver: false
      })
    ]).start();
  }, [contentHeight]);

  const startOutAnimation = React.useCallback(() => {
    Animated.parallel([
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: false
      }),
      Animated.timing(heightAnimation, {
        toValue: 0,
        delay: animationDuration / 3,
        duration: animationDuration,
        useNativeDriver: false
      })
    ]).start();
  }, []);

  const onInternalChange = () => {
    onChange(id);
  };

  React.useEffect(() => {
    collapsed ? startOutAnimation() : startInAnimation();
  }, [collapsed, startInAnimation, startOutAnimation]);

  const contentStyle = {
    px: 2,
    pt: 1,
    pb: 3
  };

  const isNestedCollapse = useMemo(
    () => isChildrenCollapse(children),
    [children]
  );

  return (
    <View>
      <Header
        id={id}
        title={title}
        disabled={disabled}
        subTitle={subTitle}
        styleHeader={styleHeader}
        onPress={onInternalChange}
        isLastElement={isLastElement}
        isFirstElement={isFirstElement}
      />

      {/* only for cal height for animation */}
      <Box
        key={nestedKey.join('')}
        onLayout={(event) => {
          const height = event.nativeEvent.layout.height;
          setContentHeight(height);
        }}
        sx={{
          position: 'absolute',
          opacity: 0,
          zIndex: -1,
          ...contentStyle
        }}
      >
        {typeof children === 'string' || typeof children === 'number' ? (
          <Text>{children}</Text>
        ) : isNestedCollapse ? (
          React.cloneElement(children as ReactElement, {
            openKeys: nestedKey
          })
        ) : (
          children
        )}
      </Box>
      {/* only for cal height for animation */}

      <Animated.View
        style={[
          createSxStyle(
            {
              height: heightAnimation,
              overflow: 'hidden',
              backgroundColor: contentColor,
              borderBottomRadius: 1,
              style: styleContent
            },
            theme
          )
        ]}
      >
        <Animated.View style={{ opacity: fadeAnimation }}>
          <Box sx={contentStyle}>
            {typeof children === 'string' || typeof children === 'number' ? (
              <Text>{children}</Text>
            ) : isNestedCollapse ? (
              React.cloneElement(children as ReactElement, {
                onStateChange(keys) {
                  setNestedKey(keys);
                }
              })
            ) : (
              children
            )}
          </Box>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Panel;
