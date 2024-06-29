import { PACKAGE_NAME } from '@/config';

const header = `type Type = "default" | "success" | "error" | "warning" | "info";

const types: Type[] = ["default", "success", "error", "warning", "info"];
`;

const onGenerateCode = (code: string) => `
import {
  useMessage,
  Button,
  Image,
  Text,
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
  const message = useMessage();

  const onPress = (type: Type) => {
    message[type]({
      title: (
        <Text transformText="capitalize" fontWeight="bold">
          {type}
        </Text>
      ),
      description: <Text transformText="capitalize">{type}</Text>
    });
  };

  return (
    <>
      {types.map((f) => (
        <Button
          key={f}
          onPress={() => onPress(f)}
          bg={f === "default" ? "gray800" : f}
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
  const message = useMessage();

  const onPress = (type: Type) => {
    message[type](type, {
      withIcon: true
    });
  };

  return (
    <>
     {types.map((f) => (
        <Button
          key={f}
          onPress={() => onPress(f)}
          bg={f === "default" ? "gray800" : f}
        >
          {f}
        </Button>
      ))}
    </>
  );
}
`
);

export const withStartAndEndContent = onGenerateCode(
  `
function RenderApp() {
  const message = useMessage();

  const onPress = (type: Type) => {
    message[type](type, {
      closable: false,
      startContent: (
        <Image
          width={50}
          height={50}
          borderRadius={8}
          source="https://imgix.cosentino.com/es/wp-content/uploads/2023/07/Lumire-70-Facade-MtWaverley-vic-1.jpg?auto=format%2Ccompress&ixlib=php-3.3.0"
        />
      ),
      endContent: (onClose) => {
        return (
          <Button
            type="link"
            color="text"
            onPress={() => {
              console.log('PRESS');
              onClose();
            }}
            sx={{
              text: { fontWeight: 'bold' }
            }}
          >
            Change
          </Button>
        );
      }
    });
  };

  return (
    <>
     {types.map((f) => (
        <Button
          key={f}
          onPress={() => onPress(f)}
          bg={f === "default" ? "gray800" : f}
        >
          {f}
        </Button>
      ))}
    </>
  );
}
`
);

export const withOutBoxShadow = onGenerateCode(
  `function RenderApp() {
  const message = useMessage();

  const onPress = (type: Type) => {
    message[type](type, { withBoxShadow: false });
  };

  return (
    <>
      {types.map((f) => (
        <Button
          key={f}
          onPress={() => onPress(f)}
          bg={f === "default" ? "gray800" : f}
        >
          {f}
        </Button>
      ))}
    </>
  );
}
`
);

export const duration = onGenerateCode(
  `function RenderApp() {
  const message = useMessage();

  const onPress = (type: Type) => {
    message[type](type, {
      duration: 2000 // in ms
    });
  };

  return (
    <>
      {types.map((f) => (
        <Button
          key={f}
          onPress={() => onPress(f)}
          bg={f === "default" ? "gray800" : f}
        >
          {f}
        </Button>
      ))}
    </>
  );
}
`
);
