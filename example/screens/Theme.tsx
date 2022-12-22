import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  useTheme,
  Text,
  Title,
  InputScrollView,
  Space,
  Ripple,
  getColorForBackground,
} from '@redshank/native';

const ThemeScreen = () => {
  const { colors } = useTheme();
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Title>Colors</Title>
        <Space orientation="vertical">
          {Object.keys(colors).map((color) => (
            <Ripple
              key={color}
              style={StyleSheet.flatten([
                styles.box,
                { backgroundColor: colors[color] },
              ])}
            >
              <Title level={3} color={getColorForBackground(colors[color])}>
                {color}
              </Title>
              <Text color={getColorForBackground(colors[color])}>
                {colors[color]}
              </Text>
            </Ripple>
          ))}
        </Space>
      </View>
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    padding: 20,
  },
});

export default ThemeScreen;
