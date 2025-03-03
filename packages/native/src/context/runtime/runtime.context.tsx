import React, { PropsWithChildren, useMemo } from 'react';
import { RuntimeContextType } from './types';

const IconRuntimeContext = React.createContext<RuntimeContextType>({
  packs: new Map()
});

export function RuntimeProvider({
  children,
  packs
}: PropsWithChildren<Pick<RuntimeContextType, 'packs'>>) {
  return (
    <IconRuntimeContext.Provider
      value={useMemo(
        () => ({
          packs
        }),
        [packs]
      )}
    >
      {children}
    </IconRuntimeContext.Provider>
  );
}

export function useIconRuntime() {
  const context = React.useContext(IconRuntimeContext);
  if (context === undefined) {
    throw new Error('useIconRuntime must be used within a RuntimeProvider');
  }
  return context;
}
