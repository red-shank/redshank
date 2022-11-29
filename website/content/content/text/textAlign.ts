import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Text, Title } from 'react-native-beauty-design';

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
