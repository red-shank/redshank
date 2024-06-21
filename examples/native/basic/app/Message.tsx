import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, Box, Button, useMessage, ScrollView } from "@redshank/native";

type Type = "default" | "success" | "error" | "warning" | "info";

const types: Type[] = ["default", "success", "error", "warning", "info"];

const MessageScreen = () => {
  const [message] = useMessage();

  const onPressDefault = (type: Type) => {
    message[type](type);
  };

  const onPressIcon = (type: Type) => {
    message[type](type, { withIcon: true });
  };

  const onPressShadowBox = (type: Type) => {
    message[type](type, { withIcon: true, withBoxShadow: true });
  };

  const onPressShadow = (type: Type) => {
    message[type](type, {
      type: "shadow",
      withBoxShadow: true,
      withIcon: true,
      duration: 100000,
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Title level={3}>Default Message</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {types.map((f) => (
              <Button key={f} onPress={() => onPressDefault(f)}>
                {f}
              </Button>
            ))}
          </Box>
        </View>

        <View style={{ alignItems: "center" }}>
          <Title level={3}>With icon</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {types.map((f) => (
              <Button key={f} onPress={() => onPressIcon(f)}>
                {f}
              </Button>
            ))}
          </Box>
        </View>

        <View style={{ alignItems: "center" }}>
          <Title level={3}>With Shadow Box</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {types.map((f) => (
              <Button key={f} onPress={() => onPressShadowBox(f)}>
                {f}
              </Button>
            ))}
          </Box>
        </View>

        <View style={{ alignItems: "center" }}>
          <Title level={3}>Shadow</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {types.map((f) => (
              <Button key={f} onPress={() => onPressShadow(f)}>
                {f}
              </Button>
            ))}
          </Box>
        </View>

        {/* END */}
      </View>
      <View style={{ height: 75 }} />
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

export default MessageScreen;
