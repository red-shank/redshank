import { createTheme } from '@nextui-org/react';

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      codeBackground: '#363449',
      national: '#1A9D90',
      footer: 'rgb(255, 255, 255, 0.6)',
      dots: '#525252'
    }
  }
});

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      national: '#1A9D90',
      codeBackground: '#16181A',
      footer: 'rgb(100, 100, 100, 0.2)',
      dots: '#57575f',
      background: '#1E2024',
      backgroundAlpha: 'rgba(26,27,32,0.6)'
    }
  }
});
