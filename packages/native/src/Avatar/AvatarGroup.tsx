import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from './Avatar';
import { AvatarGroupProps } from './types';

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  items,
  style,
  size,
  showCountText,
  textColor,
  type,
  color,
  max,
  itemStyle,
  onMoreItems,
  separatePercentage,
  imageProps = {}
}) => {
  const internalItems = max ? items?.splice(0, max + 1) : items;

  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      {internalItems.map((item, index) => {
        const sizeFull = item?.size || size;
        let percentage = separatePercentage;

        if (typeof percentage === 'undefined') {
          percentage = sizeFull <= 25 ? 0.25 : 0.35;
        }

        const marginLeft = (sizeFull || 40) * percentage;

        if (index === max) {
          return (
            <Avatar
              key={index}
              type={type}
              size={sizeFull}
              bordered
              color="border"
              textColor="text"
              showCountText="all"
              textStyle={{
                fontSize: 14
              }}
              onPress={onMoreItems}
              text={`+${items.length - max}`}
              style={StyleSheet.flatten([
                {
                  marginLeft: index === 0 ? 0 : -marginLeft
                },
                itemStyle
              ])}
            />
          );
        }

        return (
          <Avatar
            key={index}
            size={sizeFull}
            showCountText={showCountText}
            textColor={textColor}
            type={type}
            bordered
            color={color}
            {...item}
            imageProps={{
              ...imageProps,
              style: StyleSheet.flatten([imageProps?.style])
            }}
            style={StyleSheet.flatten([
              {
                marginLeft: index === 0 ? 0 : -marginLeft
              },
              itemStyle
            ])}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
