import React from 'react';

export function useChildren(_children?: React.ReactNode) {
  return React.useMemo<React.ReactNode[]>(() => {
    if (!_children) {
      return [];
    }
    if (React.Children.count(_children) === 1) {
      return [_children];
    }
    return _children as any[];
  }, [_children]);
}
