import generateCode from '@/content/utils/generateCode';

const expandContent = `const ExpandContent = () => (
  <View>
    <Title marginBottom={0} level={3}>
      Title here
    </Title>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
      assumenda blanditiis distinctio dolore dolorem eum hic illum ipsa laborum
      nam nemo nesciunt optio, quasi quo sequi similique soluta tempora!
    </Text>
    <Button withMarginBottom>
      Start up
    </Button>
  </View>
);`
export const defaultCode =
  generateCode(`import { Card, Image, useTheme } from "react-native-beauty-design";

export default function App() {
  const { borderRadius } = useTheme();
  return (
    <View style={styles.center}>

      <Card isPressable>
        <Image
          height={150}
          style={{
            borderRadius: borderRadius.card,
          }}
          source={{
            uri: "https://i.pinimg.com/736x/8b/28/c8/8b28c857a9103b63efe150977668674a.jpg",
          }}
        />
      </Card>

    </View>
  );
}`);
export const absoluteCard =
  generateCode(`import { Card, Image, Title, Text, Button, useTheme } from "react-native-beauty-design";

export default function App() {
  const { borderRadius } = useTheme();
  return (
    <View style={styles.center}>

      <Card expandContent={<ExpandContent />}>
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

    </View>
  );
}

${expandContent}`);

export const expandableCard =
  generateCode(`import { Card, Image, Title, Text, Button, useTheme } from "react-native-beauty-design";

export default function App() {
  const { borderRadius } = useTheme();
  return (
    <View style={styles.center}>

      <Card expandContent={<ExpandContent />}>
        <Card.Header>
          <Title marginBottom={0} level={3}>
            Default
          </Title>
          <Text>This is a Fox</Text>
        </Card.Header>
        <Image
          style={{ height: 250 }}
          source={{
            uri: 'https://i.pinimg.com/736x/8b/28/c8/8b28c857a9103b63efe150977668674a.jpg',
          }}
        />
        <Card.Footer>
          <Text>This is a footer</Text>
        </Card.Footer>
      </Card>

    </View>
  );
}

${expandContent}`);

export const exampleCard =
  generateCode(`import { Card, Avatar, Title, Text, Button } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>

      <Card>
        <Card.Header isAbsolute={false} style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
          <Avatar text="Avatar" />
          <View style={{ marginLeft: 10 }}>
            <Title marginBottom={0} level={3}>
              Fox
            </Title>
            <Text>This is an Animal</Text>
          </View>
        </Card.Header>
        <Card.Body withPadding>
          <Text>
            Make beautiful websites regardless of your design experience.
          </Text>
        </Card.Body>
        <Card.Footer>
          <Button type="link">Visit source code on GitHub.</Button>
        </Card.Footer>
      </Card>

    </View>
  );
}`);

export const withBorder =
  generateCode(`import { Card, Title, Text } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>

      <Card withBorder>
        <Card.Header isAbsolute={false}>
          <Title marginBottom={0} level={3}>
            With Border
          </Title>
          <Text>This is an Animal</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body withPadding>
          <Text>
            Make beautiful websites
            regardless of your design experience.
          </Text>
        </Card.Body>
      </Card>

    </View>
  );
}`);
