import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Title,
  InputScrollView,
  Space,
  Button,
  useMessage,
} from '@redshank/native';

type Type = 'default' | 'success' | 'error' | 'warning' | 'info';

const types: Type[] = ['default', 'success', 'error', 'warning', 'info'];

const MessageScreen = () => {
  const { message } = useMessage();

  const onPressDefault = (type: Type) => {
    message[type](type);
  };

  const onPressIcon = (type: Type) => {
    message[type](type, { withIcon: true });
  };

  const onPressShadowBox = (type: Type) => {
    message[type](type, { withIcon: true, withBoxShadow: true });
  };

  const onPressShadow = (type: Type) => {
    message[type](type, {
      type: 'shadow',
      withBoxShadow: true,
      withIcon: true,
    });
  };

  // React.useEffect(() => {
  //   message.setHeight(100);
  // }, [message]);

  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Title level={3}>Default Message</Title>
          <Space>
            {types.map((f) => (
              <Button key={f} onPress={() => onPressDefault(f)}>
                {f}
              </Button>
            ))}
          </Space>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Title level={3}>With icon</Title>
          <Space>
            {types.map((f) => (
              <Button key={f} onPress={() => onPressIcon(f)}>
                {f}
              </Button>
            ))}
          </Space>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Title level={3}>With Shadow Box</Title>
          <Space>
            {types.map((f) => (
              <Button key={f} onPress={() => onPressShadowBox(f)}>
                {f}
              </Button>
            ))}
          </Space>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Title level={3}>Shadow</Title>
          <Space>
            {types.map((f) => (
              <Button key={f} onPress={() => onPressShadow(f)}>
                {f}
              </Button>
            ))}
          </Space>
        </View>

        {/* END */}
      </View>
      <View style={{ height: 75 }} />
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)',
  },
  space: {
    marginTop: 50,
  },
});

export default MessageScreen;
