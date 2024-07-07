import React, { PropsWithChildren } from 'react';

type ModalContextValue = {
  onClose: () => void;
  closable: boolean;
  isBottom: boolean;
  scrollable: boolean;
};

const ModalContext = React.createContext<ModalContextValue>({
  onClose: () => {},
  closable: true,
  isBottom: false,
  scrollable: false
});

export function ModalProvider({
  children,
  ...rest
}: PropsWithChildren<ModalContextValue>) {
  return <ModalContext.Provider value={rest}>{children}</ModalContext.Provider>;
}

export function useModalContext() {
  return React.useContext(ModalContext);
}
