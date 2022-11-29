import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { Button, Space } from 'react-native-beauty-design';

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
