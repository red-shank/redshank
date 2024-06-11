import React, { createContext, useContext } from 'react';
import { Icon } from '../Icon';

import { CollapseContextProps } from './types';

export const defaultContextCollapse: CollapseContextProps = {
  openKeys: [],
  icon: <Icon type="antdesign" name="right" />,
  borderColor: 'accents7',
  headerColor: 'card',
  contentColor: 'card',
  onChange: () => {},
  iconPosition: 'right',
  showArrow: true,
};

export const CollapseContext = createContext<CollapseContextProps>(
  defaultContextCollapse
);

export const useCollapse = () => useContext(CollapseContext);
