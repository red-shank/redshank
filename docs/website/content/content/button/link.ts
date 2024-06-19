import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Button type="link">Link 1</Button>
          <Button type="link" bg="error">
            Link 2
          </Button>
          <Button type="link" bg="secondary">
            Link 3
          </Button>`,
  {
    package: ['Button']
  }
);
