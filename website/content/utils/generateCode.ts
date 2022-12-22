import { globalStyles } from './constants';

export default function generateCode(
  code: string,
  _imports?: string | string[]
) {
  const imports =
    typeof _imports === 'string' ? _imports : _imports?.join(', ');

  return `import { View, StyleSheet${
    imports ? `, ${imports.trim()}` : ''
  } } from 'react-native';
${code}

${globalStyles}
`;
}

export function generateCodeWithProvider(
  code: string,
  _imports?: {
    native?: string | string[];
    beauty?: string | string[];
  },
) {
  const importsNative =
    typeof _imports?.native === 'string' ? _imports?.native : _imports?.native?.join(', ');
  const importsBeauty =
    typeof _imports?.beauty === 'string' ? _imports?.beauty : _imports?.beauty?.join(', ');

  return `import { View, StyleSheet${
    importsNative ? `, ${importsNative.trim()}` : ''
  } } from 'react-native';
import { ThemeProvider${
    importsBeauty ? `, ${importsBeauty.trim()}` : ''
  } } from 'react-native-beauty-design';
${code}

export default function Main() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

${globalStyles}
`;
}
