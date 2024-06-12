import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode = generateCode(
  `import { StickyHeader, Title, ThemeProvider, Box } from "${PACKAGE_NAME}";
import { SafeAreaProvider } from 'react-native-safe-area-context';

function StickyHeaderScreen() {
  return (
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
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StickyHeaderScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  )
};
`,
  []
);

export const onScroll = generateCode(
  `import {
  Title,
  ThemeProvider,
  StickyHeader,
  Box,
  Text,
} from "${PACKAGE_NAME}";
import { SafeAreaProvider } from 'react-native-safe-area-context';

function StickyHeaderScreen() {
  return (
    <StickyHeader animateInHeight={100} title={["Header", "Beauty Design"]}>
      <Box px={1}>
        <Title level={2}>Default Header</Title>
        <Text>Please scroll to 100px down</Text>
      </Box>

      <Box height={1500} />
    </StickyHeader>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StickyHeaderScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  )
};
`,
  []
);

export const customNavbar = generateCode(
  `import {
  StickyHeader,
  Title,
  Icon,
  Image,
  ThemeProvider,
  Button,
  useTheme,
} from "${PACKAGE_NAME}";
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const defaultValues = {
  title: {
    initial: "Hello",
    sticky: "Header",
  },
  icon: {
    left: <Icon name="menu" type="feather" />,
  },
};

function StickyHeaderScreen() {
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
    <StickyHeader {...config}>
      <View style={styles.container}>
        <Title level={2}>Header</Title>
      </View>

      {config?.title?.initial === "Custom" && (
        <Image
          height={300}
          source={{
            uri: "https://images.pexels.com/photos/7858126/pexels-photo-7858126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
        />
      )}

      <View
        style={[
          styles.headContent,
          styles.marginTop,
          { backgroundColor: colors.card },
        ]}
      >
        <Title level={4}>Default Header</Title>
        <Button onPress={onDefaultValues}>Restore</Button>
      </View>

      <View
        style={[
          styles.headContent,
          styles.marginTop,
          { backgroundColor: colors.card },
        ]}
      >
        <Title level={4}>With Right Icon</Title>
        <Button onPress={onWithRightIcon}>Try</Button>
      </View>

      <View
        style={[
          styles.headContent,
          styles.marginTop,
          { backgroundColor: colors.card },
        ]}
      >
        <Title level={4}>Header with custom backgrounds</Title>
        <Button onPress={onWithCustomBackground}>Try</Button>
      </View>

      <View style={{ height: 1500 }} />
    </StickyHeader>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StickyHeaderScreen />
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

`,
  ['Platform'],
  {
    withStyles: false
  }
);
