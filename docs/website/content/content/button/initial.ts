import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Button>Hi!</Button>
          <Button bg="red500">Hello Word!</Button>
          <Button bg="secondary">
              This is a Button!
          </Button>`,
  {
    package: ['Button']
  }
);
