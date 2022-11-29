import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Button } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Button withMarginBottom>Hi!</Button>
      <Button fullWidth>Hello Word!</Button>
    </View>
  );
}`);
