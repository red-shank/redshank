import React from 'react';
export default function useCreateRef<T = never>(ref: React.ForwardedRef<T | null> | null, defaultValue?: T | null): {
    ref: React.MutableRefObject<T>;
    current: T;
};
