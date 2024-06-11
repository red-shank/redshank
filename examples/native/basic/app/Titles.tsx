import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Title, Space, Button, Box } from "@redshank/native";

type AlignType = "left" | "right" | "center";
type Transform = "none" | "capitalize" | "uppercase" | "lowercase";

const TitleScreen = () => {
  const [align, setAlign] = useState<AlignType>("left");
  const [transform, setTransform] = useState<Transform>("none");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Box gap={2}>
          <Title level={1} align={align} transformText={transform}>
            Title example level 1
          </Title>
          <Title level={2} align={align} transformText={transform}>
            Title example level 2
          </Title>
          <Title level={3} align={align} transformText={transform}>
            Title example level 3
          </Title>
          <Title level={4} align={align} transformText={transform}>
            Title example level 4
          </Title>
          <Title level={5} align={align} transformText={transform}>
            Title example level 5
          </Title>
          <Title level={6} align={align} transformText={transform}>
            Title example level 6
          </Title>

          <Title mt={8} level={3}>Align</Title>
          <Space>
            <Button onPress={() => setAlign("left")}>Left</Button>
            <Button color="black" onPress={() => setAlign("center")}>
              Center
            </Button>
            <Button onPress={() => setAlign("right")}>Right</Button>
          </Space>
          <Title level={3}>Transform Text</Title>
          <Space>
            <Button onPress={() => setTransform("none")}>None</Button>
            <Button onPress={() => setTransform("capitalize")}>
              Capitalize
            </Button>
            <Button onPress={() => setTransform("uppercase")}>Uppercase</Button>
            <Button onPress={() => setTransform("lowercase")}>Lowercase</Button>
          </Space>
        </Box>
        <View style={{ height: 75 }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: "100%",
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "rgba(100, 100, 100, .3)",
  },
  space: {
    marginTop: 50,
  },
});

export default TitleScreen;
