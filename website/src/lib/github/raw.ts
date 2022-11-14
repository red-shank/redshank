import { RAW_GITHUB_URL } from './constants';
import { getError } from './utils';

export async function getRawFileFromRepo(tag: string) {
  const res = await fetch(RAW_GITHUB_URL + tag);

  if (res.ok) return res.text();
  throw await getError('GitHub raw download error', res);
}
