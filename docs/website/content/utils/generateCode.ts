import { PACKAGE_NAME } from '@/config';

export function generateCodeWithProvider(
  code: string,
  _imports?: {
    native?: string | string[];
    package?: string | string[];
  }
) {
  const importsNative =
    typeof _imports?.native === 'string'
      ? _imports?.native
      : _imports?.native?.join(', ');
  const importsBeauty =
    typeof _imports?.package === 'string'
      ? _imports?.package
      : _imports?.package?.join(', ');

  return `${
    importsNative
      ? `import { ${importsNative.trim()} } from 'react-native';`
      : ''
  }
import { ThemeProvider${
    importsBeauty ? `, ${importsBeauty.trim()}` : ''
  } } from '${PACKAGE_NAME}';
${code}

export default function App() {
  return (
    <ThemeProvider>
      <RenderApp />
    </ThemeProvider>
  )
}
`;
}

export function withThemeProvider(
  code: string,
  params?: {
    header?: string;
    hooks?: string;
    footer?: string;
    react?: string | string[];
    native?: string | string[];
    package?: string | string[];
  }
) {
  const importsNative =
    typeof params?.native === 'string'
      ? params?.native
      : params?.native?.join(', ');
  const importsReact =
    typeof params?.react === 'string'
      ? params?.react
      : params?.react?.join(', ');
  const importsBeauty =
    typeof params?.package === 'string'
      ? params?.package
      : params?.package?.join(', ');

  return `${
    importsNative
      ? `import { ${importsNative.trim()} } from 'react-native';`
      : ''
  }${
    importsReact
      ? `
import { ${importsReact.trim()} } from 'react';`
      : ''
  }
import { ThemeProvider, Container, ScrollView${
    importsBeauty ? `, ${importsBeauty.trim()}` : ''
  } } from '${PACKAGE_NAME}';
${
  params?.header ||
  `
`
}
export default function App() {
  ${params?.hooks || ''}
  return (
    <ThemeProvider>
      <ScrollView>
        <Container gap={2}>
          ${code}
        </Container>
      </ScrollView>
    </ThemeProvider>
  )
}
${params?.footer || ''}`;
}
