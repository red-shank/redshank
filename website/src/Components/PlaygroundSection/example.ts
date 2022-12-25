import { PACKAGE_NAME } from '@/config';

export const basicExample = `import { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';
import {
  ThemeProvider,
  Space,
  Icon,
  Button,
  Title,
  Text,
  Input,
  Alert,
  useMessage,
  useTheme,
} from '@redshank/native';

const Orientation = {
  RECEIVED: 1,
  SEND: 2,
}

const defaultValues = [
  {
    content: 'Hello, welcome to @redshank',
    type: Orientation.RECEIVED
  },
  {
    content: 'How to help you?',
    type: Orientation.RECEIVED
  },
];

const heightBottom = Platform.select({
  web: 60,
  default: 85
});

const MyComponent = () => {
  const { message } = useMessage();
  const [list, setList] = useState(defaultValues);
  const [text, setText] = useState('');
  const { borderRadius, colors, height, width } = useTheme();

  const onAddMessage = () => {
    if (!text) return message.error(
      'Please insert text before',
      { withIcon: true }
    )

    return setList(prev => {
      const content = String(text);
      setText('');
      message.success(
        'Successfully',
        { withIcon: true, duration: 1000 }
      )
      return [...prev, { content, type: Orientation.SEND }]
    })
  }

  useEffect(() => {
    let time = setInterval(() => {
      setList(prev => {
        return [
          ...prev,
          {
            content: 'Pining test...',
            type: Orientation.RECEIVED
          }
        ]
      })
    }, 7000)

    return () => time !== undefined && clearInterval(time);
  }, [])

  return (
    <View style={styles.content}>
      <ScrollView
        bottom={() => <View><Text>Hola</Text></View>}
        style={{height: height - heightBottom}}
          contentContainerStyle={StyleSheet.flatten([
            styles.wrapperScroll,
            {height: height - heightBottom}
        ])}
      >
        <View style={styles.container}>
          <Title>@redshank</Title>
          <Space orientation="vertical">
            <Alert message="Insert text in TextField for show more elements"/>
            {list.map((message, i) => {
              const isReceived = message.type === Orientation.RECEIVED;
              return (
                <Text
                  key={i}
                  containerStyle={StyleSheet.flatten([
                    styles.message,
                    {
                      backgroundColor: !isReceived ? colors.primary : colors.accents8,
                      borderRadius: borderRadius.lg,
                      alignSelf: isReceived ? 'flex-start' : 'flex-end'
                    }
                  ])}
                  align={isReceived ? 'left' : 'right'}
                >
                  {message.content}
                </Text>
              );
            })}
          </Space>
        </View>
      </ScrollView>

      <View style={StyleSheet.flatten([
        styles.footer,
        { backgroundColor: colors.accents8 }
      ])}>
        <View style={{ width: width - 60, marginRight: 5 }}>
          <Input
            size="small"
            value={text}
            onChange={setText}
          />
        </View>
        <Button shape="circle" size="small" onPress={onAddMessage}>
          <Icon
            color="white"
            type="antdesign"
            name="caretright"
            size={14}
            style={{ marginTop: Platform.select({
              web: 0,
              default: 5
            }) }}
          />
        </Button>
      </View>
    </View>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={{ theme: 'dark' }}>
      <MyComponent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    position: 'relative',
  },
  wrapperScroll: {
    paddingHorizontal: 10,
  },
  container: {
    paddingTop: 40,
    paddingBottom: 10,
  },
  message: {
    padding: 7,
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: heightBottom,
    flexDirection: 'row',
    paddingTop: 5,
    paddingHorizontal: 10
  }
});`;
