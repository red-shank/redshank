import { generateCodeWithProvider } from '@/content/utils/generateCode';

export const defaultCode = generateCodeWithProvider(
  `
function RenderApp() {
  return (
    <Box bg="primary">
      <Container
        mb={2}
        bg="card"
      >
        <Text>Container</Text>
      </Container>
    </Box>
  );
}`,
  {
    package: ['Container', 'Box', 'Text']
  }
);

export const size = generateCodeWithProvider(
  `import { useState } from 'react';

function RenderApp() {
  // xs, sm, md, lg, xl
  const [size, setSize] = useState('sm');

  return (
    <Box bg="primary">
      <Container
        mb={2}
        bg="card"
        size={size}
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
    </Box>
  );
}`,
  {
    package: ['Container', 'Select', 'Box']
  }
);
