import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Title, InputScrollView, Box, Icon } from '@redshank/native';

const { TextArea } = Input;

const InputScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Default Input</Title>
          <Box gap={1}>
            <Input placeholder="Default input" />
            <Title level={3}>Sizes</Title>
            <Input placeholder="Small input" size="small" />
            <Input placeholder="Middle input" size="middle" />
            <Input placeholder="Large input" size="large" />
            <Input
              placeholder="Email or username"
              prefix={<Icon name="mail" type="antdesign" />}
            />
            <Input type="password" placeholder="Insert password" />
            <Input
              placeholder="Prefix and Suffix"
              prefix={<Icon name="lock" type="antdesign" />}
              suffix={<Icon name="mail" type="antdesign" />}
            />
          </Box>

          <Title level={3}>Placeholder color</Title>
          <Box gap={1}>
            <Input
              placeholder="Placeholder color Primary"
              placeholderColor="primary"
            />
            <Input
              placeholder="Placeholder color Success"
              placeholderColor="success"
            />
            <Input
              placeholder="Placeholder color #A569BD"
              placeholderColor="#A569BD"
              borderInputColor="#A569BD"
            />
          </Box>

          <Title level={3}>Error input</Title>
          <Input
            error
            defaultValue="Kevin R"
            placeholder="Placeholder color Primary"
          />

          <View style={{ height: 20 }} />

          <Title level={5}>With message error</Title>
          <Input
            error
            textError="This is required field"
            defaultValue="Kevin R"
            placeholder="Placeholder color Primary"
          />

          <View style={{ height: 20 }} />
        </View>
        <View>
          <Title level={3}>Input Number</Title>
          <Box gap={1}>
            <Input type="numeric" placeholder="Insert only numbers" />
            <Input
              error
              textError="This is required field"
              type="numeric"
              placeholder="Insert only numbers"
            />
          </Box>
        </View>

        <View>
          <Title level={3}>Textarea</Title>
          <Box gap={1}>
            <TextArea placeholder="Insert text" />
          </Box>
        </View>

        <View>
          <Title level={3}>Disabled</Title>
          <Box gap={1}>
            <Input isDisabled placeholder="Insert text" />
            <TextArea isDisabled placeholder="Insert text" />
          </Box>
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

export default React.memo(InputScreen);
