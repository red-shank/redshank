import { generateCodeWithProvider } from '@/content/utils/generateCode';

export const defaultCode = generateCodeWithProvider(
  `
function RenderApp() {
  return (
    <Container
      mb={2}
      flex={1}
      sx={{
        container: {
          bg: "card"
        },
        root: {
          bg: "primary"
        }
      }}>
      <Text>Container</Text>
    </Container>
  )
}`,
  {
    package: ['Container', 'Text']
  }
);

export const size = generateCodeWithProvider(
  `import { useState } from 'react';

function RenderApp() {
  // xs, sm, md, lg, xl
  const [size, setSize] = useState('sm');

  return (
    <Container
      size={size}
      mb={2}
      flex={1}
      sx={{
        container: {
          bg: "card"
        },
        root: {
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
  );
}`,
  {
    package: ['Container', 'Select']
  }
);
