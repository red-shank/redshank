import generateCode from '@/content/utils/generateCode';

export const defaultCode =
  generateCode(`import { Space, Checkbox } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Checkbox value={true} />
        <Checkbox label="I'm agree" />
      </Space>
    </View>
  );
}
`);

export const type =
  generateCode(`import { Space, Checkbox } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Checkbox
          label="Check"
          type="square"
          defaultValue={true}
        />
        <Checkbox
         label="Check"
         type="circle"
         defaultValue={true}
       />
      </Space>
    </View>
  );
}
`);

export const required =
  generateCode(`import { Space, Checkbox } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Checkbox
          required
          label="Required field"
        />
      </Space>
    </View>
  );
}
`);

export const sizes =
  generateCode(`import { Space, Checkbox } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Checkbox
          size="small"
          label="Small"
        />
        <Checkbox
          size="middle"
          label="Middle (Default)"
        />
        <Checkbox
          size="large"
          label="Large"
        />
      </Space>
    </View>
  );
}
`);

export const customize =
  generateCode(`import { Space, Checkbox } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Checkbox
          activeColor="warning"
          inactiveColor="secondary"
          label="Customize Colors"
        />
      </Space>
    </View>
  );
}
`);

export const withErrors =
  generateCode(`import { Space, Checkbox } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Checkbox
          label="Check"
          error="Please checked field."
        />
      </Space>
    </View>
  );
}
`);
