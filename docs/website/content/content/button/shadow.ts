import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Button shadow type="solid">
          Solid
        </Button>
        <Button shadow type="flat" bg="error">
          Flat
        </Button>
        <Button shadow type="flat" bg="secondary">
          Flat
        </Button>`,
  {
    package: ['Button']
  }
);
