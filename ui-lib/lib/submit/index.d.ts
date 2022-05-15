import { IFormFeedback } from '@formily/core';
import type { ElButton as ElButtonProps } from 'element-plus';
export declare type ISubmitProps = {
    onClick?: (e: MouseEvent) => any;
    onSubmit?: (values: any) => any;
    onSubmitSuccess?: (payload: any) => void;
    onSubmitFailed?: (feedbacks: IFormFeedback[]) => void;
} & typeof ElButtonProps;
export declare const Submit: import("vue").DefineComponent<Readonly<{
    onClick?: any;
    onSubmit?: any;
    onSubmitSuccess?: any;
    onSubmitFailed?: any;
}>, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    onClick?: any;
    onSubmit?: any;
    onSubmitSuccess?: any;
    onSubmitFailed?: any;
}>>>, {
    onClick: any;
    onSubmit: any;
    onSubmitSuccess: any;
    onSubmitFailed: any;
}>;
export default Submit;
