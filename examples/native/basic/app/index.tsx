import React from "react";
import { StyleSheet } from "react-native";
import {
  useTheme,
  Text,
  Title,
  InputScrollView,
  Space,
  Ripple,
  getColorForBackground,
  Container,
  Button,
} from "@redshank/native";

const ThemeScreen = () => {
  const { colors, setTheme, isDark } = useTheme();

  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Title>Toggle theme</Title>
        <Button
          mt={1}
          type="outline"
          color="text"
          borderColor="text"
          onPress={() => setTheme(isDark ? "light" : "dark")}
        >
          Toggle Theme
        </Button>

        <Title mt={4}>Colors</Title>
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
      </Container>
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    padding: 20,
  },
});

export default ThemeScreen;
