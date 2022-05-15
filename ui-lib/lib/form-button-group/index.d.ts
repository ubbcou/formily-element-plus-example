import { SpaceProps } from '../space';
export declare type FormButtonGroupProps = Omit<SpaceProps, 'align' | 'size'> & {
    align?: 'left' | 'right' | 'center';
    gutter?: number;
    className?: string;
    alignFormItem: boolean;
};
export declare const FormButtonGroup: import("vue").DefineComponent<{
    align: {
        type: StringConstructor;
        default: string;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    alignFormItem: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: StringConstructor;
        default: string;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    alignFormItem: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    align: string;
    gutter: number;
    alignFormItem: boolean;
}>;
export default FormButtonGroup;
