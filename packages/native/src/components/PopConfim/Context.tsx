import React from 'react';

type PopConfirmContext = {
  haveHeader: boolean;
  haveContent: boolean;
  addElement(type: 'Header' | 'Content'): void;
};

const defaultValue: PopConfirmContext = {
  haveHeader: false,
  haveContent: false,
  addElement() {},
};

const PopConfirmContext = React.createContext<PopConfirmContext>(defaultValue);

export const PopConfirmProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [state, setState] =
    React.useState<Omit<PopConfirmContext, 'addElement'>>(defaultValue);

  const addElement = React.useCallback((type: 'Header' | 'Content') => {
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

  return (
    <PopConfirmContext.Provider
      value={{
        addElement,
        haveHeader: state.haveHeader,
        haveContent: state.haveContent,
      }}
    >
      {children}
    </PopConfirmContext.Provider>
  );
};

export const usePopConfirm = () => React.useContext(PopConfirmContext);
