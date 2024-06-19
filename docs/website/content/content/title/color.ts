import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Title level={3}>Default. Beauty Design</Title>
          <Title level={3} color="primary">
            Primary. Beauty Design
          </Title>
          <Title level={3} color="secondary">
            Secondary. Beauty Design
          </Title>
          <Title level={3} color="warning">
            Warning. Beauty Design
          </Title>
          <Title level={3} color="error">
            Error. Beauty Design
          </Title>`,
  {
    package: ['Title']
  }
);
