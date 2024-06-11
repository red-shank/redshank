import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';
import { BaseProps } from '../../@types/base';
export declare type BoxProps = PropsWithChildren<BaseProps & Omit<ViewProps, 'style'>>;
export declare const Box: React.ForwardRefExoticComponent<Partial<Partial<{
    width: import("react-native").DimensionValue;
    height: import("react-native").DimensionValue;
    position: "absolute" | "relative" | "static";
    paddingBottom: import("react-native").DimensionValue;
    paddingHorizontal: import("react-native").DimensionValue;
    paddingLeft: import("react-native").DimensionValue;
    paddingRight: import("react-native").DimensionValue;
    paddingTop: import("react-native").DimensionValue;
    paddingVertical: import("react-native").DimensionValue;
    margin: import("react-native").DimensionValue;
    marginBottom: import("react-native").DimensionValue;
    marginHorizontal: import("react-native").DimensionValue;
    marginLeft: import("react-native").DimensionValue;
    marginRight: import("react-native").DimensionValue;
    marginTop: import("react-native").DimensionValue;
    marginVertical: import("react-native").DimensionValue;
    bottom: import("react-native").DimensionValue;
    left: import("react-native").DimensionValue;
    right: import("react-native").DimensionValue;
    top: import("react-native").DimensionValue;
    flex: number;
    flexGrow: number;
    flexShrink: number;
    flexBasis: import("react-native").DimensionValue;
    flexWrap: "wrap" | "nowrap" | "wrap-reverse";
    flexDirection: "row" | "column" | "row-reverse" | "column-reverse";
    justifyContent: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    alignItems: import("react-native").FlexAlignType;
    alignSelf: "auto" | import("react-native").FlexAlignType;
    overflow: "visible" | "hidden" | "scroll";
    display: "none" | "flex";
    backfaceVisibility: "visible" | "hidden";
    opacity: import("react-native").AnimatableNumericValue;
    elevation: number;
    shadowOffset: Readonly<{
        width: number;
        height: number;
    }>;
    shadowOpacity: import("react-native").AnimatableNumericValue;
    shadowRadius: number;
    transform: string | (({
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
    transformMatrix: number[];
    scaleX: import("react-native").AnimatableNumericValue;
    scaleY: import("react-native").AnimatableNumericValue;
    rotation: import("react-native").AnimatableNumericValue;
    translateX: import("react-native").AnimatableNumericValue;
    translateY: import("react-native").AnimatableNumericValue;
    textAlign: "auto" | "center" | "left" | "right" | "justify";
    textAlignVertical: "auto" | "center" | "bottom" | "top";
    fontFamily: string;
    fontStyle: "normal" | "italic";
    fontWeight: "black" | 600 | 100 | 200 | 300 | 400 | 500 | "thin" | "light" | "regular" | "medium" | "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | 700 | 800 | 900 | "ultralight" | "semibold" | "condensedBold" | "condensed" | "heavy";
    fontVariant: import("react-native").FontVariant[];
    textShadowOffset: {
        width: number;
        height: number;
    };
    textShadowRadius: number;
    letterSpacing: number;
    lineHeight: number;
    borderBottomWidth: number;
    borderLeftWidth: number;
    borderRightWidth: number;
    borderTopWidth: number;
    borderWidth: number;
    borderStyle: "solid" | "dotted" | "dashed";
} & {
    p: import("react-native").DimensionValue;
    pt: import("react-native").DimensionValue;
    pb: import("react-native").DimensionValue;
    pl: import("react-native").DimensionValue;
    pr: import("react-native").DimensionValue;
    px: import("react-native").DimensionValue;
    py: import("react-native").DimensionValue;
    m: import("react-native").DimensionValue;
    mt: import("react-native").DimensionValue;
    mb: import("react-native").DimensionValue;
    ml: import("react-native").DimensionValue;
    mr: import("react-native").DimensionValue;
    mx: import("react-native").DimensionValue;
    my: import("react-native").DimensionValue;
    gap: number;
    backgroundColor: string;
    borderBottomColor: string;
    borderColor: string;
    borderLeftColor: string;
    borderRightColor: string;
    borderTopColor: string;
    shadowColor: string;
    textShadowColor: string;
    background: string;
    bg: string;
    color: string;
    zIndex: number | "max";
    fontSize: import("../../context/theme/types").FontSizesProps;
    borderRadius: import("react-native").AnimatableNumericValue;
    borderBottomRadius: import("react-native").AnimatableNumericValue;
    borderTopRadius: import("react-native").AnimatableNumericValue;
    borderBottomLeftRadius: import("react-native").AnimatableNumericValue;
    borderBottomRightRadius: import("react-native").AnimatableNumericValue;
    borderTopLeftRadius: import("react-native").AnimatableNumericValue;
    borderTopRightRadius: import("react-native").AnimatableNumericValue;
}>> & {
    sx?: Partial<{
        width: import("react-native").DimensionValue;
        height: import("react-native").DimensionValue;
        position: "absolute" | "relative" | "static";
        paddingBottom: import("react-native").DimensionValue;
        paddingHorizontal: import("react-native").DimensionValue;
        paddingLeft: import("react-native").DimensionValue;
        paddingRight: import("react-native").DimensionValue;
        paddingTop: import("react-native").DimensionValue;
        paddingVertical: import("react-native").DimensionValue;
        margin: import("react-native").DimensionValue;
        marginBottom: import("react-native").DimensionValue;
        marginHorizontal: import("react-native").DimensionValue;
        marginLeft: import("react-native").DimensionValue;
        marginRight: import("react-native").DimensionValue;
        marginTop: import("react-native").DimensionValue;
        marginVertical: import("react-native").DimensionValue;
        bottom: import("react-native").DimensionValue;
        left: import("react-native").DimensionValue;
        right: import("react-native").DimensionValue;
        top: import("react-native").DimensionValue;
        flex: number;
        flexGrow: number;
        flexShrink: number;
        flexBasis: import("react-native").DimensionValue;
        flexWrap: "wrap" | "nowrap" | "wrap-reverse";
        flexDirection: "row" | "column" | "row-reverse" | "column-reverse";
        justifyContent: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
        alignItems: import("react-native").FlexAlignType;
        alignSelf: "auto" | import("react-native").FlexAlignType;
        overflow: "visible" | "hidden" | "scroll";
        display: "none" | "flex";
        backfaceVisibility: "visible" | "hidden";
        opacity: import("react-native").AnimatableNumericValue;
        elevation: number;
        shadowOffset: Readonly<{
            width: number;
            height: number;
        }>;
        shadowOpacity: import("react-native").AnimatableNumericValue;
        shadowRadius: number;
        transform: string | (({
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
        transformMatrix: number[];
        scaleX: import("react-native").AnimatableNumericValue;
        scaleY: import("react-native").AnimatableNumericValue;
        rotation: import("react-native").AnimatableNumericValue;
        translateX: import("react-native").AnimatableNumericValue;
        translateY: import("react-native").AnimatableNumericValue;
        textAlign: "auto" | "center" | "left" | "right" | "justify";
        textAlignVertical: "auto" | "center" | "bottom" | "top";
        fontFamily: string;
        fontStyle: "normal" | "italic";
        fontWeight: "black" | 600 | 100 | 200 | 300 | 400 | 500 | "thin" | "light" | "regular" | "medium" | "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | 700 | 800 | 900 | "ultralight" | "semibold" | "condensedBold" | "condensed" | "heavy";
        fontVariant: import("react-native").FontVariant[];
        textShadowOffset: {
            width: number;
            height: number;
        };
        textShadowRadius: number;
        letterSpacing: number;
        lineHeight: number;
        borderBottomWidth: number;
        borderLeftWidth: number;
        borderRightWidth: number;
        borderTopWidth: number;
        borderWidth: number;
        borderStyle: "solid" | "dotted" | "dashed";
    } & {
        p: import("react-native").DimensionValue;
        pt: import("react-native").DimensionValue;
        pb: import("react-native").DimensionValue;
        pl: import("react-native").DimensionValue;
        pr: import("react-native").DimensionValue;
        px: import("react-native").DimensionValue;
        py: import("react-native").DimensionValue;
        m: import("react-native").DimensionValue;
        mt: import("react-native").DimensionValue;
        mb: import("react-native").DimensionValue;
        ml: import("react-native").DimensionValue;
        mr: import("react-native").DimensionValue;
        mx: import("react-native").DimensionValue;
        my: import("react-native").DimensionValue;
        gap: number;
        backgroundColor: string;
        borderBottomColor: string;
        borderColor: string;
        borderLeftColor: string;
        borderRightColor: string;
        borderTopColor: string;
        shadowColor: string;
        textShadowColor: string;
        background: string;
        bg: string;
        color: string;
        zIndex: number | "max";
        fontSize: import("../../context/theme/types").FontSizesProps;
        borderRadius: import("react-native").AnimatableNumericValue;
        borderBottomRadius: import("react-native").AnimatableNumericValue;
        borderTopRadius: import("react-native").AnimatableNumericValue;
        borderBottomLeftRadius: import("react-native").AnimatableNumericValue;
        borderBottomRightRadius: import("react-native").AnimatableNumericValue;
        borderTopLeftRadius: import("react-native").AnimatableNumericValue;
        borderTopRightRadius: import("react-native").AnimatableNumericValue;
    }>;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle & import("react-native").TextStyle>;
} & Omit<ViewProps, "style"> & {
    children?: React.ReactNode;
} & React.RefAttributes<View>>;
