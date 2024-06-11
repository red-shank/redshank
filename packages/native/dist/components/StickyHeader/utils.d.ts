export declare function getResolveValue<T>(value: {
    initial?: T;
    sticky?: T;
} | [initial?: T, sticky?: T] | undefined | null, initialValue?: T | undefined): {
    initial: T;
    sticky: T;
} | null;
