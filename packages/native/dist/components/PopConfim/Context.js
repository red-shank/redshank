import React from 'react';
const defaultValue = {
    haveHeader: false,
    haveContent: false,
    addElement() { },
};
const PopConfirmContext = React.createContext(defaultValue);
export const PopConfirmProvider = ({ children, }) => {
    const [state, setState] = React.useState(defaultValue);
    const addElement = React.useCallback((type) => {
        setState((prev) => {
            if (type === 'Header' && !prev.haveHeader) {
                return {
                    ...prev,
                    haveHeader: true,
                };
            }
            if (type === 'Content' && !prev.haveContent) {
                return {
                    ...prev,
                    haveContent: true,
                };
            }
            return prev;
        });
    }, []);
    return (<PopConfirmContext.Provider value={{
            addElement,
            haveHeader: state.haveHeader,
            haveContent: state.haveContent,
        }}>
      {children}
    </PopConfirmContext.Provider>);
};
export const usePopConfirm = () => React.useContext(PopConfirmContext);
