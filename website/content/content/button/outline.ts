import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Button, Space } from 'react-native-beauty-design';

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
