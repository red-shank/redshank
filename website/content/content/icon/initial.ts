import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Icon } from 'react-native-beauty-design';

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
