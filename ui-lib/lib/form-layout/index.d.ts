import { InjectionKey, Ref } from 'vue';
export declare type FormLayoutProps = {
    className?: string;
    colon?: boolean;
    labelAlign?: 'right' | 'left' | ('right' | 'left')[];
    wrapperAlign?: 'right' | 'left' | ('right' | 'left')[];
    labelWrap?: boolean;
    labelWidth?: number;
    wrapperWidth?: number;
    wrapperWrap?: boolean;
    labelCol?: number | number[];
    wrapperCol?: number | number[];
    fullness?: boolean;
    size?: 'small' | 'default' | 'large';
    layout?: 'vertical' | 'horizontal' | 'inline' | ('vertical' | 'horizontal' | 'inline')[];
    direction?: 'rtl' | 'ltr';
    shallow?: boolean;
    feedbackLayout?: 'loose' | 'terse' | 'popover';
    tooltipLayout?: 'icon' | 'text';
    bordered?: boolean;
    breakpoints?: number[];
    inset?: boolean;
    spaceGap?: number;
    gridColumnGap?: number;
    gridRowGap?: number;
};
export declare const FormLayoutDeepContext: InjectionKey<Ref<FormLayoutProps>>;
export declare const FormLayoutShallowContext: InjectionKey<Ref<FormLayoutProps>>;
export declare const useFormDeepLayout: () => Ref<FormLayoutProps>;
export declare const useFormShallowLayout: () => Ref<FormLayoutProps>;
export declare const useFormLayout: () => Ref<FormLayoutProps>;
export declare const FormLayout: import("vue").DefineComponent<{
    className: {};
    colon: {
        default: boolean;
    };
    labelAlign: {};
    wrapperAlign: {};
    labelWrap: {
        default: boolean;
    };
    labelWidth: {};
    wrapperWidth: {};
    wrapperWrap: {
        default: boolean;
    };
    labelCol: {};
    wrapperCol: {};
    fullness: {
        default: boolean;
    };
    size: {
        default: string;
    };
    layout: {
        default: string;
    };
    direction: {
        default: string;
    };
    shallow: {
        default: boolean;
    };
    feedbackLayout: {};
    tooltipLayout: {};
    bordered: {
        default: boolean;
    };
    inset: {
        default: boolean;
    };
    breakpoints: {};
    spaceGap: {};
    gridColumnGap: {};
    gridRowGap: {};
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    className: {};
    colon: {
        default: boolean;
    };
    labelAlign: {};
    wrapperAlign: {};
    labelWrap: {
        default: boolean;
    };
    labelWidth: {};
    wrapperWidth: {};
    wrapperWrap: {
        default: boolean;
    };
    labelCol: {};
    wrapperCol: {};
    fullness: {
        default: boolean;
    };
    size: {
        default: string;
    };
    layout: {
        default: string;
    };
    direction: {
        default: string;
    };
    shallow: {
        default: boolean;
    };
    feedbackLayout: {};
    tooltipLayout: {};
    bordered: {
        default: boolean;
    };
    inset: {
        default: boolean;
    };
    breakpoints: {};
    spaceGap: {};
    gridColumnGap: {};
    gridRowGap: {};
}>>, {
    colon: boolean;
    labelWrap: boolean;
    wrapperWrap: boolean;
    fullness: boolean;
    size: string;
    layout: string;
    direction: string;
    shallow: boolean;
    bordered: boolean;
    inset: boolean;
}>;
export default FormLayout;
