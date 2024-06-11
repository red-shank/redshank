import { FC } from 'react';
import Panel from './Panel';
import type { CollapseProps } from './types';
export * from './types';
declare type ComponentExport = FC<CollapseProps> & {
    Panel: typeof Panel;
};
declare const Collapse: ComponentExport;
export { Collapse };
