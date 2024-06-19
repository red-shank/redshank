import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(
  `<Alert type="success" message="Alert message" />
          <Alert type="warning" message="Alert message" />
          <Alert type="info" message="Alert message" />
          <Alert type="error" message="Alert message" />`,
  {
    package: ['Space', 'Alert']
  }
);

export const withShadow = withThemeProvider(
  `<Alert
            shadow
            type="success"
            message="This is an alert"
          />
          <Alert
            shadow
            type="warning"
            message="This is an alert"
          />
          <Alert
            shadow
            type="error"
            message="This is an alert"
          />
          <Alert
            shadow
            type="info"
            message="This is an alert"
          />`,
  {
    package: ['Space', 'Alert']
  }
);

export const closable = withThemeProvider(
  `<Alert
            closable
            type="success"
            message="This is an alert"
          />
          <Alert
            closable
            type="warning"
            message="This is an alert"
          />
          <Alert
            closable
            type="error"
            message="This is an alert"
          />
          <Alert
            closable
            type="info"
            message="This is an alert"
          />`,
  {
    package: ['Space', 'Alert']
  }
);
