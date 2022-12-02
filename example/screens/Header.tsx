import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme, Header, Title, Button } from 'react-native-beauty-design';
import { useTheme as useNavigationTheme } from '@react-navigation/native';
import DrawerToggleButton from '@react-navigation/drawer/src/views/DrawerToggleButton';

const HeaderScreen = ({ navigation }) => {
  const { onScroll, colors } = useTheme();
  const navigationTheme = useNavigationTheme();

  return (
    <View style={styles.header}>
      <Header
        title="Hola"
        heightDynamic={25}
        titleOnScroll="Header"
        titlePosition="left"
        backgroundSticky={navigationTheme.colors.card}
        leftIcon={<DrawerToggleButton tintColor={colors.text} />}
      />
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.wrapperScroll}
      >
        <View style={styles.container}>
          <Title level={2}>Default Header</Title>
        </View>

        <View
          style={[
            styles.headContent,
            styles.marginTop,
            { backgroundColor: navigationTheme.colors.card },
          ]}
        >
          <Title level={4}>With Right Icon</Title>
          <Button onPress={() => navigation.navigate('HeaderWithRightIcon')}>
            Try
          </Button>
        </View>

        <View
          style={[
            styles.headContent,
            styles.marginTop,
            { backgroundColor: navigationTheme.colors.card },
          ]}
        >
          <Title level={4}>Header with custom backgrounds</Title>
          <Button
            onPress={() => navigation.navigate('HeaderWithCustomBackground')}
          >
            Try
          </Button>
        </View>

        <View style={{ height: 1500 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {},
  wrapperScroll: {
    paddingHorizontal: 10,
  },
  container: {
    paddingTop: 70,
    paddingBottom: 10,
  },
  marginTop: {
    marginTop: 0,
  },
  headContent: {
    position: 'relative',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(100, 100, 100, .8)',
  },
  space: {
    marginTop: 50,
  },
});

export default HeaderScreen;
