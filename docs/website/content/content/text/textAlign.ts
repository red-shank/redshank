import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Title>Text Align</Title>
          <Text align="left">left text</Text>
          <Text align="center">center text</Text>
          <Text align="right">right text</Text>
          <Text align="justify">justify text</Text>`,
  {
    package: ['Text', 'Title']
  }
);
