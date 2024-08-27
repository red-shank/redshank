import { BorderRadiusType } from './types';

export const zIndices = {
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  10: 1000,
  max: 9999
};

export const colorsBase = {
  primary: {
    main: '#0070F3',
    dark: '#1565c0',
    light: '#42a5f5'
  },
  secondary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2'
  },
  success: {
    main: '#17c964',
    light: '#4caf50',
    dark: '#1b5e20'
  },
  info: {
    main: '#3D9CF7',
    light: '#03a9f4',
    dark: '#01579b'
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100'
  },
  error: {
    main: '#ff244e',
    light: '#f84065',
    dark: '#c21e3e'
  },
  card: '#16181A',
  message: '#2a2626',
  modal: '#1C1C1E',
  modalMask: 'rgba(0,0,0,0.5)',
  hover: '#63636a',
  imagePlaceholder: '#16181A',
  blue: {
    '100': '#bfd8fc',
    '200': '#98D5FD',
    '300': '#64B8FB',
    '400': '#3D9CF7',
    '500': '#0070F3',
    '600': '#0056D0',
    '700': '#0040AE',
    '800': '#002D8C',
    '900': '#001835'
  },
  purple: {
    '100': '#dbc8f0',
    '200': '#DDA9F9',
    '300': '#C17CEF',
    '400': '#A258DF',
    '500': '#7928ca',
    '600': '#5E1DAD',
    '700': '#461491',
    '800': '#310C75',
    '900': '#1c0631'
  },
  green: {
    '100': '#c5f0d5',
    '200': '#A1F9AC',
    '300': '#6FEE8D',
    '400': '#4ADE7B',
    '500': '#17c964',
    '600': '#10AC63',
    '700': '#0B905F',
    '800': '#077457',
    '900': '#033116'
  },
  yellow: {
    '100': '#fce6c7',
    '200': '#FEE7A6',
    '300': '#FCD57A',
    '400': '#F9C258',
    '500': '#f5a623',
    '600': '#D28519',
    '700': '#B06811',
    '800': '#8E4D0B',
    '900': '#3d2705'
  },
  red: {
    '100': '#fbc4d5',
    '200': '#FDA0A5',
    '300': '#FB7085',
    '400': '#F74C77',
    '500': '#f21361',
    '600': '#D00D65',
    '700': '#AE0963',
    '800': '#8C065C',
    '900': '#3c0216'
  },
  cyan: {
    '100': '#EEFFF4',
    '200': '#DDFFED',
    '300': '#CCFFE9',
    '400': '#BFFFEA',
    '500': '#AAFFEC',
    '600': '#7CDBCF',
    '700': '#55B7B4',
    '800': '#368D93',
    '900': '#206C7A'
  },
  pink: {
    '100': '#FFDBE7',
    '200': '#FFB8D6',
    '300': '#FF94CC',
    '400': '#FF7ACC',
    '500': '#ff4ecd',
    '600': '#DB39BD',
    '700': '#B727AA',
    '800': '#921893',
    '900': '#6E0E7A'
  },
  gray: {
    '100': '#F4F4F4',
    '200': '#EAEAEA',
    '300': '#C1C1C1',
    '400': '#999999',
    '500': '#888888',
    '600': '#666666',
    '700': '#444444',
    '800': '#333333',
    '900': '#111111'
  },
  white: '#ffffff',
  black: '#000000'
};

export const colorsLight = {
  ...colorsBase,
  card: '#ffffff',
  message: '#ffffff',
  modal: '#ffffff',
  popConfirm: '#e9e9e9',
  hover: '#F3F2F9',
  imagePlaceholder: '#999999',
  input: '#f4f4f4',
  accents: {
    '1': '#111111',
    '2': '#333333',
    '3': '#444444',
    '4': '#666666',
    '5': '#888888',
    '6': '#999999',
    '7': '#C1C1C1',
    '8': '#EAEAEA',
    '9': '#F4F4F4'
  },
  background: {
    main: '#f4f4f4',
    foreground: '#000000'
  },
  notification: '#ffffff',
  text: {
    main: '#333333',
    secondary: '#666666',
    light: '#cbcbcb',
    extraLight: '#dcdcdc'
  },
  border: '#a1a1a1',
  calendar: '#ffffff',
  link: '#3D9CF7',
  selection: '#461491',
  code: '#6cc0e1',
  radioButtonColor: {
    active: colorsBase.primary.main,
    inactive: '#e1e1e1'
  },
  radioButtonLabel: {
    active: colorsBase.white,
    inactive: '#333333'
  },
  header: '#ffffff',
  stickyHeader: '#ffffff'
};

export const colorsDark = {
  ...colorsBase,
  input: '#111111',
  accents: {
    '1': '#F4F4F4',
    '2': '#EAEAEA',
    '3': '#C1C1C1',
    '4': '#999999',
    '5': '#888888',
    '6': '#666666',
    '7': '#444444',
    '8': '#333333',
    '9': '#111111'
  },
  background: {
    main: '#000000',
    foreground: '#ffffff'
  },
  popConfirm: '#1C1C1E',
  notification: '#000000',
  border: '#777777',
  text: {
    main: '#ffffff',
    light: '#dddddd',
    extraLight: '#ededed',
    secondary: '#9a9a9a'
  },
  calendar: '#000000',
  link: '#0070F3',
  selection: '#98D5FD',
  code: '#DB39BD',
  radioButtonColor: {
    active: colorsBase.primary.main,
    inactive: '#252525'
  },
  radioButtonLabel: {
    active: colorsBase.white,
    inactive: '#ffffff'
  },
  header: '#16181A',
  stickyHeader: '#16181A'
};

export const sizes = {
  small: 32,
  middle: 45,
  large: 50,
  xLarge: 55
};

export const borderRadius: BorderRadiusType = {
  compact: 1,
  base: 2,
  max: 100,
  'avatar.square': 1,
  'button.round': 1,
  'button.circle': 10,
  carousel: 2,
  tab: 1,
  alert: 2,
  collapse: 3,
  progress: 3,
  card: 2,
  'badge.square': 1,
  modal: 2,
  controller: 5,
  'input.square': 0.5,
  'input.rounded': 1.5,
  'input.circle': 12,
  'switch.square': 0.5,
  'switch.rounded': 1.2,
  'switch.circle': 12,
  'radio.square': 0.5,
  'radio.rounded': 1.2,
  'radio.circle': 12
};

export const paddingInput = 1.5;
