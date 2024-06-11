import { ReactElement, ReactNode } from 'react';
import { Collapse } from './Collapse';

export function isChildrenCollapse(children: ReactElement | ReactNode) {
  return (children as ReactElement)?.type === Collapse;
}
