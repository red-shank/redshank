import React from 'react';

export default function useCreateRef<T = never>(
  ref: React.ForwardedRef<T | null> | null,
  defaultValue?: T | null
) {
  const newRef = React.useRef<T>(defaultValue);

  if (ref) {
    return {
      ref: ref as React.MutableRefObject<T>,
      current: (ref as React.MutableRefObject<T>)?.current
    };
  }

  return {
    ref: newRef,
    current: newRef.current
  };
}
