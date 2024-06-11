import { ThemeProps } from '../context/theme/types';
import { SxProps } from './styleDictionary';
import { DimensionValue } from 'react-native';
export declare function extractSxProps({ otherProps, sx }: {
    sx: SxProps;
    otherProps: Partial<SxProps>;
}): {
    width?: DimensionValue;
    height?: DimensionValue;
    position?: "absolute" | "relative" | "static";
    paddingBottom?: DimensionValue;
    paddingHorizontal?: DimensionValue;
    paddingLeft?: DimensionValue;
    paddingRight?: DimensionValue;
    paddingTop?: DimensionValue;
    paddingVertical?: DimensionValue;
    margin?: DimensionValue;
    marginBottom?: DimensionValue;
    marginHorizontal?: DimensionValue;
    marginLeft?: DimensionValue;
    marginRight?: DimensionValue;
    marginTop?: DimensionValue;
    marginVertical?: DimensionValue;
    bottom?: DimensionValue;
    left?: DimensionValue;
    right?: DimensionValue;
    top?: DimensionValue;
    flex?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: DimensionValue;
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    alignItems?: import("react-native").FlexAlignType;
    alignSelf?: "auto" | import("react-native").FlexAlignType;
    overflow?: "visible" | "hidden" | "scroll";
    display?: "none" | "flex";
    backfaceVisibility?: "visible" | "hidden";
    opacity?: import("react-native").AnimatableNumericValue;
    elevation?: number;
    shadowOffset?: Readonly<{
        width: number;
        height: number;
    }>;
    shadowOpacity?: import("react-native").AnimatableNumericValue;
    shadowRadius?: number;
    transform?: string | (({
        perspective: import("react-native").AnimatableNumericValue;
    } & {
        rotate?: never;
        rotateX?: never;
        rotateY?: never;
        rotateZ?: never;
        scale?: never;
        scaleX?: never;
        scaleY?: never;
        translateX?: never;
        translateY?: never;
        skewX?: never;
        skewY?: never;
        matrix?: never;
    }) | ({
        rotate: import("react-native").AnimatableStringValue;
    } & {
        perspective?: never;
        rotateX?: never;
        rotateY?: never;
        rotateZ?: never;
        scale?: never;
        scaleX?: never;
        scaleY?: never;
        translateX?: never;
        translateY?: never;
        skewX?: never;
        skewY?: never;
        matrix?: never;
    }) | ({
        rotateX: import("react-native").AnimatableStringValue;
    } & {
        perspective?: never;
        rotate?: never;
        rotateY?: never;
        rotateZ?: never;
        scale?: never;
        scaleX?: never;
        scaleY?: never;
        translateX?: never;
        translateY?: never;
        skewX?: never;
        skewY?: never;
        matrix?: never;
    }) | ({
        rotateY: import("react-native").AnimatableStringValue;
    } & {
        perspective?: never;
        rotate?: never;
        rotateX?: never;
        rotateZ?: never;
        scale?: never;
        scaleX?: never;
        scaleY?: never;
        translateX?: never;
        translateY?: never;
        skewX?: never;
        skewY?: never;
        matrix?: never;
    }) | ({
        rotateZ: import("react-native").AnimatableStringValue;
    } & {
        perspective?: never;
        rotate?: never;
        rotateX?: never;
        rotateY?: never;
        scale?: never;
        scaleX?: never;
        scaleY?: never;
        translateX?: never;
        translateY?: never;
        skewX?: never;
        skewY?: never;
        matrix?: never;
    }) | ({
        scale: import("react-native").AnimatableNumericValue;
    } & {
        perspective?: never;
        rotate?: never;
        rotateX?: never;
        rotateY?: never;
        rotateZ?: never;
        scaleX?: never;
        scaleY?: never;
        translateX?: never;
        translateY?: never;
        skewX?: never;
        skewY?: never;
        matrix?: never;
    }) | ({
        scaleX: import("react-native").AnimatableNumericValue;
    } & {
        perspective?: never;
        rotate?: never;
        rotateX?: never;
        rotateY?: never;
        rotateZ?: never;
        scale?: never;
        scaleY?: never;
        translateX?: never;
        translateY?: never;
        skewX?: never;
        skewY?: never;
        matrix?: never;
    }) | ({
        scaleY: import("react-native").AnimatableNumericValue;
    } & {
        perspective?: never;
        rotate?: never;
        rotateX?: never;
        rotateY?: never;
        rotateZ?: never;
        scale?: never;
        scaleX?: never;
        translateX?: never;
        translateY?: never;
        skewX?: never;
        skewY?: never;
        matrix?: never;
    }) | ({
        translateX: import("react-native").AnimatableNumericValue | `${number}%`;
    } & {
        perspective?: never;
        rotate?: never;
        rotateX?: never;
        rotateY?: never;
        rotateZ?: never;
        scale?: never;
        scaleX?: never;
        scaleY?: never;
        translateY?: never;
        skewX?: never;
        skewY?: never;
        matrix?: never;
    }) | ({
        translateY: import("react-native").AnimatableNumericValue | `${number}%`;
    } & {
        perspective?: never;
        rotate?: never;
        rotateX?: never;
        rotateY?: never;
        rotateZ?: never;
        scale?: never;
        scaleX?: never;
        scaleY?: never;
        translateX?: never;
        skewX?: never;
        skewY?: never;
        matrix?: never;
    }) | ({
        skewX: import("react-native").AnimatableStringValue;
    } & {
        perspective?: never;
        rotate?: never;
        rotateX?: never;
        rotateY?: never;
        rotateZ?: never;
        scale?: never;
        scaleX?: never;
        scaleY?: never;
        translateX?: never;
        translateY?: never;
        skewY?: never;
        matrix?: never;
    }) | ({
        skewY: import("react-native").AnimatableStringValue;
    } & {
        perspective?: never;
        rotate?: never;
        rotateX?: never;
        rotateY?: never;
        rotateZ?: never;
        scale?: never;
        scaleX?: never;
        scaleY?: never;
        translateX?: never;
        translateY?: never;
        skewX?: never;
        matrix?: never;
    }) | ({
        matrix: import("react-native").AnimatableNumericValue[];
    } & {
        perspective?: never;
        rotate?: never;
        rotateX?: never;
        rotateY?: never;
        rotateZ?: never;
        scale?: never;
        scaleX?: never;
        scaleY?: never;
        translateX?: never;
        translateY?: never;
        skewX?: never;
        skewY?: never;
    }))[];
    transformMatrix?: number[];
    scaleX?: import("react-native").AnimatableNumericValue;
    scaleY?: import("react-native").AnimatableNumericValue;
    rotation?: import("react-native").AnimatableNumericValue;
    translateX?: import("react-native").AnimatableNumericValue;
    translateY?: import("react-native").AnimatableNumericValue;
    textAlign?: "auto" | "center" | "left" | "right" | "justify";
    textAlignVertical?: "auto" | "center" | "bottom" | "top";
    fontFamily?: string;
    fontStyle?: "normal" | "italic";
    fontWeight?: "black" | 600 | 100 | 200 | 300 | 400 | 500 | "thin" | "light" | "regular" | "medium" | "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | 700 | 800 | 900 | "ultralight" | "semibold" | "condensedBold" | "condensed" | "heavy";
    fontVariant?: import("react-native").FontVariant[];
    textShadowOffset?: {
        width: number;
        height: number;
    };
    textShadowRadius?: number;
    letterSpacing?: number;
    lineHeight?: number;
    borderBottomWidth?: number;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    borderTopWidth?: number;
    borderWidth?: number;
    borderStyle?: "solid" | "dotted" | "dashed";
    p?: DimensionValue;
    pt?: DimensionValue;
    pb?: DimensionValue;
    pl?: DimensionValue;
    pr?: DimensionValue;
    px?: DimensionValue;
    py?: DimensionValue;
    m?: DimensionValue;
    mt?: DimensionValue;
    mb?: DimensionValue;
    ml?: DimensionValue;
    mr?: DimensionValue;
    mx?: DimensionValue;
    my?: DimensionValue;
    gap?: number;
    backgroundColor?: string;
    borderBottomColor?: string;
    borderColor?: string;
    borderLeftColor?: string;
    borderRightColor?: string;
    borderTopColor?: string;
    shadowColor?: string;
    textShadowColor?: string;
    background?: string;
    bg?: string;
    color?: string;
    zIndex?: number | "max";
    fontSize?: import("../context/theme/types").FontSizesProps;
    borderRadius?: import("react-native").AnimatableNumericValue;
    borderBottomRadius?: import("react-native").AnimatableNumericValue;
    borderTopRadius?: import("react-native").AnimatableNumericValue;
    borderBottomLeftRadius?: import("react-native").AnimatableNumericValue;
    borderBottomRightRadius?: import("react-native").AnimatableNumericValue;
    borderTopLeftRadius?: import("react-native").AnimatableNumericValue;
    borderTopRightRadius?: import("react-native").AnimatableNumericValue;
};
export declare function extractRestProps(props: object): object;
export declare function createStyleFromSx({ sx, theme }: {
    theme: ThemeProps;
    sx: SxProps;
}): {};
