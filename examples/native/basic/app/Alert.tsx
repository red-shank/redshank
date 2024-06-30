import React from 'react';
import {
  Title,
  ScrollView,
  Alert,
  Box,
  Container,
  Text
} from '@redshank/native';

const AlertScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container gap={4}>
        <Box>
          <Title level={3}>Alert</Title>
          <Box gap={3}>
            <Alert type="success" content="This is an alert" />
            <Alert type="warning" content="This is an alert" />
            <Alert type="error" content="This is an alert" />
            <Alert type="info" content="This is an alert" />
          </Box>
        </Box>

        <Box>
          <Title level={3}>With shadow</Title>
          <Box gap={3}>
            <Alert type="success" content="This is an alert" withBoxShadow />
            <Alert type="warning" content="This is an alert" withBoxShadow />
            <Alert type="error" content="This is an alert" withBoxShadow />
            <Alert type="info" content="This is an alert" withBoxShadow />
          </Box>
        </Box>

        <Box>
          <Title level={3}>Alert closable</Title>
          <Box gap={3}>
            <Alert
              type="success"
              withInternalClose
              content={{
                title: (
                  <Text bold size="md">
                    This is a title
                  </Text>
                ),
                description: (
                  <Text color="gray300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  </Text>
                )
              }}
            />
            <Alert
              type="warning"
              withInternalClose
              content={{
                title: (
                  <Text bold size="md">
                    This is a title
                  </Text>
                ),
                description: (
                  <Text color="gray300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Text>
                )
              }}
            />
            <Alert
              type="error"
              withInternalClose
              content={{
                title: (
                  <Text bold size="md">
                    This is a title
                  </Text>
                ),
                description: (
                  <Text color="gray300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facilis, iure minima minus modi nostrum officiis quae
                    sapiente ut vel. Ab aspernatur distinctio eos in numquam
                    obcaecati officia recusandae veniam voluptates.
                  </Text>
                )
              }}
            />
            <Alert
              type="info"
              withInternalClose
              content={{
                title: (
                  <Text bold size="md">
                    This is a title
                  </Text>
                ),
                description: (
                  <Text color="gray300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio esse, laborum nihil non reprehenderit ullam?.
                  </Text>
                )
              }}
            />
          </Box>
        </Box>
        {/* END */}
      </Container>
      <Box height={75} />
    </ScrollView>
  );
};

export default AlertScreen;
