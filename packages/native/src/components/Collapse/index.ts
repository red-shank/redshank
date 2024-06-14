import { FC } from 'react';
import Panel from './Panel';
import type { CollapseProps } from './types';
import { Collapse as C } from './Collapse';

export * from './types';

type ComponentExport = FC<CollapseProps> & {
  Panel: typeof Panel;
};

(C as ComponentExport).Panel = Panel;
const Collapse = C as ComponentExport;

export { Collapse };
