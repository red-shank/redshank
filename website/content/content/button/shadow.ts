import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export default generateCode(`import { Button } from "${PACKAGE_NAME}";

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
