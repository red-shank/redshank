import { RAW_GITHUB_URL, REPO_NAME } from './constants';
import { getError } from './utils';

export async function getRawFileFromRepo(tag: string) {
  const res = await fetch(`${RAW_GITHUB_URL}/${REPO_NAME}${tag}`);

  if (res.ok) return res.text();
  throw await getError('GitHub raw download error', res);
}
