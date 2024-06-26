import { FunctionComponent } from 'react';
import { IconType } from '../components/Icon';

const customIcons: Record<string, FunctionComponent> = {};

export const registerCustomIconType = (id: string, customIcon: any) => {
  customIcons[id] = customIcon;
};

export default (type: IconType): FunctionComponent => {
  switch (type) {
    case 'zocial':
      return require('react-native-vector-icons/Zocial')?.default;
    case 'octicon':
      return require('react-native-vector-icons/Octicons')?.default;
    case 'material':
      return require('react-native-vector-icons/MaterialIcons')?.default;
    case 'material-community':
      return require('react-native-vector-icons/MaterialCommunityIcons')
        ?.default;
    case 'ionicon':
      return require('react-native-vector-icons/Ionicons')?.default;
    case 'foundation':
      return require('react-native-vector-icons/Foundation')?.default;
    case 'evilicon':
      return require('react-native-vector-icons/EvilIcons')?.default;
    case 'entypo':
      return require('react-native-vector-icons/Entypo')?.default;
    case 'font-awesome':
      return require('react-native-vector-icons/FontAwesome')?.default;
    case 'font-awesome-5':
      return require('react-native-vector-icons/FontAwesome5')?.default;
    case 'font-awesome-6':
      try {
        return require('react-native-vector-icons/FontAwesome6')?.default;
      } catch (e) {
        return require('react-native-vector-icons/FontAwesome5')?.default;
      }
    case 'simple-line-icon':
      return require('react-native-vector-icons/SimpleLineIcons')?.default;
    case 'feather':
      return require('react-native-vector-icons/Feather')?.default;
    case 'ant-design':
    case 'antdesign':
      return require('react-native-vector-icons/AntDesign')?.default;
    case 'fontisto':
      return require('react-native-vector-icons/Fontisto')?.default;
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      return require('react-native-vector-icons/Ionicons')?.default;
  }
};
