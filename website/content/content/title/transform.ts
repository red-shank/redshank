import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Title } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Title transform="none" level={3}>
        beauty design
      </Title>
      <Title transform="capitalize" level={3}>
        beauty design
      </Title>
      <Title transform="lowercase" level={3}>
        BEAUTY DESIGN
      </Title>
      <Title transform="uppercase" level={3}>
        beauty design
      </Title>
    </View>
  );
}`);
