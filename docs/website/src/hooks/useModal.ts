import { useCallback, useState } from 'react';

type VoidFunc = () => void;

export type UseModalType = [
  boolean,
  VoidFunc,
  { onVisible: VoidFunc; onHidden: VoidFunc }
];

export default function useModal(initialState = false): UseModalType {
  // State
  const [visible, setVisible] = useState<boolean>(initialState);

  // Handlers
  const onVisible = useCallback(() => {
    setVisible(true);
  }, []);

  const onHidden = useCallback(() => {
    setVisible(false);
  }, []);

  const onToggle = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  return [visible, onToggle, { onVisible, onHidden }];
}
