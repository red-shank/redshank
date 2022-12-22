import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Text } from '${PACKAGE_NAME}';

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
