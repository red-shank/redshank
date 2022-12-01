import generateCode from '@/content/utils/generateCode';

export const defaultCode =
  generateCode(`import { Badge, Space } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Badge content="DEFAULT" />
        <Badge content="999+" background="error" />
      </Space>
    </View>
  );
}`);

export const sizes =
  generateCode(`import { Badge, Space } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Badge content="Large" size="large" />
        <Badge content="Middle" />
        <Badge content="Small" size="small" />
      </Space>
    </View>
  );
}`);

export const dotVariants =
  generateCode(`import { Badge, Space, Text } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Text>
          <Badge variant="dot" /> Default
        </Text>
        <Text>
          <Badge variant="dot" background="primary" /> Primary
        </Text>
        <Text>
          <Badge variant="dot" background="success" /> Success
        </Text>
      </Space>
    </View>
  );
}`);

export const bordered =
  generateCode(`import { Badge, Space } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Badge content="Default" variant="bordered" />
        <Badge
          content="Primary"
          variant="bordered"
          background="primary"
        />
        <Badge
          variant="bordered"
          content="Secondary"
          background="secondary"
        />
      </Space>
    </View>
  );
}`);

export const flatAndPressable =
  generateCode(`import { Badge, Space } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Badge isPressable content="Default" variant="flat" />
        <Badge
          isPressable
          content="Primary"
          background="primary"
          variant="flat"
        />
        <Badge
          isPressable
          variant="flat"
          content="Secondary"
          background="secondary"
        />
      </Space>
    </View>
  );
}`);

export const square =
  generateCode(`import { Badge, Space } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Badge content="999+" background="error" type="square" />
        <Badge content="PRIMARY" background="primary" type="square" />
      </Space>
    </View>
  );
}`);

export const solidBordered =
  generateCode(`import { Badge, Space } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Badge variant="dot" disableOutline={false} />
        <Badge
          content="999+"
          background="error"
          disableOutline={false}
        />
        <Badge
          content="PRIMARY"
          background="primary"
          disableOutline={false}
        />
      </Space>
    </View>
  );
}`);

export const withChildren =
  generateCode(`import { Badge, Space, Avatar } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Badge content="999+" background="error">
          <Avatar text="Hello World" />
        </Badge>
        <Badge variant="dot" background="error">
          <Avatar text="Hello World" />
        </Badge>
      </Space>
    </View>
  );
}`);

export const placement =
  generateCode(`import { Badge, Space, Avatar } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Badge content="999+" background="error">
          <Avatar text="Hello World" />
        </Badge>

        <Badge
          content="999+"
          background="error"
          placement="bottom-right"
        >
          <Avatar text="Hello World" />
        </Badge>

        <Badge
          content="999+"
          background="error"
          placement="top-left"
        >
          <Avatar text="Hello World" />
        </Badge>

        <Badge
          content="999+"
          background="error"
          placement="bottom-left"
        >
          <Avatar text="Hello World" />
        </Badge>
      </Space>
      <Space>
        <Badge
          variant="dot"
          background="error"
          size="small"
        >
          <Avatar text="Hello World" />
        </Badge>

        <Badge
          variant="dot"
          background="success"
          placement="bottom-right"
          size="middle"
        >
          <Avatar text="Hello World" />
        </Badge>

        <Badge
          variant="dot"
          background="error"
          placement="top-left"
        >
          <Avatar text="Hello World" />
        </Badge>

        <Badge
          variant="dot"
          background="error"
          placement="bottom-left"
          size="large"
        >
          <Avatar text="Hello World" />
        </Badge>
      </Space>
    </View>
  );
}`);

export const enableShadow =
  generateCode(`import { Badge, Space } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Badge content="With Shadow" enableShadow />
        <Badge content="999+" background="error" enableShadow />
      </Space>
    </View>
  );
}`);

export const withToggle =
  generateCode(`import { useState } from 'react';
import { Badge, Icon, Text } from 'react-native-beauty-design';

export default function App() {
  const [visibleBadge, setVisibleBadge] = useState(true);

  return (
    <View style={styles.center}>
      <Badge
        content="99+"
        background="error"
        isInvisible={visibleBadge}
        size="middle"
      >
        <TouchableOpacity
          onPress={() => setVisibleBadge((prev) => !prev)}
        >
          <Icon
            size={40}
            type="feather"
            name="shopping-cart"
          />
        </TouchableOpacity>
      </Badge>
      <Text size={12}>Press icon of shopping car</Text>
    </View>
  );
}`, 'TouchableOpacity');
