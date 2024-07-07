import { withThemeProvider } from '@/content/utils/generateCode';

const header = `
const items = [
  {
    label: 'One option',
    value: 'one'
  },
  {
    label: 'Two option',
    value: 'two'
  }
]
`;

export const defaultCode = withThemeProvider(
  `<Select items={items} />
          <Select items={items} placeholder="Select a element" />`,
  {
    header,
    package: ['Select']
  }
);

export const sizes = withThemeProvider(
  `<Select items={items} size="small" placeholder="Small" />
          <Select items={items} size="middle" placeholder="Middle" />
          <Select items={items} size="large" placeholder="Large" />`,
  {
    header,
    package: ['Select']
  }
);

export const errors = withThemeProvider(
  `<Select
            error
            items={items}
          />
          <Box>
            <Title level={5}>With message error</Title>
            <Select
              error
              items={items}
              helperText="This is required field"
            />
          </Box>`,
  {
    header,
    package: ['Select', 'Box', 'Title']
  }
);
