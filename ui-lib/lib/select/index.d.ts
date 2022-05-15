import { ElSelect, ElOption } from 'element-plus';
export declare type SelectProps = typeof ElSelect & {
    options?: Array<typeof ElOption>;
};
export declare const Select: import("vue").DefineComponent<Readonly<{
    options?: any;
}>, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    options?: any;
}>>>, {
    options: any;
}>;
export default Select;
