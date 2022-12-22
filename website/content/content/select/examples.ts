import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode =
  generateCode(`import { Space, Select } from "${PACKAGE_NAME}";

const items = [
  {
    label: 'One option',
    value: 'one'
  },
  {
    label: 'Two option',
    value: 'two'
  }
]

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Select items={items} />
        <Select items={items} placeholder="Select a element" />
      </Space>
    </View>
  );
}
`);

export const sizes =
  generateCode(`import { Space, Select } from "${PACKAGE_NAME}";

const items = [
  {
    label: 'One option',
    value: 'one'
  },
  {
    label: 'Two option',
    value: 'two'
  }
]

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Select items={items} size="small" placeholder="Small" />
        <Select items={items} size="middle" placeholder="Middle" />
        <Select items={items} size="large" placeholder="Large" />
      </Space>
    </View>
  );
}
`);

export const errors =
  generateCode(`import { Space, Select, Title } from "${PACKAGE_NAME}";

const items = [
  {
    label: 'One option',
    value: 'one'
  },
  {
    label: 'Two option',
    value: 'two'
  }
]

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Select
          error
          items={items}
        />
        <Title level={5}>With message error</Title>
        <Select
          error
          items={items}
          textError="This is required field"
        />
      </Space>
    </View>
  );
}
`);
