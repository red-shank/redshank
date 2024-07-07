import React from 'react';
import { StyleSheet } from 'react-native';
import {
  useTheme,
  Text,
  Title,
  InputScrollView,
  Box,
  Ripple,
  getColorForBackground,
  Container,
  Button
} from '@redshank/native';

const ThemeScreen = () => {
  const { colors, setTheme, isDark } = useTheme();

  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Title>Toggle theme</Title>
        <Button
          mt={1}
          type="outline"
          appearance="text"
          onPress={() => setTheme(isDark ? 'light' : 'dark')}
        >
          Toggle Theme
        </Button>

        <Title mt={4}>Colors</Title>
        <Box gap={4}>
          {Object.entries(colors).map(([key, color]) => {
            if (typeof color === 'function') return null;
            if (typeof color === 'object') {
              return (
                <Box
                  p={2}
                  gap={2}
                  bg="card"
                  borderRadius={2}
                  key={`${key}-${color}`}
                >
                  <Title level={5} transformText="capitalize">
                    {key}
                  </Title>

                  {Object.keys(color).map((nestedColor) => {
                    const colorResolve = colors.get(`${key}.${nestedColor}`);
                    return (
                      <Ripple
                        key={`${key}-${nestedColor}`}
                        style={StyleSheet.flatten([
                          styles.box,
                          { backgroundColor: colorResolve }
                        ])}
                      >
                        <Title
                          level={3}
                          color={getColorForBackground(colorResolve)}
                        >
                          {nestedColor}
                        </Title>
                        <Text color={getColorForBackground(colorResolve)}>
                          {colorResolve}
                        </Text>
                      </Ripple>
                    );
                  })}
                </Box>
              );
            }
            return (
              <Ripple
                key={`${key}-${color}`}
                style={StyleSheet.flatten([
                  styles.box,
                  { backgroundColor: colors.get(key) }
                ])}
              >
                <Title level={3} color={getColorForBackground(colors.get(key))}>
                  {key}
                </Title>
                <Text color={getColorForBackground(colors.get(key))}>
                  {colors.get(key)}
                </Text>
              </Ripple>
            );
          })}
        </Box>
      </Container>
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    padding: 20
  }
});

export default ThemeScreen;
