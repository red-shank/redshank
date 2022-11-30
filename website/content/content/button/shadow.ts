import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Button } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Button
        shadow
        fullWidth
        type="solid"
        withMarginBottom
      >
        Solid
      </Button>
      <Button
        shadow
        fullWidth
        type="flat"
        color="error"
        withMarginBottom
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
