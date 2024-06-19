import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Title>Utilities text</Title>
          {/*Color*/}
          <Text color="warning">warning text</Text>
          <Text color="error">error text</Text>
          <Text color="#68B319">custom color</Text>

          {/*Font Size*/}
          <Text size={9}>
            Lorem ipsum dolor
          </Text>
          <Text size={14}>
            Lorem ipsum dolor
          </Text>
          <Text size={25}>
            Lorem ipsum dolor
          </Text>

          {/*Uppercase, Lowercase, Capitalize*/}
          <Text transformText="uppercase">
            uppercase
          </Text>
          <Text transformText="lowercase">
            LOWERCASE
          </Text>
          <Text transformText="capitalize">
            capitalize
          </Text>

          {/*Underline, Italic, Justify and bold*/}
          <Text underline>
            Lorem ipsum dolor
          </Text>
          <Text italic>
            Lorem ipsum dolor
          </Text>
          <Text bold>
            Lorem ipsum dolor sit amet
          </Text>`,
  {
    package: ['Text', 'Title']
  }
);
