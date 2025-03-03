import { IconType } from '../components/Icon';

export default (type: IconType, extraProps: any) => {
  switch (type) {
    // case 'font-awesome':
    case 'font-awesome-6':
      return {
        solid: extraProps.solid || false,
        brand: extraProps.brand || false
      };
    default:
      return {};
  }
};
