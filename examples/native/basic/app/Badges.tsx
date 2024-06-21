import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Title,
  InputScrollView,
  Badge,
  Box,
  Avatar,
  Text,
  Icon,
  useTheme,
  Ripple
} from '@redshank/native';

const BadgeScreen = () => {
  const [visibleBadge, setVisibleBadge] = useState(true);
  const { colors } = useTheme();

  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Default Badge</Title>
          <Box gap={1} flexDirection="row">
            <Badge content="Default" bordered={false} />
            <Badge content="Primary" background="primary" bordered={false} />
            <Badge
              bordered={false}
              content="Secondary"
              background="secondary"
            />
          </Box>
        </View>

        <View>
          <Title level={3}>Sizes</Title>
          <Box gap={1} flexDirection="row">
            <Badge content="Small" size="small" />
            <Badge content="Middle" />
            <Badge content="Large" size="large" />
          </Box>
        </View>

        <View>
          <Title level={3}>Dot Variant</Title>
          <Box gap={1} flexDirection="row">
            <Text>
              <Badge content="" /> Default
            </Text>
            <Text>
              <Badge content="" background="primary" /> Primary
            </Text>
            <Text>
              <Badge content="" background="success" /> Success
            </Text>
          </Box>
        </View>

        <View>
          <Title level={3}>Flat Variant</Title>
          <Box gap={1} flexDirection="row">
            <Badge isPressable content="Default" variant="flat" />
            <Badge
              isPressable
              content="Primary"
              background="primary"
              variant="flat"
            />
            <Badge
              isPressable
              variant="flat"
              content="Secondary"
              background="secondary"
            />
          </Box>
        </View>

        <View>
          <Title level={3}>Square</Title>
          <Box gap={1} flexDirection="row">
            <Badge content="999+" background="error" type="square" />
            <Badge content="PRIMARY" background="primary" type="square" />
          </Box>
        </View>

        <View>
          <Title level={3}>Solid Bordered</Title>
          <Box bg="gray300" gap={1}>
            <Badge content="" />
            <Badge content="999+" background="error" />
            <Badge content="PRIMARY" background="primary" />
          </Box>
        </View>

        <View>
          <Title level={3}>With Children</Title>
          <Box gap={1} flexDirection="row">
            <Badge content="9+" background="error">
              <Avatar text="Hello World" />
            </Badge>
            <Badge background="error" size="small" content="">
              <Avatar text="Hello World" />
            </Badge>
          </Box>
        </View>

        <View>
          <Title level={3}>Placement</Title>
          <Box gap={1} flexDirection="row">
            <Badge background="error" size="small">
              <Avatar text="Hello World" />
            </Badge>
            <Badge background="error" placement="bottom-right" size="small">
              <Avatar text="Hello World" />
            </Badge>
            <Badge background="error" placement="top-left" size="small">
              <Avatar text="Hello World" />
            </Badge>

            <Badge background="error" placement="bottom-left" size="small">
              <Avatar text="Hello World" />
            </Badge>
          </Box>
          <Box gap={1} flexDirection="row">
            <Badge background="error" size="small">
              <Avatar text="Hello World" />
            </Badge>
            <Badge background="success" placement="bottom-right" size="small">
              <Avatar text="Hello World" />
            </Badge>
            <Badge background="error" placement="top-left">
              <Avatar text="Hello World" />
            </Badge>

            <Badge background="error" placement="bottom-left" size="small">
              <Avatar text="Hello World" />
            </Badge>
          </Box>
        </View>

        <View>
          <Title level={3}>Enable Shadow</Title>
          <Box gap={1} flexDirection="row">
            <Badge content="With Shadow" enableShadow />
            <Badge content="999+" background="error" enableShadow />
          </Box>
        </View>

        <View>
          <Title level={3}>Is Invisible</Title>
          <Badge content="+4" background="error" isInvisible={visibleBadge}>
            <Ripple
              pr={2}
              pt={1}
              onPress={() => setVisibleBadge((prev) => !prev)}
            >
              <Icon size={40} name="shopping-cart" type="feather" />
            </Ripple>
          </Badge>
          <Text>Toggle icon shopping car</Text>
        </View>
      </View>
      <View style={{ height: 75 }} />
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: '100%'
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)'
  },
  space: {
    marginTop: 50
  }
});

export default BadgeScreen;
