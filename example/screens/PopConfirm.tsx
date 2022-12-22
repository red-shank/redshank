import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Title,
  Button,
  InputScrollView,
  PopConfirm,
  useModal,
  Text,
  Image,
} from 'react-native-beauty-design';

const PopConfirmScreen = () => {
  const [visibleDefault, toggleDefaultVisible] = useModal();
  const [visibleWithoutImage, toggleWithoutImage] = useModal();
  const [visibleConfirm, toggleVisibleConfirm] = useModal();

  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Pop confirm</Title>
          <Button color="primary" onPress={toggleDefaultVisible}>
            show
          </Button>

          <PopConfirm visible={visibleDefault} onClose={toggleDefaultVisible}>
            <PopConfirm.Content>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                beatae cum dolores ducimus est eum porro quaerat sequi sit
                totam. Ducimus eos harum itaque minus mollitia necessitatibus
                odit tempora ut?
              </Text>
            </PopConfirm.Content>
          </PopConfirm>
        </View>

        <View>
          <Title level={3}>Pop confirm Header/Body/Footer</Title>
          <Button color="primary" onPress={toggleWithoutImage}>
            show
          </Button>

          <PopConfirm
            okText="Confirm"
            visible={visibleWithoutImage}
            onClose={toggleWithoutImage}
            onOk={toggleWithoutImage}
          >
            <PopConfirm.Header
              title="Beauty Design"
              description="lorem"
              image={
                <Image
                  source="https://www.beauty-design.app/favicon.png"
                  width={50}
                  height={50}
                />
              }
            />
            <PopConfirm.Content>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                beatae cum dolores ducimus est eum porro quaerat sequi sit
                totam. Ducimus eos harum itaque minus mollitia necessitatibus
                odit tempora ut?
              </Text>
            </PopConfirm.Content>
            <PopConfirm.Footer>
              <Button>Show more</Button>
            </PopConfirm.Footer>
          </PopConfirm>
        </View>

        <View>
          <Title level={3}>Pop confirm delete</Title>
          <Button color="primary" onPress={toggleVisibleConfirm}>
            show
          </Button>

          <PopConfirm
            type="delete"
            visible={visibleConfirm}
            onClose={toggleVisibleConfirm}
            onOk={toggleVisibleConfirm}
          >
            <PopConfirm.Content>
              <Text fontWeight="700">Are you sure to perform this action?</Text>
              <Text marginTop={10}>This action cannot be returned</Text>
            </PopConfirm.Content>
          </PopConfirm>
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

export default PopConfirmScreen;
