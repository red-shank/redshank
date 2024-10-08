/* eslint-disable no-alert */
import React from 'react';
import {
  Button,
  Box,
  Title,
  Icon,
  InputScrollView,
  SocialButton
} from '@redshank/native';
import { StyleSheet, View } from 'react-native';

const colors = ['primary', 'success', 'warning', 'error'];

const ButtonsScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Button type="link">Link</Button>
        <View>
          <Title level={4}>Default buttons</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {colors.map((c, i) => (
              <Button key={i} appearance={c}>
                {c}
              </Button>
            ))}
          </Box>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>Circle buttons</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {colors.map((c, i) => (
              <Button key={i} shape="circle" appearance={c}>
                {c}
              </Button>
            ))}
          </Box>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>Flat buttons</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {colors.map((c, i) => (
              <Button key={i} shape="circle" type="flat" appearance={c}>
                {c}
              </Button>
            ))}
          </Box>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>Outline buttons</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {colors.map((c, i) => (
              <Button key={i} shape="circle" type="outline" appearance={c}>
                {c}
              </Button>
            ))}
          </Box>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>iOS tag buttons</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            <Button
              shape="circle"
              type="flat"
              size="small"
              appearance="gray.500"
              color="primary"
              textProps={{ style: { textTransform: 'uppercase' } }}
            >
              Obtener
            </Button>
            {colors.map((c, i) => (
              <Button
                key={i}
                shape="circle"
                type="flat"
                size="small"
                color={c}
                textProps={{ style: { textTransform: 'uppercase' } }}
              >
                Obtener
              </Button>
            ))}

            <Button
              type="flat"
              size="small"
              appearance="gray.500"
              color="primary"
              textProps={{ style: { textTransform: 'uppercase' } }}
            >
              Obtener
            </Button>
            {colors.map((c, i) => (
              <Button key={i} type="flat" size="small" color={c}>
                Obtener
              </Button>
            ))}
          </Box>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4} marginBottom={10}>
            Social buttons
          </Title>
          <Box gap={1}>
            <SocialButton provider="google" />
            <SocialButton provider="twitter" />
            <SocialButton provider="apple" />
            <SocialButton provider="facebook" />
          </Box>

          <View style={styles.space} />
        </View>

        <View>
          <Title level={4}>Custom color buttons</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            <Button appearance="#E5097F">Magenta</Button>
            <Button appearance="#30b0c7">Orangered</Button>
            <Button appearance="#ffcc00">Green</Button>
            <Button appearance="#af52de">Purple</Button>
          </Box>
        </View>

        <View style={styles.space} />

        <Title level={5}>Link Buttons</Title>
        <Box gap={1} flexDirection="row" flexWrap="wrap">
          {colors.map((c, i) => (
            <Button key={i} type="link" color={c}>
              {c}
            </Button>
          ))}
        </Box>

        <View style={styles.space} />

        <View>
          <Title level={4}>Disabled buttons</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            <Button size="small" disabled onPress={() => alert('onPress')}>
              Disabled
            </Button>

            <Button
              size="middle"
              type="outline"
              disabled
              onPress={() => alert('onPress')}
            >
              Disabled
            </Button>

            <Button
              size="large"
              disabled
              type="link"
              onPress={() => alert('onPress')}
            >
              Disabled
            </Button>
          </Box>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>Loading buttons</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            <Button size="small" loading onPress={() => alert('onPress')}>
              Loading
            </Button>

            <Button size="middle" loading onPress={() => alert('onPress')}>
              Loading
            </Button>

            <Button size="large" loading onPress={() => alert('onPress')}>
              Loading
            </Button>
          </Box>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>Start and End content</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            <Button type="outline" shape="circle" onlyIcon>
              <Icon color="error" type="ant-design" name="heart" />
            </Button>

            <Button
              startContent={
                <Icon
                  color="yellow.400"
                  type="ant-design"
                  name="smile-circle"
                />
              }
            >
              Icon
            </Button>
            <Button
              startContent={
                <Icon color="error" type="ant-design" name="heart" />
              }
            >
              Start
            </Button>
            <Button
              endContent={<Icon type="antdesign" name="like1" color="white" />}
            >
              End
            </Button>
            <Button
              startContent={
                <Icon color="error" type="ant-design" name="heart" />
              }
              endContent={<Icon type="antdesign" name="like1" color="white" />}
            >
              Both
            </Button>
          </Box>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>onlyIcon</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            <Button size="small" type="outline" shape="circle" onlyIcon>
              <Icon color="error" type="ant-design" name="heart" />
            </Button>

            <Button size="middle" type="outline" shape="circle" onlyIcon>
              <Icon color="error" type="ant-design" name="heart" />
            </Button>

            <Button size="large" type="outline" onlyIcon>
              <Icon color="error" type="ant-design" name="heart" />
            </Button>

            <Button size="xLarge" type="outline" onlyIcon>
              <Icon color="error" type="ant-design" name="heart" />
            </Button>
          </Box>
        </View>
        <View style={styles.space} />

        <View>
          <Title level={4}>Size buttons</Title>
          <Title level={5}>Small</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {colors.map((c, i) => (
              <Button key={i} size="small" appearance={c}>
                {c}
              </Button>
            ))}
          </Box>
          <Title level={5}>Middle(default)</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {colors.map((c, i) => (
              <Button key={i} appearance={c}>
                {c}
              </Button>
            ))}
          </Box>
          <Title level={5}>Large</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {colors.map((c, i) => (
              <Button key={i} size="large" appearance={c}>
                {c}
              </Button>
            ))}
          </Box>
          <Title level={5}>XLarge</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {colors.map((c, i) => (
              <Button key={i} size="xLarge" appearance={c}>
                {c}
              </Button>
            ))}
          </Box>

          <View style={styles.space} />
        </View>
      </View>
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20
  },
  container: {
    flex: 1,
    padding: 15
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20
  },
  button: {},
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)'
  },
  darkView: { backgroundColor: 'rgb(0, 0, 0)', padding: 20 },
  space: {
    marginTop: 25
  }
});

export default ButtonsScreen;
