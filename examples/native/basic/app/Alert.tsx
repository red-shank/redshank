import React from 'react';
import { Title, ScrollView, Alert, Box } from '@redshank/native';

const AlertScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box p={2} gap={5}>
        <Box>
          <Title level={3}>Alert</Title>
          <Box gap={3}>
            <Alert type="success" message="This is an alert" />
            <Alert type="warning" message="This is an alert" />
            <Alert type="error" message="This is an alert" />
            <Alert type="info" message="This is an alert" />
          </Box>
        </Box>

        <Box>
          <Title level={3}>With shadow</Title>
          <Box gap={3}>
            <Alert type="success" message="This is an alert" shadow />
            <Alert type="warning" message="This is an alert" shadow />
            <Alert type="error" message="This is an alert" shadow />
            <Alert type="info" message="This is an alert" shadow />
          </Box>
        </Box>

        <Box>
          <Title level={3}>Alert closable</Title>
          <Box gap={3}>
            <Alert
              type="success"
              message="This is an alert This is an alert This is an alert This is an alert This is an alert This is an alert"
              closable
            />
            <Alert type="warning" message="This is an alert" closable />
            <Alert type="error" message="This is an alert" closable />
            <Alert type="info" message="This is an alert" closable />
          </Box>
        </Box>
        {/* END */}
      </Box>
      <Box height={75} />
    </ScrollView>
  );
};

export default AlertScreen;
