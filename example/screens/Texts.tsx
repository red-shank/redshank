import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Title } from '@redshank/native';

const colors = ['primary', 'success', 'warning', 'error', '#af52de'];

const TextsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title>Default Text</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            delectus, maxime. Accusantium adipisci aliquid cum cupiditate est ex
            expedita, labore, libero omnis quam quis quisquam recusandae, sit
            velit voluptas voluptatem?
          </Text>
          <Title>Max lines Text</Title>
          <Text lines={3}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            delectus, maxime. Accusantium adipisci aliquid cum cupiditate est ex
            expedita, labore, libero omnis quam quis quisquam recusandae, sit
            velit voluptas voluptatem?
          </Text>
          <Title>Read more</Title>
          <Text lines={3} readMore>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            delectus, maxime. Accusantium adipisci aliquid cum cupiditate est ex
            expedita, labore, libero omnis quam quis quisquam recusandae, sit
            velit voluptas voluptatem?
          </Text>

          <Title>Color Text</Title>
          {colors.map((c) => (
            <Text key={c} color={c}>
              Text color: {c}
            </Text>
          ))}

          <Title level={3}>Underline Text</Title>
          <Text underline>Text underline</Text>
          {colors.map((c) => (
            <Text key={c} underline color={c}>
              Text color: {c}
            </Text>
          ))}

          <Title level={3}>Italic Text</Title>
          <Text italic>Text italic</Text>
          {colors.map((c) => (
            <Text key={c} italic color={c}>
              Text color: {c}
            </Text>
          ))}

          <Title level={3}>Custom Size Text</Title>
          {colors.map((c, i) => (
            <Text key={c} size={(i + 1) * 7} color={c}>
              Text color: {c}
            </Text>
          ))}
          <Text size={20}>Text Custom Size</Text>

          <Title level={3}>Bold Text</Title>
          <Text bold>Text bold</Text>
          {colors.map((c) => (
            <Text key={c} bold color={c}>
              Text color: {c}
            </Text>
          ))}

          <Title level={3}>Justify Align Text</Title>
          <Text level={1} align="justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
            mollitia, rerum! Aliquam cupiditate delectus dolorem ea eius eos est
            ipsam laborum, magnam nemo perspiciatis qui sed sequi vel voluptate
            voluptatem!
          </Text>

          <Title level={3}>Left align Text</Title>
          <Text level={1} align="left">
            Align Left
          </Text>
          {colors.map((c) => (
            <Text key={c} align="left" color={c}>
              Text color: {c}
            </Text>
          ))}

          <Title level={3}>Center Align Text</Title>
          <Text level={1} align="center">
            Align center
          </Text>
          {colors.map((c) => (
            <Text key={c} align="center" color={c}>
              Text color: {c}
            </Text>
          ))}

          <Title level={3}>Right Align Text</Title>
          <Text level={1} align="right">
            Align right
          </Text>
          {colors.map((c) => (
            <Text key={c} align="right" color={c}>
              Text color: {c}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
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

export default TextsScreen;
