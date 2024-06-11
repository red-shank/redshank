/**
 * Created by ggoma on 2016. 11. 22..
 */
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, View, TouchableWithoutFeedback } from 'react-native';
import { Box } from '../Box';
import { Text } from '../Text';
import { Icon } from '../Icon';
import createSxStyle from '../../lib/sx';
import useTheme from '../../context/theme/useTheme';
import { Ripple } from '../Ripple';
const { width, height } = Dimensions.get('window');
export function CardModal({ content, onPress, trigger, onExpandedChange, heightAnimation }) {
    const theme = useTheme();
    const refContainer = useRef(null);
    const [expanded, setExpanded] = React.useState(false);
    const [animationConfig, setAnimationConfig] = React.useState({
        TopBorderRadius: 5,
        BottomBorderRadius: 0,
        org_width: width - 32,
        org_height: height / 5,
        top_width: new Animated.Value(width - 32),
        top_height: new Animated.Value(height / 5),
        content_width: new Animated.Value(width - 32),
        content_height: new Animated.Value(heightAnimation.from),
        top_pan: new Animated.ValueXY(),
        content_pan: new Animated.ValueXY(),
        content_opac: new Animated.Value(0),
        back_opac: new Animated.Value(0)
    });
    const grow = (py) => {
        setAnimationConfig((prev) => ({
            ...prev,
            TopBorderRadius: 0,
            BottomBorderRadius: 5
        }));
        Animated.parallel([
            Animated.spring(animationConfig.top_width, {
                toValue: width,
                useNativeDriver: false
            }),
            Animated.spring(animationConfig.top_height, {
                toValue: height / 2,
                useNativeDriver: false
            }),
            Animated.spring(animationConfig.content_height, {
                toValue: heightAnimation.to,
                useNativeDriver: false
            }),
            Animated.spring(animationConfig.top_pan, {
                toValue: {
                    x: 0,
                    y: -(py - 80)
                },
                useNativeDriver: false
            }),
            Animated.spring(animationConfig.content_pan, {
                toValue: {
                    x: 0,
                    y: -(py - 80)
                },
                useNativeDriver: false
            }),
            Animated.timing(animationConfig.content_opac, {
                toValue: 1,
                useNativeDriver: false
            })
        ]).start();
        Animated.timing(animationConfig.back_opac, {
            toValue: 1,
            delay: 25,
            useNativeDriver: true
        }).start();
    };
    const shrink = () => {
        setAnimationConfig((prev) => ({
            ...prev,
            TopBorderRadius: 5,
            BottomBorderRadius: 0
        }));
        Animated.parallel([
            Animated.spring(animationConfig.top_width, {
                toValue: animationConfig.org_width,
                useNativeDriver: false
            }),
            Animated.spring(animationConfig.top_height, {
                toValue: animationConfig.org_height,
                useNativeDriver: false
            }),
            Animated.spring(animationConfig.content_height, {
                toValue: heightAnimation.from,
                useNativeDriver: false
            }),
            Animated.spring(animationConfig.top_pan, {
                toValue: {
                    x: 0,
                    y: 0
                },
                useNativeDriver: false
            }),
            Animated.spring(animationConfig.content_pan, {
                toValue: {
                    x: 0,
                    y: -100
                },
                useNativeDriver: false
            }),
            Animated.timing(animationConfig.content_opac, {
                toValue: 0,
                useNativeDriver: false
            }),
            Animated.timing(animationConfig.back_opac, {
                toValue: 0,
                delay: 0,
                duration: 50,
                useNativeDriver: true
            })
        ]).start();
    };
    const calculateOffset = (isPressed) => {
        if (refContainer.current) {
            refContainer.current.measure((fx, fy, width, height, px, py) => {
                if (isPressed)
                    grow(py);
                else
                    shrink();
            });
        }
    };
    const _onPress = (event) => {
        onPress?.(event);
        setExpanded((prev) => {
            calculateOffset(!prev);
            return !prev;
        });
    };
    const renderCard = () => {
        return (<Animated.View style={{
                width: animationConfig.top_width,
                transform: animationConfig.top_pan.getTranslateTransform()
            }}>
        <Ripple onPress={_onPress} style={createSxStyle({
                position: 'absolute',
                left: 10,
                zIndex: 9999,
                top: 40,
                p: 0.8,
                borderRadius: 5,
                opacity: animationConfig.back_opac,
                backgroundColor: 'rgba(100, 100, 100, .4)'
            }, theme)}>
          <Icon name="chevron-back" type="ionicon" color="white" size={25}/>
        </Ripple>
        {trigger({ expanded })}
      </Animated.View>);
    };
    const renderContent = () => {
        if (!expanded)
            return null;
        return (<Animated.View style={createSxStyle({
                p: 2,
                zIndex: -1,
                width: animationConfig.content_width,
                height: animationConfig.content_height,
                backgroundColor: 'background',
                opacity: animationConfig.content_opac,
                transform: animationConfig.content_pan.getTranslateTransform()
            }, theme)}>
        <Text style={{ fontSize: 24, fontWeight: '700', color: 'black' }}>
          Description
        </Text>
        <Text style={{ color: 'gray', paddingTop: 10 }}>
          {content({ expanded })}
        </Text>
      </Animated.View>);
    };
    useEffect(() => {
        onExpandedChange?.(expanded);
    }, [expanded]);
    return (<Box sx={{
            alignItems: 'center',
            alignSelf: 'center'
        }}>
      <TouchableWithoutFeedback onPress={!expanded ? _onPress : null}>
        <View ref={refContainer} style={[{ alignItems: 'center' }]}>
          <Animated.ScrollView style={{ backgroundColor: 'green', height: 40 }}>
            {renderCard()}
            {renderContent()}
          </Animated.ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </Box>);
}
