export function getResolveValue(value, initialValue) {
    if (!value)
        return { initial: initialValue, sticky: initialValue };
    if (Array.isArray(value)) {
        if (value.length === 2)
            return { initial: value[0], sticky: value[1] };
        return {
            initial: value?.[0] || initialValue,
            sticky: value?.[1] || value[0] || initialValue
        };
    }
    return {
        initial: value?.initial || initialValue,
        sticky: value?.sticky || value?.initial || initialValue
    };
}
