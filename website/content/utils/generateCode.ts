import { globalStyles } from './constants';

export default function generateCode(code: string, imports?: string) {
  return `import { View, StyleSheet${imports ? `, ${imports}` : ''} } from 'react-native';
${code}

${globalStyles}
`;
}
