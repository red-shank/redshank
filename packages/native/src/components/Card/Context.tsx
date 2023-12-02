import React from 'react';
import { scale } from 'react-native-size-matters';

import useModal from '../../hooks/useModal';
import { StatusBarHeight } from '../../utils/header';

export type CardContext = {
  isOpen: boolean;
  onlyExpandContent?: boolean;
  statusBarHeight: number;
  toggle: () => void;
  expandContent?: React.ReactNode;
};

const defaultValues: CardContext = {
  statusBarHeight: 0,
  isOpen: false,
  toggle() {}
};

const CardContext = React.createContext<CardContext>(defaultValues);

type CardProviderType = {
  children: React.ReactNode;
  onlyExpandContent?: boolean;
  expandContent?: React.ReactNode;
};

export const CardProvider: React.FC<CardProviderType> = ({
  children,
  onlyExpandContent,
  expandContent
}) => {
  const [isOpen, toggle] = useModal();

  const output = React.useMemo<CardContext>(() => {
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
