import { getRawFileFromRepo } from '@/lib/github/raw';
import { removeFromLast } from '@/utils';

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

export async function fetchRawDoc(slug: string, _tag: string) {
  const tag = _tag === 'v1' ? TAG : 'v1';
  return await getRawFileFromRepo(`${tag}/${PROPS_PATH}${slug}.mdx`);
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
