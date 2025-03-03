import { PACKAGE_NAME } from '@/config';
import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(`<Center flex={1}>
            <Icon type="antdesign" name="like1" />
            <Icon type="antdesign" name="gift" size={50} />
            <Icon
              size={50}
              color="error"
              type="antdesign"
              name="heart"
              onPress={() => alert('Press here!')}
            />
          </Center>`, {
  package: 'Center, Icon',
  icons: [{
    key: 'antd',
    value: 'AntDesign'
  }]
});
