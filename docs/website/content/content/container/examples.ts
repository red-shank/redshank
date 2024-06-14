import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode = generateCode(
  `import { Container, Text } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <Container
      mb={2}
      flex={1}
      sx={{
        container: {
          bg: "primary"
        }
      }}>
      <Text>Container</Text>
    </Container>
  );
}`,
  [],
  { withStyles: false }
);


export const size = generateCode(
  `import { Container, Select, ThemeProvider } from "${PACKAGE_NAME}";
import { useState } from 'react';

export default function App() {
  // xs, sm, md, lg, xl
  const [size, setSize] = useState('sm');

  return (
    <ThemeProvider>
      <Container
        size={size}
        mb={2}
        flex={1}
        sx={{
          container: {
            bg: "primary"
          }
        }}
      >
          <Select
            mt={1}
            value={size}
            onChange={setSize}
            items={[
              { label: "xs", value: "xs" },
              { label: "sm", value: "sm" },
              { label: "md", value: "md" },
              { label: "lg", value: "lg" },
              { label: "xl", value: "xl" }
            ]}
          />
      </Container>
    </ThemeProvider>
  );
}`,
  [],
  { withStyles: false }
);
