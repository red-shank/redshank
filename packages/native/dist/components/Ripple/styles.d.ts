declare const radius = 10;
declare const styles: {
    container: {
        backgroundColor: string;
        overflow: "hidden";
        position: "absolute";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    };
    ripple: {
        width: number;
        height: number;
        borderRadius: number;
        overflow: "hidden";
        position: "absolute";
    };
};
export { styles, radius };
