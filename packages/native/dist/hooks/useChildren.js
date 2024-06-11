import React from 'react';
export function useChildren(_children) {
    return React.useMemo(() => {
        if (!_children) {
            return [];
        }
        if (React.Children.count(_children) === 1) {
            return [_children];
        }
        return _children;
    }, [_children]);
}
