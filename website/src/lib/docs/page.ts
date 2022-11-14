import fs from 'fs';
import path from 'path';

import { removeFromLast } from '@/utils';
import { getRawFileFromRepo } from '@/lib/github/raw';

import { PROPS_PATH, TAG } from './config';

export interface Route {
  title: string;
  subtitle?: string;
  section?: string;
  heading?: boolean;
  keywords?: string;
  icon?: string;
  open?: boolean;
  path?: string;
  routes?: Route[];
  updated?: boolean;
  newPost?: boolean;
  comingSoon?: boolean;
}

export interface Carry {
  params: { slug: any };
}

export async function fetchRawDoc(
  slug: string,
  _tag: string,
  locale: LocaleType
) {
  const tag = _tag === 'v1' ? TAG : 'v1';
  try {
    return await getRawFileFromRepo(
      `${tag}/${PROPS_PATH}${locale}/${slug}.mdx`
    );
  } catch (e) {
    if (locale === 'es') {
      console.log('Get in English doc');
      return await getRawFileFromRepo(`${tag}/${PROPS_PATH}${slug}.mdx`);
    }
    return '';
  }
}

export function fetchRawDocLocal(
  slug: string,
  _tag: string,
  locale: LocaleType
) {
  const folderPath = path.join(process.cwd(), 'content', 'pages');
  const filePath = path.join(folderPath, `${locale}/${slug}.mdx`);

  try {
    return fs.readFileSync(filePath);
  } catch (e) {
    const newFilePath = path.join(folderPath, `en/${slug}.mdx`);
    return fs.readFileSync(newFilePath);
  }
}

export function getPaths(
  nextRoutes: Route[],
  carry: Carry[] = [{ params: { slug: [] } }]
) {
  nextRoutes.forEach((route: Route) => {
    if (route.comingSoon) {
      return;
    }
    if (route.path) {
      carry.push(removeFromLast(route.path, '.') as Carry);
    } else if (route.routes) {
      getPaths(route.routes, carry);
    }
  });

  return carry;
}
