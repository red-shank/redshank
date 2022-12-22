import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  Title,
  InputScrollView,
  Button,
  useNotification,
} from '@redshank/native';

const NotificationScreen = () => {
  const notification = useNotification();

  const onPress = () => {
    notification({
      message: 'I love you to Beauty design',
    });
  };

  const onPressWithIcon = () => {
    notification({
      message: 'I love you to Beauty design',
      icon: <Image source={require('../assets/images/icon.png')} />,
    });
  };

  const onPressWithTitle = () => {
    notification({
      app: 'Beauty Design',
      title: 'TitleLink here!',
      message: 'I love you to Beauty design',
      icon: <Image source={require('../assets/images/icon.png')} />,
    });
  };

  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Notifications</Title>
          <Button color={'primary'} onPress={() => onPress()}>
            Show
          </Button>
        </View>

        <View>
          <Title level={3}>Notifications with icon</Title>
          <Button color={'primary'} onPress={() => onPressWithIcon()}>
            Show
          </Button>
        </View>

        <View>
          <Title level={3}>Notifications with title</Title>
          <Button color={'primary'} onPress={() => onPressWithTitle()}>
            Show
          </Button>
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

export default NotificationScreen;
