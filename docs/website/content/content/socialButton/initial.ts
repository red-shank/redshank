import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<SocialButton provider="google" />
          <SocialButton provider="facebook" />
          <SocialButton provider="twitter" />
          <SocialButton provider="apple" />`,
  {
    package: ['SocialButton']
  }
);
