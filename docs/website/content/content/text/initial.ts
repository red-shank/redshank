import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquam consequuntur in minus mollitia
          </Text>`,
  {
    package: ['Text']
  }
);
