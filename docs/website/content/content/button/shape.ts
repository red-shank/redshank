import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export default generateCode(`import { Button, Space } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <View style={styles.center}>
      <Space orientation="vertical">
        <Button fullWidth>Round</Button>
        <Button fullWidth shape="circle">Circle</Button>
      </Space>
    </View>
  );
}`);
