import { PACKAGE_NAME } from '@/config';

export const defaultCode = `import { StickyHeader, Title, ThemeProvider, Box } from "${PACKAGE_NAME}";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StickyHeader
          background={["background", "primary"]}
          titlePosition={["left", "center"]}
          title={{ initial: "Hello Header!", sticky: "Sticky" }}
        >
          <Box px={1}>
            <Title level={2}>Default Header</Title>
          </Box>

          <Box height={1500} />
        </StickyHeader>
      </ThemeProvider>
    </SafeAreaProvider>
  )
};
`;

export const onScroll = `import {
  Title,
  ThemeProvider,
  StickyHeader,
  Box,
  Text,
} from "${PACKAGE_NAME}";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StickyHeader animateInHeight={100} title={["Header", "Beauty Design"]}>
          <Box px={1}>
            <Title level={2}>Default Header</Title>
            <Text>Please scroll to 100px down</Text>
          </Box>

          <Box height={1500} />
        </StickyHeader>
      </ThemeProvider>
    </SafeAreaProvider>
  )
};
`

export const customNavbar = `import { StyleSheet } from "react-native";
import {
  StickyHeader,
  Title,
  Icon,
  Image,
  ThemeProvider,
  Button,
  Box,
  useTheme,
} from "${PACKAGE_NAME}";
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const iconsPack = new Map();
iconsPack.set("feather", Feather);

const defaultValues = {
  title: {
    initial: "Hello",
    sticky: "Header",
  },
  icon: {
    left: <Icon name="menu" type="feather" />,
  },
};

export default function App() {
  const { colors } = useTheme();
  const [config, setConfig] = React.useState(defaultValues);

  const onDefaultValues = () => {
    setConfig(defaultValues);
  };

  const onWithRightIcon = () => {
    setConfig({
      title: {
        initial: "Right header",
        sticky: "Left scroll",
      },
      titlePosition: {
        initial: "right",
        sticky: "left",
      },
      icon: {
        right: <Icon name="menu" type="feather" />,
      },
    });
  };

  const onWithCustomBackground = () => {
    setConfig({
      title: {
        initial: "Custom",
        sticky: "Header custom",
      },
      titlePosition: {
        initial: "center",
      },
      background: {
        initial: "primary",
        sticky: "yellow500",
      },
      animateInHeight: 250,
      icon: {
        left: <Icon name="menu" type="feather" />,
      },
    });
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider packs={iconsPack}>
        <StickyHeader {...config}>
          <Box style={styles.container}>
            <Title level={2}>Header</Title>
          </Box>

          {config?.title?.initial === "Custom" && (
            <Image
              height={300}
              source="https://images.pexels.com/photos/7858126/pexels-photo-7858126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          )}

          <Box
            style={[
              styles.headContent,
              styles.marginTop,
              { backgroundColor: colors.card },
            ]}
          >
            <Title level={4}>Default Header</Title>
            <Button onPress={onDefaultValues}>Restore</Button>
          </Box>

          <Box
            style={[
              styles.headContent,
              styles.marginTop,
              { backgroundColor: colors.card },
            ]}
          >
            <Title level={4}>With Right Icon</Title>
            <Button onPress={onWithRightIcon}>Try</Button>
          </Box>

          <Box
            style={[
              styles.headContent,
              styles.marginTop,
              { backgroundColor: colors.card },
            ]}
          >
            <Title level={4}>Header with custom backgrounds</Title>
            <Button onPress={onWithCustomBackground}>Try</Button>
          </Box>

          <Box style={{ height: 1500 }} />
        </StickyHeader>
      </ThemeProvider>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  wrapperScroll: {
    paddingHorizontal: 10,
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  marginTop: {
    marginTop: 0,
  },
  headContent: {
    position: "relative",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "rgba(100, 100, 100, .8)",
  },
  space: {
    marginTop: 50,
  },
});
`
