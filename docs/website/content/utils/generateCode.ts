import { PACKAGE_NAME } from '@/config';

export function generateCodeWithProvider(
  code: string,
  _imports?: {
    icons?: { key: 'antd', value: 'AntDesign' }[];
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

  const packsIcons =  _imports?.icons;

  // return string
  return `${
    importsNative
      ? `import { ${importsNative.trim()} } from 'react-native';`
      : ''
  }
import { ThemeProvider${
    importsBeauty ? `, ${importsBeauty.trim()}` : ''
  } } from '${PACKAGE_NAME}';

${
  packsIcons
    ? `import { ${packsIcons.map(item => item.value).join(', ').trim()} } from '@expo/vector-icons';

const iconsPack = new Map();

${packsIcons.map(item => `iconsPack.set('${item.key}', ${item.value});`)}
      `
    : ''
}
${code}

export default function App() {
  return (
    <ThemeProvider${packsIcons ? ` packs={iconsPack}` : ''}>
      <RenderApp />
    </ThemeProvider>
  )
}
`;
}

type KeyIcon = 'antd' | 'material-design-icons' | 'ionicons' | 'fontisto' | 'font-awesome-5' | 'feather';
type ValueIcon = 'AntDesign' | 'MaterialIcons' | 'Ionicons' | 'Fontisto' | 'FontAwesome5' | 'Feather';

export function withThemeProvider(
  code: string,
  params?: {
    header?: string;
    hooks?: string;
    footer?: string;
    react?: string | string[];
    native?: string | string[];
    package?: string | string[];
    icons?: { key: KeyIcon, value: ValueIcon }[];
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
  const packsIcons =  params?.icons;

  // return string
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
`}${
    packsIcons
      ? `import { ${packsIcons.map(item => item.value).join(', ').trim()} } from '@expo/vector-icons';

const iconsPack = new Map();

${packsIcons.map(item => `iconsPack.set('${item.key}', ${item.value});`).join('\n')}
` : ''}
export default function App() {
  ${params?.hooks || ''}
  return (
    <ThemeProvider${packsIcons ? ` packs={iconsPack}` : ''}>
      <ScrollView contentContainerSx={{ flex: 1 }}>
        <Container gap={2}>
          ${code}
        </Container>
      </ScrollView>
    </ThemeProvider>
  );
}
${params?.footer || ''}`
}
