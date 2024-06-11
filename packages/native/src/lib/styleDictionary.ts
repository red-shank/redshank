import { ViewStyle, TextStyle, DimensionValue } from 'react-native';
import { ColorType, FontSizesProps, ZIndexType } from '../context/theme/types';

type ViewStyleKeys = {
  width: ViewStyle['width'];
  height: ViewStyle['height'];
  position: ViewStyle['position'];
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
  backgroundColor: ColorType;
  borderBottomColor: ColorType;
  borderColor: ColorType;
  borderLeftColor: ColorType;
  borderRightColor: ColorType;
  borderTopColor: ColorType;
  shadowColor: ColorType;
  textShadowColor: ColorType;
  background: ColorType;
  bg: ColorType;
  color: ColorType;
  zIndex: keyof ZIndexType | ViewStyle['zIndex'];
  fontSize: FontSizesProps;
  borderRadius: ViewStyle['borderRadius'];
  borderBottomRadius: ViewStyle['borderRadius'];
  borderTopRadius: ViewStyle['borderRadius'];
  borderBottomLeftRadius: ViewStyle['borderBottomLeftRadius'];
  borderBottomRightRadius: ViewStyle['borderBottomRightRadius'];
  borderTopLeftRadius: ViewStyle['borderTopLeftRadius'];
  borderTopRightRadius: ViewStyle['borderTopRightRadius'];
};

type ViewStyleValue = {
  type: 'inherit' | 'color' | 'number' | 'string';
  resolve?: (
    value: DimensionValue | number | string | ColorType,
    acc: ViewStyle
  ) => DimensionValue | ViewStyle;
};

export type SxKeys = keyof ViewStyleKeys & keyof CustomStyleKeys;

export type SxProps = Partial<ViewStyleKeys & CustomStyleKeys>;

type StyleKeysSupported = {
  properties: Record<SxKeys, ViewStyleValue>;
};

const styleDictionary: StyleKeysSupported = {
  properties: {
    // primitive values
    width: { type: 'inherit' },
    height: { type: 'inherit' },
    position: { type: 'inherit' },
    paddingBottom: { type: 'inherit' },
    paddingHorizontal: { type: 'inherit' },
    paddingLeft: { type: 'inherit' },
    paddingRight: { type: 'inherit' },
    paddingTop: { type: 'inherit' },
    paddingVertical: { type: 'inherit' },
    margin: { type: 'inherit' },
    marginBottom: { type: 'inherit' },
    marginHorizontal: { type: 'inherit' },
    marginLeft: { type: 'inherit' },
    marginRight: { type: 'inherit' },
    marginTop: { type: 'inherit' },
    marginVertical: { type: 'inherit' },
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
    zIndex: { type: 'inherit' },
    display: { type: 'inherit' },
    backfaceVisibility: { type: 'inherit' },
    borderBottomWidth: { type: 'inherit' },
    borderLeftWidth: { type: 'inherit' },
    borderStyle: { type: 'inherit' },
    borderRightWidth: { type: 'inherit' },
    borderTopWidth: { type: 'inherit' },
    borderWidth: { type: 'inherit' },
    decomposedMatrix: { type: 'inherit' },
    elevation: { type: 'inherit' },
    fontStyle: { type: 'inherit' },
    fontVariant: { type: 'inherit' },
    fontWeight: { type: 'inherit' },
    lineHeight: { type: 'inherit' },
    letterSpacing: { type: 'inherit' },
    opacity: { type: 'inherit' },
    rotation: { type: 'inherit' },
    scale: { type: 'inherit' },
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
    p: { type: 'number' },
    pb: { type: 'number' },
    pl: { type: 'number' },
    pr: { type: 'number' },
    py: { type: 'number' },
    pt: { type: 'number' },
    px: { type: 'number' },
    m: { type: 'number' },
    mb: { type: 'number' },
    ml: { type: 'number' },
    mr: { type: 'number' },
    mt: { type: 'number' },
    mx: { type: 'number' },
    my: { type: 'number' },
    gap: { type: 'number' },
    // border radius
    borderRadius: { type: 'number' },
    borderBottomRadius: {
      type: 'number',
      resolve: (value: number, acc: ViewStyle) => {
        acc.borderBottomLeftRadius = value;
        acc.borderBottomRightRadius = value;
      }
    },
    borderTopRadius: {
      type: 'number',
      resolve: (value: number, acc: ViewStyle) => {
        acc.borderTopLeftRadius = value;
        acc.borderTopRightRadius = value;
      }
    },
    borderBottomLeftRadius: { type: 'number' },
    borderBottomRightRadius: { type: 'number' },
    borderTopLeftRadius: { type: 'number' },
    borderTopRightRadius: { type: 'number' },
    // Color values
    backgroundColor: { type: 'color' },
    borderColor: { type: 'color' },
    borderBottomColor: { type: 'color' },
    borderLeftColor: { type: 'color' },
    borderRightColor: { type: 'color' },
    borderTopColor: { type: 'color' },
    shadowColor: { type: 'color' },
    textShadowColor: { type: 'color' },
    background: { type: 'color' },
    color: { type: 'color' },
    bg: { type: 'color' },
    fontSize: { type: 'string' },
    fontFamily: { type: 'string' }
  }
};

export const resolverDictionaryKey: Record<keyof CustomStyleKeys, string> = {
  borderRadius: 'borderRadius',
  color: 'color',
  backgroundColor: 'backgroundColor',
  borderBottomColor: 'borderBottomColor',
  borderBottomLeftRadius: 'borderBottomLeftRadius',
  borderBottomRightRadius: 'borderBottomRightRadius',
  borderColor: 'borderColor',
  borderLeftColor: 'borderLeftColor',
  borderRightColor: 'borderRightColor',
  borderTopColor: 'borderTopColor',
  borderBottomRadius: 'borderBottomRadius',
  borderTopRadius: 'borderTopRadius',
  borderTopLeftRadius: 'borderTopLeftRadius',
  borderTopRightRadius: 'borderTopRightRadius',
  fontSize: 'fontSize',
  m: 'margin',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  mt: 'marginTop',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  p: 'padding',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  pt: 'paddingTop',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  gap: 'gap',
  zIndex: 'zIndex',
  shadowColor: 'shadowColor',
  textShadowColor: 'textShadowColor',
  background: 'backgroundColor',
  bg: 'backgroundColor'
};

export default styleDictionary;
