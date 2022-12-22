import generateCode from '@/content/utils/generateCode';

export const defaultCode =
  generateCode(`import { Controller } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <View style={styles.center}>
      <Controller/>
    </View>
  );
}
`);

export const maxAndMin =
  generateCode(`import { Controller, Space } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Controller max={5} min={2} />
        <Controller
          max={3}
          min={1}
          maxOverflow={() => alert('Only more that 1')}
          minOverflow={() => alert('Only less that 3')}
        />
      </Space>
    </View>
  );
}
`);

export const customize =
  generateCode(`import { Controller } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Controller borderColor="success" color="warning" />
    </View>
  );
}
`);
