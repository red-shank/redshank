import algoliasearch from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_APP_READ_API_KEY, ALGOLIA_APP_WRITE_API_KEY } from '@/config/index';

export const algoliaIndexName = 'redshank';

export const algoliaClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_APP_READ_API_KEY
);

export const algoliaIndexRead = algoliaClient.initIndex(algoliaIndexName);

export const algoliaWriteClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_APP_WRITE_API_KEY
);

export const algoliaIndexWrite = algoliaWriteClient.initIndex(algoliaIndexName);
