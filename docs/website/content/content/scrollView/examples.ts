import { PACKAGE_NAME } from '@/config';

export const defaultCode = `import { ScrollView, ThemeProvider, Box, Text } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <ThemeProvider>
      <ScrollView
        sx={{ bg: 'card' }}
        contentContainerSx={{ p: 2 }}
      >
        <Box>
          <Text>Hello</Text>
        </Box>
        <Box height={750} />
      </ScrollView>
    </ThemeProvider>
  )
}`;
