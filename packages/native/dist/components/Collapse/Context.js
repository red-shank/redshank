import React, { createContext, useContext } from 'react';
import { Icon } from '../Icon';
export const defaultContextCollapse = {
    openKeys: [],
    icon: <Icon type="antdesign" name="right"/>,
    borderColor: 'accents7',
    headerColor: 'card',
    contentColor: 'card',
    onChange: () => { },
    iconPosition: 'right',
    showArrow: true,
};
export const CollapseContext = createContext(defaultContextCollapse);
export const useCollapse = () => useContext(CollapseContext);
