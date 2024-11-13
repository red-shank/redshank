type VoidFunction = () => void;
export type ReturnUseToggle = [
    boolean,
    {
        onVisible: VoidFunction;
        onHidden: VoidFunction;
    },
    VoidFunction
];
export default function useToggle(initialValue?: boolean | (() => boolean)): ReturnUseToggle;
export {};
