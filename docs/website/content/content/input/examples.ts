import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(
  `<Input />
          <Input placeholder="First name" />`,
  {
    package: ['Input']
  }
);

export const sizes = withThemeProvider(
  `<Input placeholder="Small input" size="small" />
          <Input placeholder="Middle input" size="middle" />
          <Input placeholder="Large input" size="large" />`,
  {
    package: ['Input']
  }
);

export const prefixSuffix = withThemeProvider(
  `<Input
            placeholder="Email or username"
            prefix={<Icon name="mail" type="antdesign" />}
          />
          <Input type="password" placeholder="Insert password" />
          <Input
            placeholder="Prefix and Suffix"
            prefix={<Icon name="lock" type="antdesign" />}
            suffix={<Icon name="mail" type="antdesign" />}
          />`,
  {
    package: ['Input', 'Icon']
  }
);

export const errors = withThemeProvider(
  `<Input
              error
              placeholder="Placeholder color Primary"
            />
            <Box>
              <Title level={5}>With message error</Title>
              <Input
                error
                textError="This is required field"
                placeholder="Placeholder color Primary"
              />
            </Box>`,
  {
    package: ['Input', 'Box', 'Title']
  }
);

export const number = withThemeProvider(
  `<Input type="numeric" placeholder="Insert only numbers" />
          <Input
            error
            type="numeric"
            textError="This is required field"
            placeholder="Insert only numbers"
          />`,
  { package: ['Input'] }
);

export const textArea = withThemeProvider(
  `<Input.TextArea placeholder="Textarea placeholder" />`,
  { package: ['Input'] }
);
