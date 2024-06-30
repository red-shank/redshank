import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Title,
  Box,
  Button,
  useMessage,
  ScrollView,
  Image,
  AlertType,
  Text
} from '@redshank/native';

const types: AlertType[] = ['default', 'success', 'error', 'warning', 'info'];

const MessageScreen = () => {
  const message = useMessage();

  const onPressDefault = (type: AlertType) => {
    message[type]({
      title: (
        <Text transformText="capitalize" fontWeight="bold">
          {type}
        </Text>
      ),
      description: <Text transformText="capitalize">{type}</Text>
    });
  };

  const onLeftIcon = (type: AlertType) => {
    message[type](
      {
        title: type,
        description: type
      },
      {
        withIcon: true
      }
    );
  };

  const onRightIcon = (type: AlertType) => {
    message[type](type, {
      closable: false,
      startContent: (
        <Image
          width={50}
          height={50}
          borderRadius={8}
          source="https://imgix.cosentino.com/es/wp-content/uploads/2023/07/Lumire-70-Facade-MtWaverley-vic-1.jpg?auto=format%2Ccompress&ixlib=php-3.3.0"
        />
      ),
      endContent: (onClose) => {
        return (
          <Button
            type="link"
            color="text"
            onPress={() => {
              console.log('PRESS');
              onClose();
            }}
            sx={{
              text: { fontWeight: 'bold' }
            }}
          >
            Change
          </Button>
        );
      }
    });
  };

  const onPressShadow = (type: AlertType) => {
    message[type](type, {
      withBoxShadow: false
    });
  };

  const onPressDuration = (type: AlertType) => {
    message[type](type, {
      duration: 2000 // in ms
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Title level={3}>Default Message</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {types.map((f) => (
              <Button key={f} onPress={() => onPressDefault(f)}>
                {f}
              </Button>
            ))}
          </Box>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Title level={3}>With icon</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {types.map((f) => (
              <Button key={f} onPress={() => onLeftIcon(f)}>
                {f}
              </Button>
            ))}
          </Box>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Title level={3}>With Start/End Content</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {types.map((f) => (
              <Button key={f} onPress={() => onRightIcon(f)}>
                {f}
              </Button>
            ))}
          </Box>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Title level={3}>Without Shadow</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {types.map((f) => (
              <Button key={f} onPress={() => onPressShadow(f)}>
                {f}
              </Button>
            ))}
          </Box>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Title level={3}>Change Duration Eg. 2s</Title>
          <Box gap={1} flexDirection="row" flexWrap="wrap">
            {types.map((f) => (
              <Button key={f} onPress={() => onPressDuration(f)}>
                {f}
              </Button>
            ))}
          </Box>
        </View>

        {/* END */}
      </View>
    </ScrollView>
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

export default MessageScreen;
