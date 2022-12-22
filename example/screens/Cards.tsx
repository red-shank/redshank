import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import {
  Card,
  Title,
  useTheme,
  Text,
  Button,
  Avatar,
} from '@redshank/native';

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

const CardScreen = () => {
  const { borderRadius } = useTheme();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Card isPressable style={styles.card}>
          <Image
            style={{ borderRadius: borderRadius.card, height: 150 }}
            source={{
              uri: 'https://i.pinimg.com/736x/8b/28/c8/8b28c857a9103b63efe150977668674a.jpg',
            }}
          />
        </Card>

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

        <Card style={styles.card} expandContent={<ExpandContent />}>
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

        <Card
          style={styles.card}
          isPressable
          rippleProps={{ disableRipple: false }}
        >
          <Card.Header>
            <Title marginBottom={0} level={3}>
              With Ripple
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

        <Card style={styles.card}>
          <Card.Header isAbsolute={false} style={styles.contentHead}>
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

        <Card style={styles.card} withBorder>
          <Card.Header isAbsolute={false}>
            <Title marginBottom={0} level={3}>
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
      </View>
      <View style={{ height: 75 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  contentHead: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  card: {
    marginBottom: 20,
  },
});

export default React.memo(CardScreen);
