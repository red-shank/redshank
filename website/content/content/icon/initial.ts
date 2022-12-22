import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export default generateCode(`import { Icon } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Icon type="antdesign" name="like1" />
      <Icon type="antdesign" name="gift" size={50} />
      <Icon
        size={50}
        color="error"
        type="antdesign"
        name="heart"
        onPress={() => alert("Press here!")}
      />
    </View>
  );
}`);
