import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(
  `<Alert
            type="success"
            content={{
                title: <Text bold size="md">This is a title</Text>,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab'
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
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab'
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
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab'
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
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab'
                )
            }}
          />`,
  {
    package: ['Space', 'Alert', 'Text']
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
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
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
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
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
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, iure minima minus modi nostrum officiis quae sapiente ut vel. Ab aspernatur distinctio eos in numquam obcaecati officia recusandae veniam voluptates.'
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
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio esse, laborum nihil non reprehenderit ullam?.'
            )
          }}
        />;`,
  {
    package: ['Space', 'Alert', 'Text']
  }
);
