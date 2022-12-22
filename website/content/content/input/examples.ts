import generateCode from '@/content/utils/generateCode';

export const defaultCode =
  generateCode(`import { Space, Input } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Input />
        <Input placeholder="First name" />
      </Space>
    </View>
  );
}
`);

export const sizes =
  generateCode(`import { Space, Input } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Input placeholder="Small input" size="small" />
        <Input placeholder="Middle input" size="middle" />
        <Input placeholder="Large input" size="large" />
      </Space>
    </View>
  );
}
`);

export const prefixSuffix =
  generateCode(`import { Space, Input, Icon } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Input
          placeholder="Email or username"
          prefix={<Icon name="mail" type="antdesign" />}
        />
        <Input type="password" placeholder="Insert password" />
        <Input
          placeholder="Prefix and Suffix"
          prefix={<Icon name="lock" type="antdesign" />}
          suffix={<Icon name="mail" type="antdesign" />}
        />
      </Space>
    </View>
  );
}
`);

export const errors =
  generateCode(`import { Space, Input, Title } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Input
          error
          placeholder="Placeholder color Primary"
        />
        <Title level={5}>With message error</Title>
        <Input
          error
          textError="This is required field"
          placeholder="Placeholder color Primary"
        />
      </Space>
    </View>
  );
}
`);

export const number =
  generateCode(`import { Space, Input } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Input type="numeric" placeholder="Insert only numbers" />
        <Input
          error
          type="numeric"
          textError="This is required field"
          placeholder="Insert only numbers"
        />
      </Space>
    </View>
  );
}
`);

export const textArea =
  generateCode(`import { Space, Input } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Input.TextArea placeholder="Textarea placeholder" />
      </Space>
    </View>
  );
}
`);
