import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Title,
  InputScrollView,
  Avatar,
  Space,
} from 'react-native-beauty-design';

const AvatarScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Sizes Avatar</Title>
          <Space>
            <Avatar text="Kevin" size={65} />
            <Avatar text="Kevin Rivas" color="white" />
            <Avatar text="user" size={30} />
          </Space>
        </View>

        <View>
          <Title level={3}>Circle Avatar</Title>
          <Space>
            <Avatar type="circle" text="Kevin Rivas" size={65} />
            <Avatar type="circle" text="Kevin Rivas" color="white" />
            <Avatar type="circle" text="user" size={30} />
          </Space>
        </View>

        <View>
          <Title level={3}>Color Avatar</Title>
          <Space>
            <Avatar text="Bertha Posada" color="warning" />
            <Avatar text="Kevin Rivas" />
            <Avatar text="Rivas" />
            <Avatar text="Jhon" />
          </Space>
        </View>

        <View>
          <Title level={3}>Full Name Avatar</Title>
          <Space>
            <Avatar text="Bertha" showCountText="all" />
            <Avatar text="Kev" showCountText="all" />
            <Avatar text="Rivas" showCountText="all" />
            <Avatar text="Jhon" showCountText="all" />
          </Space>
        </View>

        <View>
          <Title level={3}>Image Avatar</Title>
          <Space>
            <Avatar src="https://i.imgur.com/bnip2HZ.png" size={65} />
            <Avatar src="https://i.imgur.com/bnip2HZ.png" />
            <Avatar src="https://i.imgur.com/bnip2HZ.png" size={30} />
          </Space>
        </View>

        <View>
          <Title level={3}>Icon Avatar</Title>
          <Space>
            <Avatar
              icon={{
                name: 'user',
                type: 'antdesign',
              }}
            />
            <Avatar
              size={50}
              icon={{
                size: 30,
                type: 'fontisto',
                name: 'user-secret',
              }}
            />
            <Avatar
              size={65}
              icon={{
                size: 35,
                name: 'user',
                type: 'font-awesome-5',
              }}
            />
          </Space>
        </View>

        <View>
          <Title level={3}>Count Text</Title>
          <Space>
            <Avatar size={65} showCountText={1} text="Beauty Design" />
            <Avatar size={65} showCountText={2} text="Beauty Design" />
            <Avatar size={65} showCountText={5} text="Beauty Design" />
            <Avatar size={65} showCountText="all" text="Beauty" />
          </Space>
        </View>

        <View>
          <Title level={3}>Pressable Avatar</Title>
          <Space>
            <Avatar
              onPress={() => alert('On press here!')}
              src="https://i.imgur.com/bnip2HZ.png"
              size={65}
            />
          </Space>
        </View>
      </View>
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
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

export default AvatarScreen;
