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
