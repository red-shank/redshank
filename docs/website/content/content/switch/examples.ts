import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(`<Switch />`, {
  package: 'Switch'
});

export const sizes = withThemeProvider(
  `<Switch size="small" />
          <Switch size="middle" />
          <Switch size="large" />`,
  { package: 'Switch' }
);

export const bordered = withThemeProvider(
  `<Switch bordered />
          <Switch bordered borderColor="warning" />`,
  { package: 'Switch' }
);

export const withIcon = withThemeProvider(
  `<Switch
            icon={{
              false: <Icon name="sunny" type="ionicon" color="white" />,
              true: <Icon name="moon" type="ionicon" color="white" />,
            }}
          />
          <Switch
            thumbActiveColor="error"
            icon={{
              false: (
                <Icon name="microphone" type="font-awesome-5" color="error" />
              ),
              true: <Icon name="microphone-slash" type="font-awesome-5" />,
            }}
          />`,
  {
    package: ['Switch', 'Icon']
  }
);

export const variants = withThemeProvider(
  `<Switch size="small" type="square" />
          <Switch type="square" />
          <Switch size="large" type="square" />`,
  {
    package: ['Switch']
  }
);

export const errorVariant = withThemeProvider(
  `<Switch error />
          <Switch error textError="This is a error" />`,
  {
    package: ['Switch']
  }
);
