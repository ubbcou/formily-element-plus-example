import { IFieldResetOptions } from '@formily/core';
import type { ElButton as ElButtonProps } from 'element-plus';
export declare type ResetProps = IFieldResetOptions & typeof ElButtonProps;
export declare const Reset: import("vue").DefineComponent<{
    forceClear: {
        type: BooleanConstructor;
        default: boolean;
    };
    validate: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    forceClear: {
        type: BooleanConstructor;
        default: boolean;
    };
    validate: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    forceClear: boolean;
    validate: boolean;
}>;
export default Reset;
