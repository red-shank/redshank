import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode =
  generateCode(`import { Space, Alert } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <View style={styles.center}>
      <Space orientation="vertical">
        <Alert type="success" message="Alert message" />
        <Alert type="warning" message="Alert message" />
        <Alert type="info" message="Alert message" />
        <Alert type="error" message="Alert message" />
      </Space>
    </View>
  );
}`);

export const withShadow =
  generateCode(`import { Space, Alert } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space orientation="vertical">
        <Alert
          shadow
          type="success"
          message="This is an alert"
        />
        <Alert
          shadow
          type="warning"
          message="This is an alert"
        />
        <Alert
          shadow
          type="error"
          message="This is an alert"
        />
        <Alert
          shadow
          type="info"
          message="This is an alert"
        />
      </Space>
    </View>
  );
}`);

export const closable =
  generateCode(`import { Space, Alert } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space orientation="vertical">
        <Alert
          closable
          type="success"
          message="This is an alert"
        />
        <Alert
          closable
          type="warning"
          message="This is an alert"
        />
        <Alert
          closable
          type="error"
          message="This is an alert"
        />
        <Alert
          closable
          type="info"
          message="This is an alert"
        />
      </Space>
    </View>
  );
}`);
