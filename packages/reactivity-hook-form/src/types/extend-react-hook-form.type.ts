import { FieldValues } from 'react-hook-form';

type Primitive = string | number | boolean | symbol | null | undefined;
type BrowserNativeObject = Date | FileList | File | Blob;

export type IsTuple<T extends ReadonlyArray<any>> = number extends T['length']
  ? false
  : true;

type TupleKeys<T> = Exclude<keyof T, keyof any[]>;

export type ArrayKey = '[number]';

/**
 * Helper function to break apart T1 and check if any are equal to T2
 *
 * See {@link IsEqual}
 */
type IsEqual<T1, T2> = T1 extends T2 ? (T2 extends T1 ? true : false) : false;
type AnyIsEqual<T1, T2> = T1 extends T2
  ? IsEqual<T1, T2> extends true
    ? true
    : never
  : never;

/**
 * Helper type for recursively constructing paths through a type.
 * This actually constructs the strings and recurses into nested
 * object types.
 *
 * See {@link Path}
 */
type PathImpl<K extends string | number, V, TraversedTypes> = V extends
  | Primitive
  | BrowserNativeObject
  ? `${K}`
  : true extends AnyIsEqual<TraversedTypes, V>
    ? `${K}`
    : `${K}` | `${K}.${PathInternal<V, TraversedTypes | V>}`;

/**
 * Helper type for recursively constructing paths through a type.
 * This obscures the internal type param TraversedTypes from exported contract.
 *
 * See {@link Path}
 */
type PathInternal<T, TraversedTypes = T> =
  T extends ReadonlyArray<infer V>
    ? IsTuple<T> extends true
      ? {
          [K in TupleKeys<T>]-?: PathImpl<K & string, T[K], TraversedTypes>;
        }[TupleKeys<T>]
      : PathImpl<ArrayKey, V, TraversedTypes>
    : { [K in keyof T]-?: PathImpl<K & string, T[K], TraversedTypes> }[keyof T];

/**
 * Type which eagerly collects all paths through a type
 * @typeParam T - type which should be introspected
 * @example
 * ```
 * Path<{foo: {bar: string}}> = 'foo' | 'foo.bar'
 * ```
 */
export type Path<T> = T extends any ? PathInternal<T> : never;

/**
 * See {@link Path}
 */
export type FieldPathLib<TFieldValues extends FieldValues> = Path<TFieldValues>;
