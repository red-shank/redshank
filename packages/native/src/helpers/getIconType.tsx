import { IconType } from '../Icon';

const customIcons: any = {};

export const registerCustomIconType = (id: string, customIcon: any) => {
  customIcons[id] = customIcon;
};

export default (type: IconType): any => {
  switch (type) {
    case 'zocial':
      return (
        require('react-native-vector-icons/Zocial').default ||
        require('@expo/vector-icons/Ionicons').default
      );
    case 'octicon':
      return (
        require('react-native-vector-icons/Octicons').default ||
        require('@expo/vector-icons/Octicons').default
      );
    case 'material':
      return (
        require('react-native-vector-icons/MaterialIcons').default ||
        require('@expo/vector-icons/MaterialIcons').default
      );
    case 'material-community':
      return (
        require('react-native-vector-icons/MaterialCommunityIcons').default ||
        require('@expo/vector-icons/MaterialCommunityIcons').default
      );
    case 'ionicon':
      return (
        require('react-native-vector-icons/Ionicons').default ||
        require('@expo/vector-icons/Ionicons').default
      );
    case 'foundation':
      return (
        require('react-native-vector-icons/Foundation').default ||
        require('@expo/vector-icons/Foundation').default
      );
    case 'evilicon':
      return (
        require('react-native-vector-icons/EvilIcons').default ||
        require('@expo/vector-icons/EvilIcons').default
      );
    case 'entypo':
      return (
        require('react-native-vector-icons/Entypo').default ||
        require('@expo/vector-icons/Entypo').default
      );
    case 'font-awesome':
      return (
        require('react-native-vector-icons/FontAwesome').default ||
        require('@expo/vector-icons/FontAwesome').default
      );
    case 'font-awesome-5':
      return (
        require('react-native-vector-icons/FontAwesome5').default ||
        require('@expo/vector-icons/FontAwesome5').default
      );
    case 'simple-line-icon':
      return (
        require('react-native-vector-icons/SimpleLineIcons').default ||
        require('@expo/vector-icons/SimpleLineIcons').default
      );
    case 'feather':
      return (
        require('react-native-vector-icons/Feather').default ||
        require('@expo/vector-icons/Feather').default
      );
    case 'antdesign':
    case 'ant-design':
      return (
        require('react-native-vector-icons/AntDesign').default ||
        require('@expo/vector-icons/AntDesign').default
      );
    case 'fontisto':
      return (
        require('react-native-vector-icons/Fontisto').default ||
        require('@expo/vector-icons/Fontisto').default
      );
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      return (
        require('react-native-vector-icons/Ionicons').default ||
        require('@expo/vector-icons/Ionicons').default
      );
  }
};
