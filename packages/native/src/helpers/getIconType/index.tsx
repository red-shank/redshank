import { FunctionComponent } from 'react';
import { RuntimeContextType } from '../../context/runtime/types';

export type IconType =
  | 'antdesign'
  | 'ant-design'
  | 'antd'
  | 'feather'
  | 'font-awesome-6'
  | 'foundation'
  | 'ionicon'
  | 'ionicons'
  | 'material-design-icons'
  | 'octicons'
  | 'octicon'
  | 'lucide'
  /** @deprecated: No maintenance */
  | 'zocial'
  | 'material'
  | 'material-community'
  | 'evilicon'
  | 'entypo'
  | 'font-awesome'
  | 'font-awesome-5'
  | 'simple-line-icon'
  | 'fontisto'
  | string;

const customIcons: Record<string, FunctionComponent> = {};

export const registerCustomIconType = (id: string, customIcon: any) => {
  customIcons[id] = customIcon;
};

export default (
  type: IconType,
  packs: RuntimeContextType['packs']
): FunctionComponent => {
  switch (type) {
    case 'antd':
    case 'antdesign':
    case 'ant-design':
      return packs.get(type) || packs.get('antd');
    case 'ionicon':
    case 'ionicons':
      return packs.get(type) || packs.get('ionicons');
    case 'octicon':
    case 'octicons':
      return packs.get(type) || packs.get('octicons');
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      return packs.get(type) || packs.get('material-design-icons');
  }
};
