import { PACKAGE_NAME } from '@/config';

export const basicExample = `import { StyleSheet } from "react-native";
import {
  ThemeProvider,
  Button,
  Title,
  Text,
  Image,
  Box,
  Card,
  Container,
  Avatar,
  ScrollView,
  useTheme
} from "${PACKAGE_NAME}";

const ExpandContent = () => (
  <Box>
    <Title mb={0} level={3}>
      Title here
    </Title>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
      assumenda blanditiis distinctio dolore dolorem eum hic illum ipsa laborum
      nam nemo nesciunt optio, quasi quo sequi similique soluta tempora!
    </Text>
    <Button my={2}>Start up</Button>
  </Box>
);

const MyComponent = () => {
  const { borderRadius } = useTheme();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container gap={1.5}>
        <Card expandContent={<ExpandContent />}>
          <Card.Header isAbsolute>
            <Title mb={0} level={3}>
              Absolute
            </Title>
            <Text>This is a Camera</Text>
          </Card.Header>
          <Card.Body>
            <Image
            height={250}
              style={{ borderRadius: borderRadius.card }}
              source={{
                uri: "https://images.pexels.com/photos/7858126/pexels-photo-7858126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }}
            />
          </Card.Body>
          <Card.Footer isAbsolute>
            <Text>This is a footer</Text>
          </Card.Footer>
        </Card>

        <Card expandContent={<ExpandContent />}>
          <Card.Header>
            <Title mb={0} level={3}>
              Default
            </Title>
            <Text>This is a Camera</Text>
          </Card.Header>
          <Image
            height={200}
            source={{
              uri: "https://images.pexels.com/photos/17383711/pexels-photo-17383711/free-photo-of-fondo-de-pantalla-de-la-camara.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }}
          />
          <Card.Footer>
            <Text>This is a footer</Text>
          </Card.Footer>
        </Card>

        <Card
          isPressable
          rippleProps={{ disableRipple: false }}
        >
          <Card.Header>
            <Title mb={0} level={3}>
              With Ripple
            </Title>
            <Text>This is a other Camera</Text>
          </Card.Header>
          <Image
            height={200}
            source={{
              uri: "https://images.pexels.com/photos/16873016/pexels-photo-16873016/free-photo-of-camara-lente-nikon-mesa-negra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }}
          />
          <Card.Footer>
            <Text>This is a footer</Text>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Header isAbsolute={false} style={styles.contentHead}>
            <Avatar text="Avatar" />
            <Box ml={1}>
              <Title mb={0} level={3}>
                Fox
              </Title>
              <Text>This is an Animal</Text>
            </Box>
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

        <Card withBorder>
          <Card.Header isAbsolute={false}>
            <Title mb={0} level={3}>
              With Border
            </Title>
            <Text>This is an Animal</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body withPadding>
            <Text>
              Make beautiful websites regardless of your design experience.
            </Text>
          </Card.Body>
        </Card>
      </Container>
    </ScrollView>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={{ theme: "dark" }}>
      <MyComponent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  contentHead: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  }
});`;
