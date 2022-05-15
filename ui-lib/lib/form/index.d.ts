import { Component, VNode } from 'vue';
import type from 'vue';
import { Form as FormType, IFormFeedback } from '@formily/core';
import { FormLayoutProps } from '../form-layout';
export interface FormProps extends FormLayoutProps {
    form?: FormType;
    component?: Component;
    previewTextPlaceholder: string | (() => VNode);
    onAutoSubmit?: (values: any) => any;
    onAutoSubmitFailed?: (feedbacks: IFormFeedback[]) => void;
}
export declare const Form: type.DefineComponent<Readonly<{
    form?: any;
    component?: any;
    previewTextPlaceholder?: any;
    onAutoSubmit?: any;
    onAutoSubmitFailed?: any;
}>, () => any, unknown, {}, {}, type.ComponentOptionsMixin, type.ComponentOptionsMixin, type.EmitsOptions, string, type.VNodeProps & type.AllowedComponentProps & type.ComponentCustomProps, Readonly<type.ExtractPropTypes<Readonly<{
    form?: any;
    component?: any;
    previewTextPlaceholder?: any;
    onAutoSubmit?: any;
    onAutoSubmitFailed?: any;
}>>>, {
    form: any;
    component: any;
    previewTextPlaceholder: any;
    onAutoSubmit: any;
    onAutoSubmitFailed: any;
}>;
export default Form;
