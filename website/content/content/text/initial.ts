import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Text } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquam consequuntur in minus mollitia
      </Text>
    </View>
  );
}`);
