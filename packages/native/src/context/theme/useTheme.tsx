import React from 'react';
import { ThemeContext } from './context';

export default function useTheme() {
  return React.useContext(ThemeContext);
}
