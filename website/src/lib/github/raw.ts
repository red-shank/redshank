import { RAW_GITHUB_URL, REPO_NAME } from './constants';
import { getError } from './utils';

export async function getRawFileFromGitHub(path: string) {
  const res = await fetch(RAW_GITHUB_URL + path);

  if (res.ok) return res.text();
  throw await getError('GitHub raw download error', res);
}

export function getRawFileFromRepo(tag: string) {
  return getRawFileFromGitHub(`/${REPO_NAME}/${tag}`);
}

export function getRawAssetFromRepo(tag: string) {
  return `${RAW_GITHUB_URL}/${REPO_NAME}/${tag}`;
}
