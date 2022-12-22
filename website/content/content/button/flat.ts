import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export default generateCode(`import { Button, Space } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space orientation="vertical">
        <Button type="flat">Flat</Button>
        <Button type="flat" color="error">Flat</Button>
        <Button
          fullWidth
          type="flat"
          color="secondary"
        >
          Flat
        </Button>
      </Space>
    </View>
  );
}`);
