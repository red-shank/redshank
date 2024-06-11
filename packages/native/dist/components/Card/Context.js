import React from 'react';
import { scale } from 'react-native-size-matters';
import useModal from '../../hooks/useModal';
import { StatusBarHeight } from '../../utils/header';
const defaultValues = {
    statusBarHeight: 0,
    isOpen: false,
    toggle() { }
};
const CardContext = React.createContext(defaultValues);
export const CardProvider = ({ children, onlyExpandContent, expandContent }) => {
    const [isOpen, toggle] = useModal();
    const output = React.useMemo(() => {
        return {
            isOpen,
            toggle,
            onlyExpandContent,
            expandContent,
            statusBarHeight: StatusBarHeight + scale(0)
        };
    }, [expandContent, isOpen, toggle]);
    return <CardContext.Provider value={output}>{children}</CardContext.Provider>;
};
export const useCardProvider = () => React.useContext(CardContext);
