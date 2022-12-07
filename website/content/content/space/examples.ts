import generateCode from '@/content/utils/generateCode';

export const defaultCode =
  generateCode(`import { Space, Button } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Button>
          One
        </Button>
        <Button>
          Two
        </Button>
        <Button>
          Three
        </Button>
      </Space>
    </View>
  );
}
`);

export const gutter =
  generateCode(`import { Space, Button } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space gutter={[40, 20]}>
        <Button>
          One
        </Button>
        <Button>
          Two
        </Button>
        <Button>
          Three
        </Button>
      </Space>
    </View>
  );
}
`);


export const verticalAlign =
  generateCode(`import { Space, Button } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Space orientation="vertical">
        <Button fullWidth>
          One
        </Button>
        <Button fullWidth>
          Two
        </Button>
        <Button fullWidth>
          Three
        </Button>
      </Space>
    </View>
  );
}
`);


export const justifyAndAlign =
  generateCode(`import { Space, Button } from "react-native-beauty-design";
import { useState } from 'react';

export default function App() {
  const [justify, setJustify] = useState('center');

  const onChangeJustify = (position) => {
    return () =>  setJustify(position);
  }

  return (
    <View style={styles.center}>
      <Space justify={justify} align="center">
        <Button
          onPress={onChangeJustify('start')}
        >
          Start
        </Button>
        <Button
          onPress={onChangeJustify('center')}
        >
          Center
        </Button>
        <Button
          onPress={onChangeJustify('end')}
        >
          End Position
        </Button>
      </Space>
    </View>
  );
}
`);
