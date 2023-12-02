import { ViewStyle, TextStyle } from 'react-native';
import {
  ColorType,
  FontSizesProps,
  SizingType,
  ZIndexType
} from '../context/theme/types';

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
};

// Custom Keys
type CustomStyleKeys = {
  p: number;
  pt: number;
  pb: number;
  pl: number;
  pr: number;
  px: number;
  py: number;
  m: number;
  mt: number;
  mb: number;
  ml: number;
  mr: number;
  mx: number;
  my: number;
  backgroundColor: ColorType;
  borderBottomColor: ColorType;
  borderColor: ColorType;
  borderLeftColor: ColorType;
  borderRightColor: ColorType;
  borderTopColor: ColorType;
  shadowColor: ColorType;
  textShadowColor: ColorType;
  zIndex: ZIndexType;
  fontSize: FontSizesProps;
  borderBottomLeftRadius: SizingType;
  borderBottomRightRadius: SizingType;
  borderRadius: SizingType;
  borderStyle: SizingType;
  borderTopLeftRadius: SizingType;
  borderTopRightRadius: SizingType;
};

type ViewStyleValue = {
  type: 'inherit' | 'color' | 'number' | 'string';
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
    borderBottomLeftRadius: { type: 'inherit' },
    borderBottomRightRadius: { type: 'inherit' },
    borderBottomWidth: { type: 'inherit' },
    borderLeftWidth: { type: 'inherit' },
    borderStyle: { type: 'inherit' },
    borderRadius: { type: 'inherit' },
    borderRightWidth: { type: 'inherit' },
    borderTopLeftRadius: { type: 'inherit' },
    borderTopRightRadius: { type: 'inherit' },
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
    // custom values
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
    backgroundColor: { type: 'color' },
    borderColor: { type: 'color' },
    borderBottomColor: { type: 'color' },
    borderLeftColor: { type: 'color' },
    borderRightColor: { type: 'color' },
    borderTopColor: { type: 'color' },
    shadowColor: { type: 'color' },
    textShadowColor: { type: 'color' },
    fontSize: { type: 'string' },
    fontFamily: { type: 'string' }
  }
};

export const resolverDictionaryKey: Record<keyof CustomStyleKeys, string> = {
  borderRadius: 'borderRadius',
  backgroundColor: 'backgroundColor',
  borderBottomColor: 'borderBottomColor',
  borderBottomLeftRadius: 'borderBottomLeftRadius',
  borderBottomRightRadius: 'borderBottomRightRadius',
  borderColor: 'borderColor',
  borderLeftColor: 'borderLeftColor',
  borderRightColor: 'borderRightColor',
  borderStyle: 'borderStyle',
  borderTopColor: 'borderTopColor',
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
  zIndex: 'zIndex',
  shadowColor: 'shadowColor',
  textShadowColor: 'textShadowColor'
};

export default styleDictionary;
