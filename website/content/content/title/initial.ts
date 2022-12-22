import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export default generateCode(`import { Title } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Title level={1}>Level 1. Beauty Design</Title>
      <Title level={2}>Level 2. Beauty Design</Title>
      <Title level={3}>Level 3. Beauty Design</Title>
      <Title level={4}>Level 4. Beauty Design</Title>
      <Title level={5}>Level 5. Beauty Design</Title>
    </View>
  );
}`);
