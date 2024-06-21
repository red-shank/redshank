import pkg from '../../temp/_package.json';
import {
  colorsDark,
  colorsLight,
  paddingSizes,
  borderRadius,
  marginSizes,
  zIndices
} from '../../temp/defaultValues';

export const PACKAGE_NAME = pkg?.name || '@redshank/native';
export const ORGANIZATION_NAME = 'red-shank';

export const REPO_NAME = 'redshank';

export const DEFAULT_VERSION = 'v1';
export const PAYPAL_LINK = 'https://www.paypal.com/paypalme/rivaslive';
export const COINBASE_WALLET = '3QQ8XmAb32WiQei4ajRHrqwPmwzcobbTGQ';
export const LIB_VERSION = pkg.version;
export const REPOSITORY_URL = pkg?.repository?.url?.replace?.('git+', '') || '';
export const libTheme = {
  colorsDark,
  colorsLight,
  paddingSizes,
  borderRadius,
  marginSizes,
  zIndices
};
export const isProd = process.env.NODE_ENV === 'production';

export const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? '';

export const ALGOLIA_APP_READ_API_KEY =
  process.env.NEXT_PUBLIC_ALGOLIA_APP_READ_API_KEY ?? '';

// use server
export const ALGOLIA_APP_WRITE_API_KEY =
  process.env.ALGOLIA_APP_WRITE_API_KEY ?? '';
