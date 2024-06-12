import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

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
