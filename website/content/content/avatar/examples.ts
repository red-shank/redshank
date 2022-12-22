import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const text =
  generateCode(`import { Avatar } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Avatar text="Kevin Rivas" />
    </View>
  );
}`);

export const colorAndSize =
  generateCode(`import { Avatar } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Avatar
        size={80}
        textColor="white"
        color="secondary"
        text="Beauty Design"
      />
    </View>
  );
}`);

export const type =
  generateCode(`import { Avatar, Space } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Avatar type="square" text="Kevin Rivas" />
        <Avatar type="circle" text="Kevin Rivas" />
      </Space>
    </View>
  );
}`);

export const image =
  generateCode(`import { Avatar, Space } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Avatar
          size={65}
          src="https://i.imgur.com/bnip2HZ.png"
        />
        <Avatar
          size={65}
          type="square"
          src="https://i.imgur.com/bnip2HZ.png"
        />
        <Avatar
          size={65}
          type="circle"
          src="https://i.imgur.com/bnip2HZ.png"
        />
      </Space>
    </View>
  );
}`);

export const countText =
  generateCode(`import { Avatar, Space } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Avatar
          size={65}
          showCountText={1}
          text="Beauty Design"
        />
        <Avatar
          size={65}
          showCountText={2}
          text="Beauty Design"
        />
        <Avatar
          size={65}
          showCountText={5}
          text="Beauty Design"
        />
        <Avatar
          size={65}
          showCountText="all"
          text="Beauty"
        />
      </Space>
    </View>
  );
}`);

export const pressable =
  generateCode(`import { Avatar } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Avatar
        size={65}
        onPress={() => alert("On press here!")}
        src="https://www.beauty-design.app/brand.svg"
      />
    </View>
  );
}`);

export const icons =
  generateCode(`import { Avatar, Space } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Avatar
          icon={{
            name: 'user',
            type: 'antdesign',
          }}
        />
        <Avatar
          size={50}
          icon={{
            size: 30,
            type: 'fontisto',
            name: 'user-secret',
          }}
        />
        <Avatar
          size={65}
          icon={{
            size: 35,
            name: 'user',
            type: 'font-awesome-5',
          }}
        />
      </Space>
    </View>
  );
}`);
