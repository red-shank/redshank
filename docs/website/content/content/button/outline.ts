import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export default generateCode(`import { Button, Space } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space orientation="vertical">
        <Button type="outline">Outline</Button>
        <Button type="outline" color="error">Outline</Button>
        <Button
          fullWidth
          type="outline"
          color="secondary"
        >
          Outline
        </Button>
      </Space>
    </View>
  );
}`);
