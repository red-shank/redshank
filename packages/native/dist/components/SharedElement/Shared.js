import React, { useState, useRef } from 'react';
import { Animated, ActivityIndicator, Dimensions, View, Image, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { Ripple } from '../Ripple';
import createSxStyle from '../../lib/sx';
import useTheme from '../../context/theme/useTheme';
const { width, height } = Dimensions.get('window');
export const SharedElement = ({ image, color, title, description, content, onClick }) => {
    const theme = useTheme();
    const [pressed, setPressed] = useState(false);
    const [activate, setActivate] = useState('Activate');
    const [activated, setActivated] = useState(false);
    const [offset, setOffset] = useState(0);
    const containerRef = useRef(null);
    const top_width = useRef(new Animated.Value(width - 32)).current;
    const top_height = useRef(new Animated.Value(height / 5)).current;
    const bottom_width = useRef(new Animated.Value(width - 32)).current;
    const bottom_height = useRef(new Animated.Value(height / 6)).current;
    const content_height = useRef(new Animated.Value(0)).current;
    const top_pan = useRef(new Animated.ValueXY()).current;
    const bottom_pan = useRef(new Animated.ValueXY()).current;
    const content_pan = useRef(new Animated.ValueXY()).current;
    const content_opac = useRef(new Animated.Value(0)).current;
    const button_opac = useRef(new Animated.Value(0)).current;
    const back_opac = useRef(new Animated.Value(0)).current;
    const plus = useRef(new Animated.Value(1)).current;
    const handlePress = () => {
        console.log('PRESS');
        onClick?.();
        setPressed((prev) => !prev);
        calculateOffset();
    };
    const calculateOffset = () => {
        if (containerRef.current) {
            containerRef.current.measure((fx, fy, width, height, px, py) => {
                setOffset(py);
                if (pressed) {
                    grow();
                }
                else {
                    shrink();
                }
            });
        }
    };
    const grow = () => {
        Animated.parallel([
            Animated.spring(top_width, { toValue: width, useNativeDriver: false }),
            Animated.spring(top_height, {
                toValue: height / 2,
                useNativeDriver: false
            }),
            Animated.spring(bottom_height, {
                toValue: height / 6 + 50,
                useNativeDriver: false
            }),
            Animated.spring(content_height, {
                toValue: height / 2,
                useNativeDriver: false
            }),
            Animated.spring(top_pan, {
                toValue: { x: 0, y: -offset },
                useNativeDriver: false
            }),
            Animated.spring(content_pan, {
                toValue: { x: 0, y: -(height / 8 + offset) },
                useNativeDriver: false
            }),
            Animated.spring(bottom_pan, {
                toValue: { x: 0, y: -(50 + offset) },
                useNativeDriver: false
            }),
            Animated.timing(content_opac, { toValue: 1, useNativeDriver: false }),
            Animated.timing(button_opac, { toValue: 1, useNativeDriver: false }),
            Animated.timing(back_opac, { toValue: 1, useNativeDriver: false }),
            Animated.timing(plus, { toValue: 0, useNativeDriver: false })
        ]).start();
    };
    const shrink = () => {
        Animated.parallel([
            Animated.spring(top_width, {
                toValue: width - 32,
                useNativeDriver: false
            }),
            Animated.spring(top_height, {
                toValue: height / 5,
                useNativeDriver: false
            }),
            Animated.spring(bottom_height, {
                toValue: height / 6,
                useNativeDriver: false
            }),
            Animated.spring(top_pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false
            }),
            Animated.spring(bottom_pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false
            }),
            Animated.spring(content_height, { toValue: 0, useNativeDriver: false }),
            Animated.timing(content_opac, { toValue: 0, useNativeDriver: false }),
            Animated.timing(button_opac, { toValue: 0, useNativeDriver: false }),
            Animated.timing(back_opac, { toValue: 0, useNativeDriver: false }),
            Animated.timing(plus, { toValue: 1, useNativeDriver: false })
        ]).start();
    };
    const activateCard = () => {
        setActivate('loading');
        setTimeout(() => {
            setActivate(<Text>
          Activated <Icon name="check"/>
        </Text>);
            setActivated(true);
        }, 1500);
    };
    const renderCard = () => {
        return (<Animated.View style={{
                width: top_width,
                height: top_height,
                transform: top_pan.getTranslateTransform()
            }}>
        <Ripple onPress={handlePress} style={createSxStyle({
                position: 'absolute',
                left: 10,
                zIndex: 9999,
                top: 40,
                p: 0.8,
                borderRadius: 5,
                opacity: back_opac,
                backgroundColor: 'rgba(100, 100, 100, .4)'
            }, theme)}>
          <Icon name="chevron-back" type="ionicon" color="white" size={25}/>
        </Ripple>
        <Image source={image}/>
        {/*{trigger({ expanded })}*/}
      </Animated.View>);
    };
    const renderBottom = () => (<Animated.View style={[
            styles.bottom,
            {
                width: bottom_width,
                height: bottom_height,
                borderRadius: pressed ? 0 : 5,
                transform: bottom_pan.getTranslateTransform()
            }
        ]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 4 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingBottom: 8 }}>
            {title}
          </Text>
          <Text style={{
            fontSize: 12,
            fontWeight: '500',
            color: 'gray',
            paddingBottom: 10
        }}>
            {description}
          </Text>
        </View>
        <Animated.View style={{
            opacity: plus,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
          <Icon name={activated ? 'check-circle' : 'plus-circle'} style={{ fontSize: 24, color: color }}/>
        </Animated.View>
      </View>
      {pressed && (<TouchableOpacity onPress={activateCard}>
          <Animated.View style={{
                opacity: button_opac,
                backgroundColor: color,
                marginTop: 10,
                borderRadius: 10,
                width: width - 64,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            {activate === 'loading' ? (<ActivityIndicator animating={true} color="white"/>) : (<Text style={{ color: 'white', fontWeight: '800', fontSize: 18 }}>
                {activate}
              </Text>)}
          </Animated.View>
        </TouchableOpacity>)}
    </Animated.View>);
    const renderContent = () => {
        if (!pressed)
            return null;
        return (<Animated.View style={{
                opacity: content_opac,
                marginTop: 40,
                width,
                height: content_height,
                zIndex: -1,
                backgroundColor: '#ddd',
                transform: content_pan.getTranslateTransform()
            }}>
        <View style={{ backgroundColor: 'white', flex: 1, margin: 16, padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', color: 'black' }}>
            Description
          </Text>
          <Text style={{ color: 'gray', paddingTop: 10 }}>{content}</Text>
        </View>
      </Animated.View>);
    };
    return (<View style={[styles.container]}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View ref={containerRef} style={{ alignItems: 'center' }}>
          {renderCard()}
          {renderBottom()}
          {renderContent()}
        </View>
      </TouchableWithoutFeedback>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 16,
        marginTop: 16
    },
    top: {
        marginBottom: 0,
        backgroundColor: 'blue'
    },
    bottom: {
        marginTop: 0,
        padding: 16,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'white'
    },
    backButton: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 32,
        left: 10
    }
});
