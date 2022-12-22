import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Title } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Title level={3}>Default. Beauty Design</Title>
      <Title level={3} color="primary">
        Primary. Beauty Design
      </Title>
      <Title level={3} color="secondary">
        Secondary. Beauty Design
      </Title>
      <Title level={3} color="warning">
        Warning. Beauty Design
      </Title>
      <Title level={3} color="error">
        Error. Beauty Design
      </Title>
    </View>
  );
}`);
