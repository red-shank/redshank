/* eslint-disable no-alert */
import React from 'react';
import {
  Button,
  Space,
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
        <View>
          <Title level={4}>Default buttons</Title>
          <Button mb={1}>Open</Button>
          <Space>
            {colors.map((c, i) => (
              <Button key={i} bg={c}>
                {c}
              </Button>
            ))}
          </Space>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>Circle buttons</Title>
          <Space>
            {colors.map((c, i) => (
              <Button key={i} shape="circle" bg={c}>
                {c}
              </Button>
            ))}
          </Space>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>Flat buttons</Title>
          <Space>
            {colors.map((c, i) => (
              <Button key={i} shape="circle" type="flat" bg={c}>
                {c}
              </Button>
            ))}
          </Space>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>Outline buttons</Title>
          <Space>
            {colors.map((c, i) => (
              <Button key={i} shape="circle" type="outline" bg={c}>
                {c}
              </Button>
            ))}
          </Space>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>iOS tag buttons</Title>
          <Space>
            <Button
              shape="circle"
              type="flat"
              size="small"
              bg="gray500"
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
          </Space>
          <Space>
            <Button
              type="flat"
              size="small"
              bg="gray500"
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
          </Space>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>Icon, Prefix and Suffix Buttons</Title>
          <Space>
            <Button
              icon={
                <Icon color="yellow400" type="ant-design" name="smile-circle" />
              }
            >
              Icon
            </Button>
            <Button
              prefix={<Icon color="error" type="ant-design" name="heart" />}
            >
              Prefix
            </Button>
            <Button
              suffix={<Icon type="antdesign" name="like1" color="white" />}
            >
              Suffix
            </Button>
            <Button
              prefix={<Icon color="error" type="ant-design" name="heart" />}
              suffix={<Icon type="antdesign" name="like1" color="white" />}
            >
              Both
            </Button>
          </Space>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4} marginBottom={10}>
            Social buttons
          </Title>
          <Space>
            <SocialButton provider="google" />
            <SocialButton provider="twitter" />
            <SocialButton provider="apple" />
            <SocialButton provider="facebook" />
          </Space>

          <View style={styles.space} />
        </View>

        <View>
          <Title level={4}>Custom color buttons</Title>
          <Space>
            <Button bg="#E5097F">Magenta</Button>
            <Button bg="#30b0c7">Orangered</Button>
            <Button bg="#ffcc00">Green</Button>
            <Button bg="#af52de">Purple</Button>
          </Space>
        </View>

        <View style={styles.space} />

        <Title level={5}>Link Buttons</Title>
        <Space>
          {colors.map((c, i) => (
            <Button key={i} type="link" color={c}>
              {c}
            </Button>
          ))}
        </Space>

        <View style={styles.space} />

        <View>
          <Title level={4}>Disabled buttons</Title>
          <Space align="center">
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
          </Space>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>Loading buttons</Title>
          <Space align="center">
            <Button size="small" loading onPress={() => alert('onPress')}>
              Loading
            </Button>

            <Button size="middle" loading onPress={() => alert('onPress')}>
              Loading
            </Button>

            <Button size="large" loading onPress={() => alert('onPress')}>
              Loading
            </Button>
          </Space>
        </View>

        <View style={styles.space} />

        <View>
          <Title level={4}>Size buttons</Title>
          <Title level={5}>Small</Title>
          <Space>
            {colors.map((c, i) => (
              <Button key={i} size="small" bg={c}>
                {c}
              </Button>
            ))}
          </Space>
          <Title level={5}>Middle(default)</Title>
          <Space>
            {colors.map((c, i) => (
              <Button key={i} bg={c}>
                {c}
              </Button>
            ))}
          </Space>
          <Title level={5}>Large</Title>
          <Space>
            {colors.map((c, i) => (
              <Button key={i} size="large" bg={c}>
                {c}
              </Button>
            ))}
          </Space>
          <Title level={5}>XLarge</Title>
          <Space>
            {colors.map((c, i) => (
              <Button key={i} size="xLarge" bg={c}>
                {c}
              </Button>
            ))}
          </Space>

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
