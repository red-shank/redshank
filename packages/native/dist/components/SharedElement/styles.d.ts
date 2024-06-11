import { ViewStyle } from 'react-native';
declare const _default: {
    safeArea: {
        flex: number;
    };
    flatlistContainer: {
        flexGrow: number;
        backgroundColor: string;
    };
    ghostViewContainer: ViewStyle;
    scrollViewContainer: ViewStyle;
    scrollViewContentContainer: {
        flexGrow: number;
    };
    activeCard: {
        elevation: number;
        shadowColor?: undefined;
        shadowOpacity?: undefined;
        shadowOffset?: undefined;
        shadowRadius?: undefined;
        margin: number;
        overflow: "visible";
    } | {
        shadowColor: string;
        shadowOpacity: number;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowRadius: number;
        elevation?: undefined;
        margin: number;
        overflow: "visible";
    };
    image: {
        flex: number;
        alignSelf: "stretch";
        width: any;
        height: any;
    };
};
export default _default;
