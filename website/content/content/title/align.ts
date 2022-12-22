import generateCode from '@/content/utils/generateCode';

export default generateCode(`import { useState } from 'react';
import { Title, Button, Space } from '${PACKAGE_NAME}';

export default function App() {
  const [align, setAlign] = useState('left');

  const onChangeAlign = (align) => {
    return () => setAlign(align)
  }

  return (
    <View style={styles.center}>
      <Title align={align} level={3}>
        {align}. Beauty Design
      </Title>

      <Space>
        <Button onPress={onChangeAlign('left')}>Left</Button>
        <Button onPress={onChangeAlign('center')}>Center</Button>
        <Button onPress={onChangeAlign('right')}>Right</Button>
      </Space>
    </View>
  );
}`);
