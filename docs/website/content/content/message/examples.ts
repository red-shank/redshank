import { PACKAGE_NAME } from '@/config';

const header = `type Type = "default" | "success" | "error" | "warning" | "info";

const types: Type[] = ["default", "success", "error", "warning", "info"];
`;

const onGenerateCode = (code: string) => `
import {
  useMessage,
  Button,
  MessageProvider,
  ScrollView,
  ThemeProvider,
  Container
} from '${PACKAGE_NAME}';

${header}
${code}
export default function App() {
  return (
    <ThemeProvider>
      <MessageProvider>
        <ScrollView>
          <Container gap={2}>
            <RenderApp />
          </Container>
        </ScrollView>
      </MessageProvider>
    </ThemeProvider>
  )
}
`;

export const defaultCode = onGenerateCode(`
function RenderApp() {
  const [message] = useMessage();

  const onPress = (type: Type) => {
    message[type](type);
  };

  return (
    <>
      {types.map((f) => (
        <Button
          key={f}
          onPress={() => onPress(f)}
          color={f === "default" ? "gray800" : f}
        >
          {f}
        </Button>
      ))}
    </>
  );
}
`);

export const withIcon = onGenerateCode(
  `
function RenderApp() {
  const [message] = useMessage();

  const onPress = (type: Type) => {
    message[type](type, { withIcon: true });
  };

  return (
    <>
     {types.map((f) => (
        <Button
          key={f}
          onPress={() => onPress(f)}
          color={f === "default" ? "gray800" : f}
        >
          {f}
        </Button>
      ))}
    </>
  );
}
`
);

export const withBoxShadow = onGenerateCode(
  `function RenderApp() {
  const [message] = useMessage();

  const onPress = (type: Type) => {
    message[type](type, { withIcon: true, withBoxShadow: true });
  };

  return (
    <>
      {types.map((f) => (
        <Button
          key={f}
          onPress={() => onPress(f)}
          color={f === "default" ? "gray800" : f}
        >
          {f}
        </Button>
      ))}
    </>
  );
}
`
);

export const shadowAndOpacity = onGenerateCode(
  `function RenderApp() {
  const [message] = useMessage();

  const onPress = (type: Type) => {
    message[type](type, {
      type: 'shadow',
      withIcon: true,
      withBoxShadow: true
    });
  };

  return (
    <>
      {types.map((f) => (
        <Button
          key={f}
          onPress={() => onPress(f)}
          color={f === "default" ? "gray800" : f}
        >
          {f}
        </Button>
      ))}
    </>
  );
}
`
);
