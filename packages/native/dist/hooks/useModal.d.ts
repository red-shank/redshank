declare type VoidFunc = () => void;
export declare type UseModalType = [
    boolean,
    VoidFunc,
    {
        onVisible: VoidFunc;
        onHidden: VoidFunc;
    }
];
export default function useModal(initialState?: boolean): UseModalType;
export {};
