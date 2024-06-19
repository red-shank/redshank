import { PACKAGE_NAME } from '@/config';

export const BASIC_EXAMPLE = `import { Box, Text, ThemeProvider, Title } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <ThemeProvider>
      <Box
        p={2}
        m={1}
        gap={1}
        borderRadius={1}
        background="card"
      >
          <Text>Sessions</Text>
          <Title level={3}>98.3 K</Title>

          <Text size="xs">
            <Text
              bold
              size="xs"
              color="success"
            >
             +18.77%
            </Text> vs. last week
          </Text>
      </Box>
    </ThemeProvider>
  );
}`;

export const BORDER_BASIC = `<Box sx={{ borderWidth: 1, borderColor: "primary" }} />
// equivalent to border: '1px solid #0070F3'
`;

export const BORDER_RADIUS_BASIC = `<Box sx={{ borderRadius: 1 }} />
// equivalent to border radius: '8'
`;

export const GRID_BASIC = `<Box sx={{ gap: 2 }} />
// equivalent to gap: 18
`;

export const COLOR_BASIC = `<Text sx={{ color: 'secondary' }} />
// equivalent to color: theme.secondary
`;

export const BACKGROUND_COLOR_BASIC = `<Box sx={{ bg: 'gray500' }} />
// equivalent to color: theme.grey500
`;

export const SPACING_BASIC = `<Box sx={{ m: 2 }} />
// equivalent to marginVertical and marginHorizontal: 16
`;

export const SX_BASIC = `<Box p={1} bg="card" borderRadius={1} />

// equivalent to: <Box sx={{ p: 1, bg: 'card', borderRadius: 1 }} />
// equivalent to: <View style={{ paddingVertical: 8, paddingHorizontal: 8, backgroundColor: '#222222', borderRadius: 8 }} />
`;

export const SX_AND_STYLE = `<Box p={1} style={{ alignItems: "center" }} />`;

export const SX_OVERRIDE = `<Box p={1} sx={{ p: 2, alignItems: "left" }} style={{ alignItems: "center" }} />
// equivalent to: <View style={{ padding: 16, alignItems: 'center' }} />
`;
