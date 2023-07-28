import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export default generateCode(`import { SocialButton, Space } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <SocialButton provider="google" />
        <SocialButton provider="facebook" />
        <SocialButton provider="twitter" />
        <SocialButton provider="apple" />
      </Space>
    </View>
  );
}`);
