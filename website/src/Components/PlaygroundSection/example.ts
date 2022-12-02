export const basicExample = `import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  ThemeProvider,
  Header,
  Card,
  Title,
  Button,
  Text,
  Icon,
  Image,
  useTheme,
} from 'react-native-beauty-design';

const MyComponent = () => {
  const { onScroll, borderRadius } = useTheme();

  return (
    <View style={styles.content}>
      <Header
        heightDynamic={25}
        titlePosition="left"
        title="Beauty Design"
        titleOnScroll="Welcome"
        backgroundSticky="green100"
      />

      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.wrapperScroll}
      >
        <View style={styles.container}>
          <Title level={2}>Default Header</Title>
        </View>
        <Card style={styles.card} expandContent={<ExpandContent />}>
          <Card.Header isAbsolute>
            <Title marginBottom={0} level={3}>
              Absolute
            </Title>
            <Text>This is a Fox</Text>
          </Card.Header>
          <Card.Body>
            <Image
              style={{ borderRadius: borderRadius.card, height: 250 }}
              source={{
                uri: 'https://i.pinimg.com/736x/8b/28/c8/8b28c857a9103b63efe150977668674a.jpg',
              }}
            />
          </Card.Body>
          <Card.Footer isAbsolute>
            <Text>This is a footer</Text>
          </Card.Footer>
        </Card>

        <View style={{ height: 10000 }} />
      </ScrollView>
    </View>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
}

const ExpandContent = () => (
  <View>
    <Title marginBottom={0} level={3}>
      Title here
    </Title>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
      assumenda blanditiis distinctio dolore dolorem eum hic illum ipsa laborum
      nam nemo nesciunt optio, quasi quo sequi similique soluta tempora!
    </Text>
    <Button style={{ marginVertical: 20 }}>Start up</Button>
  </View>
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    position: 'relative',
  },
  wrapperScroll: {
    paddingHorizontal: 10,
  },
  container: {
    paddingTop: 70,
    paddingBottom: 10,
  },
  card: {
    marginBottom: 20,
  },
});
`;
