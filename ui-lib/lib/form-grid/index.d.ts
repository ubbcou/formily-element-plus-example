import { Ref } from 'vue';
import { Grid, IGridOptions } from '@formily/grid';
export interface IFormGridProps extends IGridOptions {
    grid?: Grid<HTMLElement>;
    prefixCls?: string;
    className?: string;
}
export declare const createFormGrid: (props: IFormGridProps) => Grid<HTMLElement>;
export declare const useFormGrid: () => Ref<Grid<HTMLElement>>;
/**
 * @deprecated
 */
export declare const useGridColumn: (gridSpan?: string) => string;
export declare const FormGrid: any;
export default FormGrid;
