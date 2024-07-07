import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  useTheme,
  StickyHeader,
  Title,
  Button,
  StickyHeaderProps,
  Image
} from '@redshank/native';
import { useTheme as useNavigationTheme } from '@react-navigation/native';
import MenuToggleButton from '@/components/MenuToggleButton';

const defaultValues = (color: string): StickyHeaderProps => ({
  title: {
    initial: 'Hello',
    sticky: 'Header'
  },
  icon: {
    left: <MenuToggleButton tintColor={color} />
  }
});

const HeaderScreen = () => {
  const { colors } = useTheme();
  const navigationTheme = useNavigationTheme();
  const [config, setConfig] = React.useState<StickyHeaderProps | null>(
    defaultValues(colors.get('text'))
  );

  useEffect(() => {
    setConfig(defaultValues(colors.get('text')));
  }, [colors, setConfig]);

  const onDefaultValues = () => {
    setConfig(defaultValues(colors.get('text')));
  };

  const onWithRightIcon = () => {
    setConfig({
      title: {
        initial: 'Right header',
        sticky: 'Left scroll'
      },
      titlePosition: {
        initial: 'right',
        sticky: 'left'
      },
      icon: {
        right: <MenuToggleButton tintColor={colors.get('text')} />
      }
    });
  };

  const onWithCustomBackground = () => {
    setConfig({
      title: {
        initial: 'Custom',
        sticky: 'Header custom'
      },
      titlePosition: {
        initial: 'center'
      },
      background: {
        initial: 'background',
        sticky: 'primary'
      },
      animateInHeight: 20,
      icon: {
        left: <MenuToggleButton tintColor={colors.get('text')} />
      }
    });
  };

  return (
    <StickyHeader {...config}>
      <View style={styles.container}>
        <Title level={2}>Header</Title>
      </View>

      {(config?.title as any)?.initial === 'Custom' && (
        <Image
          height={300}
          source={{
            uri: 'https://images.pexels.com/photos/7858126/pexels-photo-7858126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }}
        />
      )}

      <View
        style={[
          styles.headContent,
          styles.marginTop,
          { backgroundColor: navigationTheme.colors.card }
        ]}
      >
        <Title level={4}>Default Header</Title>
        <Button onPress={onDefaultValues}>Restore</Button>
      </View>

      <View
        style={[
          styles.headContent,
          styles.marginTop,
          { backgroundColor: navigationTheme.colors.card }
        ]}
      >
        <Title level={4}>With Right Icon</Title>
        <Button onPress={onWithRightIcon}>Try</Button>
      </View>

      <View
        style={[
          styles.headContent,
          styles.marginTop,
          { backgroundColor: navigationTheme.colors.card }
        ]}
      >
        <Title level={4}>Header with custom backgrounds</Title>
        <Button onPress={onWithCustomBackground}>Try</Button>
      </View>

      <View style={{ height: 1500 }} />
    </StickyHeader>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1
  },
  wrapperScroll: {
    paddingHorizontal: 10
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10
  },
  marginTop: {
    marginTop: 0
  },
  headContent: {
    position: 'relative',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(100, 100, 100, .8)'
  },
  space: {
    marginTop: 50
  }
});

export default HeaderScreen;
