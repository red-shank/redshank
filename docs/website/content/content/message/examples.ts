import { generateCodeWithProvider } from '@/content/utils/generateCode';

export const defaultCode = generateCodeWithProvider(
  `type Type = "default" | "success" | "error" | "warning" | "info";

const types: Type[] = ["default", "success", "error", "warning", "info"];

function App() {
  const { message } = useMessage();

  const onPress = (type: Type) => {
    message[type](type);
  };

  return (
    <View style={styles.center}>
      <Space>
        {types.map((f) => (
          <Button
            key={f}
            onPress={() => onPress(f)}
            color={f === "default" ? "gray800" : f}
          >
            {f}
          </Button>
        ))}
      </Space>
    </View>
  );
}`,
  {
    beauty: 'Space, useMessage, Button'
  }
);

export const withIcon = generateCodeWithProvider(
  `type Type = "default" | "success" | "error" | "warning" | "info";

const types: Type[] = ["default", "success", "error", "warning", "info"];

function App() {
  const { message } = useMessage();

  const onPress = (type: Type) => {
    message[type](type, { withIcon: true });
  };

  return (
    <View style={styles.center}>
      <Space>
        {types.map((f) => (
          <Button
            key={f}
            onPress={() => onPress(f)}
            color={f === "default" ? "gray800" : f}
          >
            {f}
          </Button>
        ))}
      </Space>
    </View>
  );
}`,
  {
    beauty: 'Space, useMessage, Button'
  }
);


export const withBoxShadow = generateCodeWithProvider(
  `type Type = "default" | "success" | "error" | "warning" | "info";

const types: Type[] = ["default", "success", "error", "warning", "info"];

function App() {
  const { message } = useMessage();

  const onPress = (type: Type) => {
    message[type](type, { withIcon: true, withBoxShadow: true });
  };

  return (
    <View style={styles.center}>
      <Space>
        {types.map((f) => (
          <Button
            key={f}
            onPress={() => onPress(f)}
            color={f === "default" ? "gray800" : f}
          >
            {f}
          </Button>
        ))}
      </Space>
    </View>
  );
}`,
  {
    beauty: 'Space, useMessage, Button'
  }
);

export const shadowAndOpacity = generateCodeWithProvider(
  `type Type = "default" | "success" | "error" | "warning" | "info";

const types: Type[] = ["default", "success", "error", "warning", "info"];

function App() {
  const { message } = useMessage();

  const onPress = (type: Type) => {
    message[type](type, {
      type: 'shadow',
      withIcon: true,
      withBoxShadow: true
    });
  };

  return (
    <View style={styles.center}>
      <Space>
        {types.map((f) => (
          <Button
            key={f}
            onPress={() => onPress(f)}
            color={f === "default" ? "gray800" : f}
          >
            {f}
          </Button>
        ))}
      </Space>
    </View>
  );
}`,
  {
    beauty: 'Space, useMessage, Button'
  }
);
