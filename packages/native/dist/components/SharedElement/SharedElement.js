import React, { useRef, useState } from 'react';
import { View, SafeAreaView, Animated, Easing, FlatList, StatusBar, Image } from 'react-native';
import baseStyles from './styles';
import { Icon } from '../Icon';
import { Ripple } from '../Ripple';
import createSxStyle from '../../lib/sx';
import useTheme from '../../context/theme/useTheme';
export function SharedElement({ data, listProps, styles, content, renderItem, cardWidth }) {
    const theme = useTheme();
    const ghostView = useRef(null);
    const cardsRef = useRef({});
    const [scrollEnabled, setScrollEnabled] = useState(false);
    const [oldPosition, setOldPosition] = useState();
    const [activeCard, setActiveCard] = useState(0);
    const [animationConfig] = useState({
        dimensions: new Animated.ValueXY({ x: 0, y: 0 }),
        position: new Animated.ValueXY(),
        animated: new Animated.Value(0),
        detailAnimated: new Animated.Value(0)
    });
    const activeCardStyle = {
        width: animationConfig.dimensions.x,
        left: animationConfig.position.x,
        top: animationConfig.position.y,
        ...baseStyles.activeCard
    };
    const closeOpacity = animationConfig.animated.interpolate({
        inputRange: [0, 0.75, 1],
        outputRange: [0, 0, 1]
    });
    const contentOpacity = animationConfig.detailAnimated.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0.2, 1]
    });
    const contentOffsetX = animationConfig.detailAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [-5, 0],
        easing: Easing.bezier(0.025, -0.05, 0.1, -0.1)
    });
    const contentOffsetY = animationConfig.detailAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, 0],
        easing: Easing.bezier(0.175, -0.885, 0.32, -1)
    });
    const keyExtractor = (item, index) => `item-${index}`;
    const expand = (activeCard) => {
        console.log(activeCard);
        StatusBar.setHidden(true, 'slide');
        cardsRef.current[activeCard].measure((x, y, width, height, pageX, pageY) => {
            setOldPosition({
                x: pageX,
                y: pageY,
                width,
                height
            });
            animationConfig.position.setValue({
                x: pageX,
                y: pageY
            });
            animationConfig.dimensions.setValue({
                x: width,
                y: height
            });
            setActiveCard(activeCard);
            setScrollEnabled(true);
            ghostView.current.measure((dx, dy, dWidth, dHeight, dPageX, dPageY) => {
                Animated.parallel([
                    Animated.spring(animationConfig.position.x, {
                        toValue: dPageX,
                        useNativeDriver: false
                    }),
                    Animated.spring(animationConfig.position.y, {
                        toValue: dPageY,
                        useNativeDriver: false
                    }),
                    Animated.spring(animationConfig.dimensions.x, {
                        toValue: dWidth,
                        useNativeDriver: false
                    }),
                    Animated.spring(animationConfig.dimensions.y, {
                        toValue: dHeight,
                        useNativeDriver: false
                    }),
                    Animated.timing(animationConfig.animated, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true
                    }),
                    Animated.timing(animationConfig.detailAnimated, {
                        toValue: 1,
                        delay: 100,
                        duration: 300,
                        useNativeDriver: true
                    })
                ]).start();
            });
        });
    };
    const shrink = () => {
        setScrollEnabled(false);
        Animated.parallel([
            Animated.timing(animationConfig.position.x, {
                toValue: oldPosition.x,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(animationConfig.position.y, {
                toValue: oldPosition.y,
                easing: Easing.bezier(0.175, 0.885, 0.32, 1.275),
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(animationConfig.dimensions.x, {
                toValue: oldPosition.width,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(animationConfig.dimensions.y, {
                toValue: oldPosition.height,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(animationConfig.animated, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }),
            Animated.timing(animationConfig.detailAnimated, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            })
        ]).start(() => {
            StatusBar.setHidden(false, 'slide');
            setActiveCard(0);
        });
    };
    const renderInternalItem = ({ item, index }) => {
        const element = React.cloneElement(renderItem({ item, index }));
        const customContainerStyle = [];
        const opacity = animationConfig.animated.interpolate({
            inputRange: [0, 0.01, 1],
            outputRange: [1, 0.1, 0.1]
        });
        if (activeCard) {
            customContainerStyle.push({
                opacity
            });
        }
        return (<Ripple onPress={() => expand(index + 1)}>
        <Animated.View ref={(instance) => {
                //@ts-ignore
                cardsRef.current[index + 1] = instance;
            }} style={[
                customContainerStyle,
                { width: cardWidth, height: item.height }
            ]}>
          {element}
        </Animated.View>
      </Ripple>);
    };
    return (<SafeAreaView style={[baseStyles.safeArea, createSxStyle(styles?.safeArea, theme)]}>
      <FlatList data={data} contentContainerStyle={[
            baseStyles.flatlistContainer,
            createSxStyle(styles?.list, theme)
        ]} keyExtractor={keyExtractor} renderItem={renderInternalItem} {...listProps}/>
      <View style={baseStyles.ghostViewContainer} pointerEvents={activeCard ? 'auto' : 'none'} ref={ghostView}>
        <Animated.ScrollView scrollEnabled={scrollEnabled} style={[baseStyles.scrollViewContainer]} contentContainerStyle={baseStyles.scrollViewContentContainer} pointerEvents={activeCard ? 'auto' : 'none'}>
          <Animated.View style={[
            // @ts-ignore
            { height: activeCard ? data[activeCard - 1]?.height : 'auto' },
            activeCardStyle
        ]}>
            <Ripple onPress={shrink} style={{
            position: 'absolute',
            left: 10,
            zIndex: 9999,
            top: 40,
            padding: 3,
            borderRadius: 5,
            opacity: closeOpacity,
            backgroundColor: 'rgba(100, 100, 100, .4)'
        }}>
              <Icon name="chevron-back" type="ionicon" color="white" size={25}/>
            </Ripple>
            <Animated.View style={{}}>
              <Image 
    // @ts-ignore
    source={activeCard ? data[activeCard - 1]?.image : null} style={baseStyles.image} resizeMode="cover"/>
            </Animated.View>
          </Animated.View>
          <Animated.View>
            {(activeCard && content({ item: data[activeCard - 1] })) || null}
          </Animated.View>
        </Animated.ScrollView>
      </View>
    </SafeAreaView>);
}
