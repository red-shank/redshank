import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Button type="flat">Flat</Button>
          <Button type="flat" bg="error">Flat</Button>
          <Button type="flat" bg="secondary">
            Flat
          </Button>`,
  {
    package: ['Button', 'Box']
  }
);
