import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode =
  generateCode(`import { Image } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <View style={styles.center}>
      <Image
        height={200}
        source="https://images.pexels.com/photos/5658529/pexels-photo-5658529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </View>
  );
}`);

export const resizeMode =
  generateCode(`import { Image, Space } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <View style={styles.center}>
      <Space orientation="vertical">
        <Image
          height={200}
          resizeMode="cover"
          source="https://images.pexels.com/photos/5658529/pexels-photo-5658529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <Image
          height={200}
          resizeMode="contain"
          source="https://images.pexels.com/photos/5658529/pexels-photo-5658529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <Image
          height={200}
          resizeMode="contain"
          source="https://images.pexels.com/photos/5658529/pexels-photo-5658529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <Image
          height={200}
          resizeMode="repeat"
          source="https://images.pexels.com/photos/5658529/pexels-photo-5658529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <Image
          height={200}
          resizeMode="center"
          source="https://images.pexels.com/photos/5658529/pexels-photo-5658529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Space>
    </View>
  );
}`);

