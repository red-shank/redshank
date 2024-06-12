import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export default generateCode(`import { Button, Space, Icon } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <View style={styles.center}>
      <Space>
        <Button
          icon={
            <Icon
              color="yellow400"
              type="antdesign"
              name="smile-circle"
            />
          }
        >
          Icon
        </Button>
        <Button
          prefix={
            <Icon
              color="error"
              type="antdesign"
              name="heart"
            />
          }
        >
          Prefix
        </Button>
        <Button
          suffix={
            <Icon
              size={25}
              type="antdesign"
              name="like1"
            />
          }
        >
          Suffix
        </Button>
      </Space>
    </View>
  );
}`);
