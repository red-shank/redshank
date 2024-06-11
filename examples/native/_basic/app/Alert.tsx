import React from "react";
import { StyleSheet } from "react-native";
import { Title, ScrollView, Space, Alert, Box } from "@redshank/native";

const AlertScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box p={2}>
        <Box>
          <Title level={3}>Alert</Title>
          <Box gap={2}>
            <Alert type="success" message="This is an alert" />
            <Alert type="warning" message="This is an alert" />
            <Alert type="error" message="This is an alert" />
            <Alert type="info" message="This is an alert" />
          </Box>
        </Box>

        <Box>
          <Title level={3}>With shadow</Title>
          <Space orientation="vertical">
            <Alert type="success" message="This is an alert" shadow />
            <Alert type="warning" message="This is an alert" shadow />
            <Alert type="error" message="This is an alert" shadow />
            <Alert type="info" message="This is an alert" shadow />
          </Space>
        </Box>

        <Box>
          <Title level={3}>Alert closable</Title>
          <Space orientation="vertical">
            <Alert
              type="success"
              message="This is an alert This is an alert This is an alert This is an alert This is an alert This is an alert"
              closable
            />
            <Alert type="warning" message="This is an alert" closable />
            <Alert type="error" message="This is an alert" closable />
            <Alert type="info" message="This is an alert" closable />
          </Space>
        </Box>
        {/* END */}
      </Box>
      <Box height={75} />
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

export default AlertScreen;
