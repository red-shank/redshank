import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Title align={align} level={3} transformText="capitalize">
            {align}
          </Title>

          <Box gap={1} mt={2}>
            <Button onPress={onChangeAlign('left')}>Left</Button>
            <Button onPress={onChangeAlign('center')}>Center</Button>
            <Button onPress={onChangeAlign('right')}>Right</Button>
          </Box>`,
  {
    hooks: `const [align, setAlign] = useState('left');

  const onChangeAlign = (align) => {
    return () => setAlign(align)
  }
  `,
    react: ['useState'],
    package: ['Box', 'Title', 'Button']
  }
);
