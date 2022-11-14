export default `import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-beauty-design';

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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})`;
