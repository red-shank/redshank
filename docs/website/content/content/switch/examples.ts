import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode =
  generateCode(`import { Space, Switch } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Switch />
      </Space>
    </View>
  );
}
`);

export const sizes =
  generateCode(`import { Space, Switch } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Switch size="small" />
        <Switch size="middle" />
        <Switch size="large" />
      </Space>
    </View>
  );
}
`);

export const bordered =
  generateCode(`import { Space, Switch } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Switch bordered />
        <Switch bordered borderColor="warning" />
      </Space>
    </View>
  );
}
`);

export const withIcon =
  generateCode(`import { Space, Switch, Icon } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Switch
          icon={{
            false: <Icon name="sunny" type="ionicon" color="white" />,
            true: <Icon name="moon" type="ionicon" color="white" />,
          }}
        />
        <Switch
          thumbActiveColor="error"
          icon={{
            false: (
              <Icon name="microphone" type="font-awesome-5" color="error" />
            ),
            true: <Icon name="microphone-slash" type="font-awesome-5" />,
          }}
        />
      </Space>
    </View>
  );
}
`);

export const variants =
  generateCode(`import { Space, Switch } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Switch size="small" type="square" />
        <Switch type="square" />
        <Switch size="large" type="square" />
      </Space>
    </View>
  );
}
`);

export const errorVariant =
  generateCode(`import { Space, Switch } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Switch error />
        <Switch error textError="This is a error" />
      </Space>
    </View>
  );
}
`);
