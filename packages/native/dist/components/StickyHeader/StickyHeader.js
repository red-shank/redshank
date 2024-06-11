import React from 'react';
import { ScrollView } from '../ScrollView';
import { Animated, StyleSheet } from 'react-native';
import { Box } from '../Box';
import { Header } from './Header';
const defaultAnimateInHeight = 20;
export const StickyHeader = ({ children, scrollProps, hidden = false, animateInHeight = defaultAnimateInHeight, header: HeaderComponent = Header, scrollComponent: ScrollComponent = ScrollView, ...props }) => {
    const [isSticky, setIsSticky] = React.useState(false);
    const [heightLayout, setHeightLayout] = React.useState(0);
    let scrollOffsetY = React.useRef(new Animated.Value(0)).current;
    const dynamicHeightAnimation = scrollOffsetY.interpolate({
        inputRange: [0, heightLayout],
        outputRange: [heightLayout, 0],
        extrapolate: 'clamp'
    });
    const onScroll = React.useCallback((event) => {
        const y = event.nativeEvent.contentOffset.y;
        setIsSticky(y > animateInHeight);
        Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], { useNativeDriver: false })(event);
    }, [scrollOffsetY, animateInHeight]);
    const content = (<ScrollComponent scrollEventThrottle={16} scrollIndicatorInsets={{ right: 1 }} {...scrollProps} onScroll={onScroll}>
      {/* generate height, compensation to absolute position */}
      <Animated.View style={StyleSheet.flatten([
            {
                width: '100%',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                height: dynamicHeightAnimation
            }
        ])}/>
      {children}
    </ScrollComponent>);
    return (<Box flex={1}>
      {hidden ? (content) : (<>
          <HeaderComponent {...props} scrollOffsetY={scrollOffsetY} setHeightLayout={setHeightLayout} animateInHeight={animateInHeight} 
        // dynamicHeightAnimation={dynamicHeightAnimation}
        isSticky={isSticky}/>
          {content}
        </>)}
    </Box>);
};
