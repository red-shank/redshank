import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from './Avatar';
export const AvatarGroup = ({ items, style, size, showCountText, textColor, type, backgroundColor, innerBorderColor, max, textStyle, itemStyle, onMoreItems, separatePercentage, bordered, moreProps, borderColor, imageProps = {} }) => {
    const internalItems = max ? [...items].splice(0, max + 1) : items;
    return (<View style={StyleSheet.flatten([styles.container, style])}>
      {internalItems.map((item, index) => {
            const sizeFull = item?.size || size;
            let percentage = separatePercentage;
            if (typeof percentage === 'undefined') {
                percentage = sizeFull <= 25 ? 0.25 : 0.35;
            }
            const marginLeft = (sizeFull || 40) * percentage;
            if (index === max) {
                let maxValue = items.length - max;
                if (maxValue <= 0) {
                    return null;
                }
                if (maxValue > 9) {
                    maxValue = 9;
                }
                return (<Avatar {...moreProps} key={index} type={moreProps?.type ?? type} size={moreProps?.size ?? sizeFull} bordered={moreProps?.bordered ?? bordered} backgroundColor={moreProps?.backgroundColor ?? 'border'} textColor={moreProps?.textColor ?? 'text'} showCountText={moreProps?.showCountText ?? 'all'} textStyle={StyleSheet.flatten([textStyle, moreProps?.textStyle])} onPress={(event) => {
                        onMoreItems?.();
                        moreProps?.onPress?.(event);
                    }} text={moreProps?.text ?? `+${maxValue}`} style={StyleSheet.flatten([
                        {
                            marginLeft: index === 0 ? 0 : -marginLeft
                        },
                        itemStyle,
                        moreProps?.style
                    ])}/>);
            }
            return (<Avatar key={index} size={sizeFull} showCountText={showCountText} textColor={textColor} type={type} bordered={bordered} backgroundColor={backgroundColor} textStyle={textStyle} borderColor={borderColor} innerBorderColor={innerBorderColor} {...item} imageProps={{
                    ...imageProps,
                    style: StyleSheet.flatten([imageProps?.style])
                }} style={StyleSheet.flatten([
                    {
                        marginLeft: index === 0 ? 0 : -marginLeft
                    },
                    itemStyle
                ])}/>);
        })}
    </View>);
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
