/// <reference types="react" />
import { Image as ImageNative } from 'react-native';
export * from './types';
declare const DefaultImage: import("react").FC<import("./types").ImageProps> & {
    getSize: typeof ImageNative.getSize;
    getSizeWithHeaders: typeof ImageNative.getSizeWithHeaders;
    prefetch: typeof ImageNative.prefetch;
    abortPrefetch: typeof ImageNative.abortPrefetch;
    queryCache: typeof ImageNative.queryCache;
    resolveAssetSource: typeof ImageNative.resolveAssetSource;
};
export { DefaultImage as Image };
