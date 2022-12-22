import generateCode from '@/content/utils/generateCode';

export const defaultCode =
  generateCode(`import { Space, Radio } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Radio.Group>
          <Radio label="Yes" value="yes" />
          <Radio label="No" value="no" />
          <Radio label="Maybe" value="maybe" />
        </Radio.Group>
      </Space>
    </View>
  );
}
`);

export const orientation =
  generateCode(`import { Space, Radio } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Radio.Group align="vertical">
          <Radio label="Yes" value="yes" />
          <Radio label="No" value="no" />
          <Radio label="Maybe" value="maybe" />
        </Radio.Group>
      </Space>
    </View>
  );
}
`);

export const types =
  generateCode(`import { Space, Radio, Title } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <View>
          <Title>Circle</Title>
          <Radio.Group type="circle">
            <Radio label="Yes" value="yes" />
            <Radio label="No" value="no" />
            <Radio label="Maybe" value="maybe" />
          </Radio.Group>
        </View>
        <View>
          <Title>Square</Title>
          <Radio.Group type="square">
            <Radio label="Yes" value="yes" />
            <Radio label="No" value="no" />
            <Radio label="Maybe" value="maybe" />
          </Radio.Group>
        </View>
        <View>
          <Title>Mix</Title>
          <Radio.Group>
            <Radio label="Yes" value="yes" type="circle" />
            <Radio label="No" value="no" type="square"/>
            <Radio label="Maybe" value="maybe" />
          </Radio.Group>
        </View>
      </Space>
    </View>
  );
}
`);

export const sizes =
  generateCode(`import { Space, Radio, Title } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <View>
          <Title>Small</Title>
          <Radio.Group size="small">
            <Radio label="Yes" value="yes" />
            <Radio label="No" value="no" />
            <Radio label="Maybe" value="maybe" />
          </Radio.Group>
        </View>
        <View>
          <Title>Middle</Title>
          <Radio.Group size="middle">
            <Radio label="Yes" value="yes" />
            <Radio label="No" value="no" />
            <Radio label="Maybe" value="maybe" />
          </Radio.Group>
        </View>
        <View>
          <Title>Large</Title>
          <Radio.Group size="large">
            <Radio label="Yes" value="yes" />
            <Radio label="No" value="no" />
            <Radio label="Maybe" value="maybe" />
          </Radio.Group>
        </View>
      </Space>
    </View>
  );
}
`);

export const manualError =
  generateCode(`import { Space, Radio } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Radio.Group error textError="This is a error">
          <Radio label="Yes" value="yes" />
          <Radio label="No" value="no" />
          <Radio label="Maybe" value="maybe" />
        </Radio.Group>
      </Space>
    </View>
  );
}
`);

export const customize =
  generateCode(`import { Space, Radio } from 'react-native-beauty-design';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Radio.Group activeColor="success" inactiveColor="warning" >
          <Radio label="Yes" value="yes" />
          <Radio label="No" value="no" />
          <Radio label="Maybe" value="maybe" />
        </Radio.Group>
      </Space>
    </View>
  );
}
`);
