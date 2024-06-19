import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Button type="outline">Outline</Button>
          <Button type="outline" bg="error">Outline</Button>
          <Button type="outline" bg="secondary">
            Outline
          </Button>`,
  {
    package: ['Button']
  }
);
