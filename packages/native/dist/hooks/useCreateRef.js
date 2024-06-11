import React from 'react';
export default function useCreateRef(ref, defaultValue) {
    const newRef = React.useRef(defaultValue);
    if (ref) {
        return {
            ref: ref,
            current: ref?.current
        };
    }
    return {
        ref: newRef,
        current: newRef.current
    };
}
