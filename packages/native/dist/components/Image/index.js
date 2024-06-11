import { Image as ImageNative } from 'react-native';
import { Image } from './Image';
export * from './types';
const DefaultImage = Object.assign(Image, {
    getSize: ImageNative.getSize,
    getSizeWithHeaders: ImageNative.getSizeWithHeaders,
    prefetch: ImageNative.prefetch,
    abortPrefetch: ImageNative.abortPrefetch,
    queryCache: ImageNative.queryCache,
    resolveAssetSource: ImageNative.resolveAssetSource,
});
export { DefaultImage as Image };
