import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Title transform="none" level={3}>
            beauty design
          </Title>
          <Title transform="capitalize" level={3}>
            beauty design
          </Title>
          <Title transform="lowercase" level={3}>
            BEAUTY DESIGN
          </Title>
          <Title transform="uppercase" level={3}>
            beauty design
          </Title>`,
  {
    package: ['Title']
  }
);
