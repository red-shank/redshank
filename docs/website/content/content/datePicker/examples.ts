import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode =
  generateCode(`import { DatePicker } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <View style={styles.center}>
      <DatePicker/>
    </View>
  );
}
`);

export const modes =
  generateCode(`import { DatePicker } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <DatePicker />
      <DatePicker mode="time" />
      <DatePicker mode="datetime" />
    </View>
  );
}`);

export const calendaryIOS =
  generateCode(`import { DatePicker, Title } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Title level={3}>Calendar (Only iOS)</Title>
      <DatePicker display="inline" />
    </View>
  );
}`);

export const format =
  generateCode(`import { DatePicker, Space } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Space orientation="vertical">
        <DatePicker format="DD MMM YYYY" />
        <DatePicker format="YYYY-MM-DDD" />
        <DatePicker format="YYYY MM DD" />
      </Space>
    </View>
  );
}`);

export const locales =
  generateCode(`import { DatePicker, Title } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <View>
        <Title level={3}>Locale ES</Title>
        <DatePicker format="DD MMM YYYY" locale="es" />
      </View>

      <View>
        <Title level={3}>Locale FR</Title>
        <DatePicker format="DD MMM YYYY" locale="fr" />
      </View>
    </View>
  );
}`);
