import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Button shape="round">Round</Button>
          <Button shape="circle">Circle</Button>`,
  {
    package: ['Button']
  }
);
