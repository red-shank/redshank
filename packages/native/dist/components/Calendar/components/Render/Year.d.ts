/// <reference types="react" />
import { YearType } from '../../utils';
interface YearProps {
    year: YearType;
}
declare function Year({ year }: YearProps): import("react").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof Year>;
export default _default;
