import { withThemeProvider } from '@/content/utils/generateCode';
import { Alert, Text } from '@redshank/native';
import React from 'react';

export const defaultCode = withThemeProvider(
  `<Alert
            type="success"
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
            type="info"
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
            type="error"
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
          />`,
  {
    package: ['Space', 'Alert']
  }
);

export const withShadow = withThemeProvider(
  `<Alert
            withBoxShadow
            type="success"
            content="This is an alert"
          />
          <Alert
            withBoxShadow
            type="warning"
            content="This is an alert"
          />
          <Alert
            withBoxShadow
            type="error"
            content="This is an alert"
          />
          <Alert
            withBoxShadow
            type="info"
            content="This is an alert"
          />`,
  {
    package: ['Space', 'Alert']
  }
);

export const closable = withThemeProvider(
  `<Alert
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
        />;
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
        />;
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
        />;
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
        />;`,
  {
    package: ['Space', 'Alert']
  }
);
