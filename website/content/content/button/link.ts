import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export default generateCode(`import { Button, Space } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space orientation="horizontal">
        <Button type="link">Link 1</Button>
        <Button type="link" color="error">
          Link 2
        </Button>
        <Button type="link" color="secondary">
          Link 3
        </Button>
      </Space>
    </View>
  );
}`);
