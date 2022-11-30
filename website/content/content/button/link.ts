import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Button, Space } from 'react-native-beauty-design';

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