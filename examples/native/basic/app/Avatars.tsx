import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Title,
  InputScrollView,
  Avatar,
  AvatarGroup,
  Box
} from '@redshank/native';

const AvatarScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Avatar Group</Title>
          <Box gap={1}>
            <AvatarGroup
              max={3}
              moreProps={{
                backgroundColor: 'primary'
              }}
              items={[
                {
                  src: 'https://i.imgur.com/bnip2HZ.png',
                  borderColor: 'primary'
                },
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                },
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                },
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                },
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                },
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                },
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                }
              ]}
            />

            <AvatarGroup
              size={20}
              max={3}
              bordered
              borderColor="background"
              moreProps={{
                backgroundColor: 'brandAlphaAvatarMore',
                borderColor: 'background',
                textColor: 'text',
                textStyle: {
                  fontSize: 11,
                  fontWeight: 'bold'
                }
              }}
              items={[
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                },
                {
                  text: 'Ernesto',
                  borderColor: 'primary'
                },
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                },
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                },
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                },
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                },
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                },
                {
                  src: 'https://i.imgur.com/bnip2HZ.png'
                }
              ]}
            />
          </Box>
        </View>

        <View>
          <Title level={3}>Sizes Avatar</Title>
          <Box gap={1}>
            <Avatar text="user" size={18} />
            <Avatar text="user" size={30} />
            <Avatar text="Kevin Rivas" />
            <Avatar text="Kevin" size={50} />
          </Box>
        </View>

        <View>
          <Title level={3}>Circle Avatar</Title>
          <Box gap={1}>
            <Avatar type="circle" text="Kevin Rivas" size={65} />
            <Avatar type="circle" text="Kevin Rivas" />
            <Avatar type="circle" text="user" size={30} />
          </Box>
        </View>

        <View>
          <Title level={3}>Color Avatar</Title>
          <Box gap={1}>
            <Avatar text="Bertha Posada" />
            <Avatar text="Kevin Rivas" />
            <Avatar text="Rivas" />
            <Avatar text="Jhon" />
          </Box>
        </View>

        <View>
          <Title level={3}>Full Name Avatar</Title>
          <Box gap={1}>
            <Avatar text="Bertha" showCountText="all" />
            <Avatar text="Kev" showCountText="all" />
            <Avatar text="Rivas" showCountText="all" />
            <Avatar text="Jhon" showCountText="all" />
          </Box>
        </View>

        <View>
          <Title level={3}>Image Avatar</Title>
          <Box gap={1}>
            <Avatar src="https://i.imgur.com/bnip2HZ.png" bordered size={65} />
            <Avatar src="https://i.imgur.com/bnip2HZ.png" />
            <Avatar src="https://i.imgur.com/bnip2HZ.png" size={30} />
          </Box>
        </View>

        <View>
          <Title level={3}>Icon Avatar</Title>
          <Box gap={1}>
            <Avatar
              icon={{
                name: 'user',
                type: 'antdesign'
              }}
            />
            <Avatar
              size={50}
              icon={{
                size: 30,
                type: 'fontisto',
                name: 'user-secret'
              }}
            />
            <Avatar
              size={65}
              icon={{
                size: 35,
                name: 'user',
                type: 'font-awesome-5'
              }}
            />
          </Box>
        </View>

        <View>
          <Title level={3}>Count Text</Title>
          <Box gap={1}>
            <Avatar size={65} showCountText={1} text="Redshank UI Design" />
            <Avatar size={65} showCountText={2} text="Redshank UI Design" />
            <Avatar size={65} showCountText={5} text="Redshank UI Design" />
            <Avatar size={65} showCountText="all" text="Redshank" />
          </Box>
        </View>

        <View>
          <Title level={3}>Pressable Avatar</Title>
          <Box gap={1}>
            <Avatar
              onPress={() => alert('On press here!')}
              src="https://i.imgur.com/bnip2HZ.png"
              size={65}
            />
          </Box>
        </View>
      </View>
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
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

export default AvatarScreen;
