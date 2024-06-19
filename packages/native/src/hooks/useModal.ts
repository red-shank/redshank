import React from 'react';

type VoidFunc = () => void;

export type UseModalType = [
  boolean,
  VoidFunc,
  { onVisible: VoidFunc; onHidden: VoidFunc }
];

export default function useModal(initialState = false): UseModalType {
  // State
  const [visible, setVisible] = React.useState<boolean>(initialState);

  // Handlers
  const onVisible = React.useCallback(() => {
    setVisible(true);
  }, []);

  const onHidden = React.useCallback(() => {
    setVisible(false);
  }, []);

  const onToggle = React.useCallback(() => {
    setVisible((s) => !s);
  }, []);

  return [visible, onToggle, { onVisible, onHidden }];
}
