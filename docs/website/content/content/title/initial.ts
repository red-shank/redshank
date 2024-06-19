import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Title level={1}>Level 1. Beauty Design</Title>
          <Title level={2}>Level 2. Beauty Design</Title>
          <Title level={3}>Level 3. Beauty Design</Title>
          <Title level={4}>Level 4. Beauty Design</Title>
          <Title level={5}>Level 5. Beauty Design</Title>`,
  {
    package: ['Title']
  }
);
