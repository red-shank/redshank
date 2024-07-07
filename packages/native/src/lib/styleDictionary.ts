import { DimensionValue, TextStyle, ViewStyle } from 'react-native';
import {
  BorderRadiusType,
  ColorName,
  FontSizesProps,
  ThemeProps,
  ZIndexType
} from '../context/theme/types';

type ViewStyleKeys = {
  width: ViewStyle['width'];
  height: ViewStyle['height'];
  position: ViewStyle['position'];
  padding: ViewStyle['padding'];
  paddingBottom: ViewStyle['paddingBottom'];
  paddingHorizontal: ViewStyle['paddingHorizontal'];
  paddingLeft: ViewStyle['paddingLeft'];
  paddingRight: ViewStyle['paddingRight'];
  paddingTop: ViewStyle['paddingTop'];
  paddingVertical: ViewStyle['paddingVertical'];
  margin: ViewStyle['margin'];
  marginBottom: ViewStyle['marginBottom'];
  marginHorizontal: ViewStyle['marginHorizontal'];
  marginLeft: ViewStyle['marginLeft'];
  marginRight: ViewStyle['marginRight'];
  marginTop: ViewStyle['marginTop'];
  marginVertical: ViewStyle['marginVertical'];
  bottom: ViewStyle['bottom'];
  left: ViewStyle['left'];
  right: ViewStyle['right'];
  top: ViewStyle['top'];
  flex: ViewStyle['flex'];
  flexGrow: ViewStyle['flexGrow'];
  flexShrink: ViewStyle['flexShrink'];
  flexBasis: ViewStyle['flexBasis'];
  flexWrap: ViewStyle['flexWrap'];
  flexDirection: ViewStyle['flexDirection'];
  justifyContent: ViewStyle['justifyContent'];
  alignItems: ViewStyle['alignItems'];
  alignSelf: ViewStyle['alignSelf'];
  overflow: ViewStyle['overflow'];
  display: ViewStyle['display'];
  backfaceVisibility: ViewStyle['backfaceVisibility'];
  opacity: ViewStyle['opacity'];
  elevation: ViewStyle['elevation'];
  shadowOffset: ViewStyle['shadowOffset'];
  shadowOpacity: ViewStyle['shadowOpacity'];
  shadowRadius: ViewStyle['shadowRadius'];
  transform: ViewStyle['transform'];
  transformMatrix: ViewStyle['transformMatrix'];
  scaleX: ViewStyle['scaleX'];
  scaleY: ViewStyle['scaleY'];
  rotation: ViewStyle['rotation'];
  translateX: ViewStyle['translateX'];
  translateY: ViewStyle['translateY'];
  textAlign: TextStyle['textAlign'];
  textAlignVertical: TextStyle['textAlignVertical'];
  fontFamily: TextStyle['fontFamily'];
  fontStyle: TextStyle['fontStyle'];
  fontWeight: TextStyle['fontWeight'];
  fontVariant: TextStyle['fontVariant'];
  textShadowOffset: TextStyle['textShadowOffset'];
  textShadowRadius: TextStyle['textShadowRadius'];
  letterSpacing: TextStyle['letterSpacing'];
  lineHeight: TextStyle['lineHeight'];
  borderBottomWidth: ViewStyle['borderBottomWidth'];
  borderLeftWidth: ViewStyle['borderLeftWidth'];
  borderRightWidth: ViewStyle['borderRightWidth'];
  borderTopWidth: ViewStyle['borderTopWidth'];
  borderWidth: ViewStyle['borderWidth'];
  borderStyle: ViewStyle['borderStyle'];
};

// Custom Keys
type CustomStyleKeys = {
  p: ViewStyle['padding'];
  pt: ViewStyle['paddingTop'];
  pb: ViewStyle['paddingBottom'];
  pl: ViewStyle['paddingLeft'];
  pr: ViewStyle['paddingRight'];
  px: ViewStyle['paddingHorizontal'];
  py: ViewStyle['paddingVertical'];
  m: ViewStyle['margin'];
  mt: ViewStyle['marginTop'];
  mb: ViewStyle['marginBottom'];
  ml: ViewStyle['marginLeft'];
  mr: ViewStyle['marginRight'];
  mx: ViewStyle['marginHorizontal'];
  my: ViewStyle['marginVertical'];
  gap: ViewStyle['gap'];
  backgroundColor: ColorName;
  borderBottomColor: ColorName;
  borderColor: ColorName;
  borderLeftColor: ColorName;
  borderRightColor: ColorName;
  borderTopColor: ColorName;
  shadowColor: ColorName;
  textShadowColor: ColorName;
  background: ColorName;
  bg: ColorName;
  color: ColorName;
  zIndex: keyof ZIndexType | ViewStyle['zIndex'];
  fontSize: keyof FontSizesProps | TextStyle['fontSize'];
  // border radius
  rounded: keyof BorderRadiusType | ViewStyle['borderRadius'];
  borderRadius: keyof BorderRadiusType | ViewStyle['borderRadius'];
  roundedLeft: keyof BorderRadiusType | ViewStyle['borderRadius'];
  roundedRight: keyof BorderRadiusType | ViewStyle['borderRadius'];
  roundedBottom: keyof BorderRadiusType | ViewStyle['borderRadius'];
  roundedTop: keyof BorderRadiusType | ViewStyle['borderRadius'];
  borderBottomLeftRadius: keyof BorderRadiusType | ViewStyle['borderRadius'];
  borderBottomRightRadius: keyof BorderRadiusType | ViewStyle['borderRadius'];
  borderTopLeftRadius: keyof BorderRadiusType | ViewStyle['borderRadius'];
  borderTopRightRadius: keyof BorderRadiusType | ViewStyle['borderRadius'];
};

type ViewStyleValue = {
  type: 'inherit' | 'color' | 'number' | 'string';
  resolve?: (
    value: DimensionValue | number | string | ColorName,
    acc: ViewStyle,
    theme: ThemeProps
  ) => DimensionValue | ViewStyle | void | string;
};

export type SxKeys = keyof CustomStyleKeys | keyof ViewStyleKeys;

export type Keys = ViewStyleKeys & CustomStyleKeys;

export type SxProps = Partial<Keys>;

type StyleKeysSupported = {
  properties: Record<SxKeys, ViewStyleValue>;
};

function getValueNumberOrPercentage(
  _value: number | `${number}%` | 'auto',
  spacing: number
) {
  return Number.isNaN(Number(_value)) ? _value : Number(_value) * spacing;
}

function getValueNumber(
  value: number | string,
  acc: object,
  spacing: number
): number | undefined {
  return (acc[value] || value) * spacing;
}

const styleDictionary: StyleKeysSupported = {
  properties: {
    // primitive values
    width: { type: 'inherit' },
    height: { type: 'inherit' },
    position: { type: 'inherit' },
    padding: {
      type: 'inherit',
      resolve(_value: number | `${number}%`, _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    paddingBottom: {
      type: 'inherit',
      resolve(_value: number | `${number}%`, _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    paddingHorizontal: {
      type: 'inherit',
      resolve(_value: number | `${number}%`, _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    paddingLeft: {
      type: 'inherit',
      resolve(_value: number | `${number}%`, _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    paddingRight: {
      type: 'inherit',
      resolve(_value: number | `${number}%`, _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    paddingTop: {
      type: 'inherit',
      resolve(_value: number | `${number}%`, _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    paddingVertical: {
      type: 'inherit',
      resolve(_value: number | `${number}%`, _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    margin: {
      type: 'inherit',
      resolve(_value: number | `${number}%` | 'auto', _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    marginBottom: {
      type: 'inherit',
      resolve(_value: number | `${number}%` | 'auto', _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    marginHorizontal: {
      type: 'inherit',
      resolve(_value: number | `${number}%` | 'auto', _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    marginLeft: {
      type: 'inherit',
      resolve(_value: number | `${number}%` | 'auto', _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    marginRight: {
      type: 'inherit',
      resolve(_value: number | `${number}%` | 'auto', _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    marginTop: {
      type: 'inherit',
      resolve(_value: number | `${number}%` | 'auto', _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    marginVertical: {
      type: 'inherit',
      resolve(_value: number | `${number}%` | 'auto', _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    bottom: { type: 'inherit' },
    left: { type: 'inherit' },
    right: { type: 'inherit' },
    top: { type: 'inherit' },
    flex: { type: 'inherit' },
    flexGrow: { type: 'inherit' },
    flexShrink: { type: 'inherit' },
    flexBasis: { type: 'inherit' },
    flexWrap: { type: 'inherit' },
    flexDirection: { type: 'inherit' },
    justifyContent: { type: 'inherit' },
    alignItems: { type: 'inherit' },
    alignSelf: { type: 'inherit' },
    overflow: { type: 'inherit' },
    zIndex: {
      type: 'inherit',
      resolve: (
        value: CustomStyleKeys['zIndex'],
        _acc: ViewStyle,
        theme: ThemeProps
      ) => {
        const resolveKeys = ['1', '2', '3', '4', '5', '10', 'max'];
        return resolveKeys.includes(value as string)
          ? theme.zIndices[value as keyof ZIndexType] || (value as number)
          : (value as number);
      }
    },
    display: { type: 'inherit' },
    backfaceVisibility: { type: 'inherit' },
    borderBottomWidth: { type: 'inherit' },
    borderLeftWidth: { type: 'inherit' },
    borderStyle: { type: 'inherit' },
    borderRightWidth: { type: 'inherit' },
    borderTopWidth: { type: 'inherit' },
    borderWidth: { type: 'inherit' },
    // decomposedMatrix: { type: 'inherit' },
    elevation: { type: 'inherit' },
    fontStyle: { type: 'inherit' },
    fontVariant: { type: 'inherit' },
    fontWeight: { type: 'inherit' },
    lineHeight: { type: 'inherit' },
    letterSpacing: { type: 'inherit' },
    opacity: { type: 'inherit' },
    rotation: { type: 'inherit' },
    // scale: { type: 'inherit' },
    scaleX: { type: 'inherit' },
    scaleY: { type: 'inherit' },
    translateY: { type: 'inherit' },
    translateX: { type: 'inherit' },
    transformMatrix: { type: 'inherit' },
    transform: { type: 'inherit' },
    textShadowRadius: { type: 'inherit' },
    textShadowOffset: { type: 'inherit' },
    textAlignVertical: { type: 'inherit' },
    textAlign: { type: 'inherit' },
    shadowRadius: { type: 'inherit' },
    shadowOpacity: { type: 'inherit' },
    shadowOffset: { type: 'inherit' },
    // Number values
    p: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.padding = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    pb: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.paddingBottom = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    pl: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.paddingLeft = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    pr: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.paddingRight = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    py: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.paddingVertical = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    pt: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.paddingTop = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    px: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.paddingHorizontal = getValueNumberOrPercentage(
          value,
          theme.spacing
        );
      }
    },
    m: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.margin = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    mb: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.marginBottom = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    ml: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.marginLeft = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    mr: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.marginRight = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    mt: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.marginTop = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    mx: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.marginHorizontal = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    my: {
      type: 'number',
      resolve(value: number, acc, theme) {
        acc.marginVertical = getValueNumberOrPercentage(value, theme.spacing);
      }
    },
    gap: {
      type: 'number',
      resolve(_value: number, _, theme) {
        return getValueNumberOrPercentage(_value, theme.spacing);
      }
    },
    // border radius
    rounded: {
      type: 'number',
      resolve: (_value: number, acc, theme) => {
        acc.borderRadius = getValueNumber(
          _value,
          theme?.borderRadius,
          theme?.spacing
        );
      }
    },
    borderRadius: {
      type: 'number',
      resolve: (_value: number, _, theme) => {
        return getValueNumber(_value, theme?.borderRadius, theme?.spacing);
      }
    },
    roundedBottom: {
      type: 'number',
      resolve: (_value: number, acc, theme) => {
        const value = getValueNumber(
          _value,
          theme?.borderRadius,
          theme?.spacing
        );
        acc.borderBottomLeftRadius = value;
        acc.borderBottomRightRadius = value;
      }
    },
    roundedTop: {
      type: 'number',
      resolve: (_value: number, acc, theme) => {
        const value = getValueNumber(
          _value,
          theme?.borderRadius,
          theme?.spacing
        );
        acc.borderTopLeftRadius = value;
        acc.borderTopRightRadius = value;
      }
    },
    roundedLeft: {
      type: 'number',
      resolve: (_value: number, acc, theme) => {
        const value = getValueNumber(
          _value,
          theme?.borderRadius,
          theme?.spacing
        );
        acc.borderTopLeftRadius = value;
        acc.borderBottomLeftRadius = value;
      }
    },
    roundedRight: {
      type: 'number',
      resolve: (_value: number, acc, theme) => {
        const value = getValueNumber(
          _value,
          theme?.borderRadius,
          theme?.spacing
        );
        acc.borderTopRightRadius = value;
        acc.borderBottomRightRadius = value;
      }
    },
    borderBottomLeftRadius: {
      type: 'number',
      resolve: (_value: number, acc, theme) => {
        acc.borderBottomLeftRadius = getValueNumber(
          _value,
          theme?.borderRadius,
          theme?.spacing
        );
      }
    },
    borderBottomRightRadius: {
      type: 'number',
      resolve: (_value: number, acc, theme) => {
        acc.borderBottomRightRadius = getValueNumber(
          _value,
          theme?.borderRadius,
          theme?.spacing
        );
      }
    },
    borderTopLeftRadius: {
      type: 'number',
      resolve: (_value: number, acc, theme) => {
        acc.borderTopLeftRadius = getValueNumber(
          _value,
          theme?.borderRadius,
          theme?.spacing
        );
      }
    },
    borderTopRightRadius: {
      type: 'number',
      resolve: (_value: number, acc, theme) => {
        acc.borderTopRightRadius = getValueNumber(
          _value,
          theme?.borderRadius,
          theme?.spacing
        );
      }
    },
    // Color values
    backgroundColor: {
      type: 'color',
      resolve(value: string, _, theme) {
        return theme.colors.get(value);
      }
    },
    borderColor: {
      type: 'color',
      resolve(value: string, _, theme) {
        return theme.colors.get(value);
      }
    },
    borderBottomColor: {
      type: 'color',
      resolve(value: string, _, theme) {
        return theme.colors.get(value);
      }
    },
    borderLeftColor: {
      type: 'color',
      resolve(value: string, _, theme) {
        return theme.colors.get(value);
      }
    },
    borderRightColor: {
      type: 'color',
      resolve(value: string, _, theme) {
        return theme.colors.get(value);
      }
    },
    borderTopColor: {
      type: 'color',
      resolve(value: string, _, theme) {
        return theme.colors.get(value);
      }
    },
    shadowColor: {
      type: 'color',
      resolve(value: string, _, theme) {
        return theme.colors.get(value);
      }
    },
    textShadowColor: {
      type: 'color',
      resolve(value: string, _, theme) {
        return theme.colors.get(value);
      }
    },
    background: {
      type: 'color',
      resolve(value: string, _, theme) {
        return theme.colors.get(value);
      }
    },
    color: {
      type: 'color',
      resolve(value: string, _, theme) {
        return theme.colors.get(value);
      }
    },
    bg: {
      type: 'color',
      resolve(value: string, acc, theme) {
        acc.backgroundColor = theme.colors.get(value);
      }
    },
    // text values
    fontSize: {
      type: 'string',
      resolve(value: string, _, theme) {
        return theme.fontSizes[value] || value;
      }
    },
    fontFamily: {
      type: 'string',
      resolve(value: string, _, theme) {
        return theme.fonts[value] || value;
      }
    }
  }
};

export default styleDictionary;
