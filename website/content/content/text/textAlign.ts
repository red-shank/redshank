import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export default generateCode(`import { Text, Title } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Title>Text Align</Title>
      <Text align="left">left text</Text>
      <Text align="center">center text</Text>
      <Text align="right">right text</Text>
      <Text align="justify">justify text</Text>
    </View>
  );
}`);
