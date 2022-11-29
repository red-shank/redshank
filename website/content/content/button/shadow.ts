import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Button } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Button
        shadow
        fullWidth
        type="solid"
        withBorderBottom
      >
        Solid
      </Button>
      <Button
        shadow
        fullWidth
        type="flat"
        color="error"
        withBorderBottom
      >
        Flat
      </Button>
      <Button
        shadow
        fullWidth
        type="flat"
        color="secondary"
      >
        Flat
      </Button>
    </View>
  );
}`);
