# @redshank/native

The objective of this project is to create a complete and advanced framework such as Antd for the web, I want to be able to offer a set of reusable components that are native and beautiful in such a way that we all love to use it in our projects

# Documentation

[Documentation](https://www.redshank.app) under construction, launch scheduled for November 30, 2022.

## Installation

```sh
npm install @redshank/native
```

# Usage

Make sure you have react-native>=0.65.0

## Documentation

Documentation [here](https://redshank.app)

![img.png](img.png)

## Code Example

```js
import {
  GoogleButton,
  Space,
  SpaceItem,
  Text,
  DesignProvider,
} from 'react-native-ui-components';

const configProviderUI = {
  colors: {
    magenta: '#E5097F',
    orangered: '#ff4500',
    green: '#00FF00',
    purple: '#800080',
  },
};

export default function App() {
  return (
    <DesignProvider initialState={configProviderUI}>
      <ScrollView contentContainerStyle={styles.view}>
        <View style={styles.container}>
          <View>
            <Text>Buttons</Text>
            <Text level={4}>Default buttons</Text>
            <Space justify="center">
              <GoogleButton>Primary</GoogleButton>
              <GoogleButton color="success">Success</GoogleButton>
              <GoogleButton type="link" color="warning">
                Warning
              </GoogleButton>
              <GoogleButton type="outline" color="error">
                Error
              </GoogleButton>
            </Space>
          </View>
          <View>
            <Text level={4}>Circle buttons</Text>
            <Space justify="center">
              <GoogleButton shape="circle">Primary</GoogleButton>
              <GoogleButton shape="circle" color="success">
                Success
              </GoogleButton>
              <GoogleButton type="link" shape="circle" color="warning">
                Warning
              </GoogleButton>
              <GoogleButton type="outline" shape="circle" color="error">
                Error
              </GoogleButton>
            </Space>
          </View>
          <View>
            <Text level={4}>Custom color buttons</Text>
            <Space justify="center">
              <GoogleButton color="magenta">Magenta</GoogleButton>
              <GoogleButton color="orangered">Orangered</GoogleButton>
              <GoogleButton color="green">Green</GoogleButton>
              <GoogleButton color="purple">Purple</GoogleButton>
            </Space>
          </View>
        </View>
      </ScrollView>
    </DesignProvider>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
