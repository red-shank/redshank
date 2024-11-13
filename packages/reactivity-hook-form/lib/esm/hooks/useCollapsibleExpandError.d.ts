import { SyntheticEvent } from 'react';
import { FieldValues, Path } from 'react-hook-form';
type HookOutput = {
    open: boolean;
    hasError: boolean;
    handleExpand: (_e: SyntheticEvent, expanded: boolean) => void;
};
type OptionsProps = {
    defaultOpen?: boolean;
    cleanErrors?: boolean;
};
export declare function useCollapsibleExpandError<TFieldValues extends FieldValues = FieldValues>(names: Path<TFieldValues>[], options?: OptionsProps): HookOutput;
export {};
