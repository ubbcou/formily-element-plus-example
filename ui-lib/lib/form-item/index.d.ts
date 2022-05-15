import { Component } from 'vue';
export declare type FormItemProps = {
    className?: string;
    required?: boolean;
    label?: string | Component;
    colon?: boolean;
    tooltip?: string | Component;
    layout?: 'vertical' | 'horizontal' | 'inline';
    labelStyle?: Record<string, any>;
    labelAlign?: 'left' | 'right';
    labelWrap?: boolean;
    labelWidth?: number;
    wrapperWidth?: number;
    labelCol?: number;
    wrapperCol?: number;
    wrapperAlign?: 'left' | 'right';
    wrapperWrap?: boolean;
    wrapperStyle?: Record<string, any>;
    fullness?: boolean;
    addonBefore?: string | Component;
    addonAfter?: string | Component;
    size?: 'small' | 'default' | 'large';
    extra?: string;
    feedbackText?: string | Component;
    feedbackLayout?: 'loose' | 'terse' | 'popover' | 'none' | (string & {});
    feedbackStatus?: 'error' | 'warning' | 'success' | 'pending' | (string & {});
    tooltipLayout?: 'icon' | 'text';
    feedbackIcon?: string | Component;
    asterisk?: boolean;
    gridSpan?: number | string;
    bordered?: boolean;
    inset?: boolean;
};
export declare const FormBaseItem: import("vue").DefineComponent<{
    className: {};
    required: {};
    label: {};
    colon: {};
    layout: {};
    tooltip: {};
    labelStyle: {};
    labelAlign: {};
    labelWrap: {};
    labelWidth: {};
    wrapperWidth: {};
    labelCol: {};
    wrapperCol: {};
    wrapperAlign: {};
    wrapperWrap: {};
    wrapperStyle: {};
    fullness: {};
    addonBefore: {};
    addonAfter: {};
    size: {};
    extra: {};
    feedbackText: {};
    feedbackLayout: {};
    tooltipLayout: {};
    feedbackStatus: {};
    feedbackIcon: {};
    asterisk: {};
    gridSpan: {};
    bordered: {
        default: boolean;
    };
    inset: {
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    className: {};
    required: {};
    label: {};
    colon: {};
    layout: {};
    tooltip: {};
    labelStyle: {};
    labelAlign: {};
    labelWrap: {};
    labelWidth: {};
    wrapperWidth: {};
    labelCol: {};
    wrapperCol: {};
    wrapperAlign: {};
    wrapperWrap: {};
    wrapperStyle: {};
    fullness: {};
    addonBefore: {};
    addonAfter: {};
    size: {};
    extra: {};
    feedbackText: {};
    feedbackLayout: {};
    tooltipLayout: {};
    feedbackStatus: {};
    feedbackIcon: {};
    asterisk: {};
    gridSpan: {};
    bordered: {
        default: boolean;
    };
    inset: {
        default: boolean;
    };
}>>, {
    bordered: boolean;
    inset: boolean;
}>;
export declare const FormItem: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            bordered: boolean;
            inset: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            className: {};
            required: {};
            label: {};
            colon: {};
            layout: {};
            tooltip: {};
            labelStyle: {};
            labelAlign: {};
            labelWrap: {};
            labelWidth: {};
            wrapperWidth: {};
            labelCol: {};
            wrapperCol: {};
            wrapperAlign: {};
            wrapperWrap: {};
            wrapperStyle: {};
            fullness: {};
            addonBefore: {};
            addonAfter: {};
            size: {};
            extra: {};
            feedbackText: {};
            feedbackLayout: {};
            tooltipLayout: {};
            feedbackStatus: {};
            feedbackIcon: {};
            asterisk: {};
            gridSpan: {};
            bordered: {
                default: boolean;
            };
            inset: {
                default: boolean;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "bordered" | "inset">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            className: {};
            required: {};
            label: {};
            colon: {};
            layout: {};
            tooltip: {};
            labelStyle: {};
            labelAlign: {};
            labelWrap: {};
            labelWidth: {};
            wrapperWidth: {};
            labelCol: {};
            wrapperCol: {};
            wrapperAlign: {};
            wrapperWrap: {};
            wrapperStyle: {};
            fullness: {};
            addonBefore: {};
            addonAfter: {};
            size: {};
            extra: {};
            feedbackText: {};
            feedbackLayout: {};
            tooltipLayout: {};
            feedbackStatus: {};
            feedbackIcon: {};
            asterisk: {};
            gridSpan: {};
            bordered: {
                default: boolean;
            };
            inset: {
                default: boolean;
            };
        }>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            bordered: boolean;
            inset: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        className: {};
        required: {};
        label: {};
        colon: {};
        layout: {};
        tooltip: {};
        labelStyle: {};
        labelAlign: {};
        labelWrap: {};
        labelWidth: {};
        wrapperWidth: {};
        labelCol: {};
        wrapperCol: {};
        wrapperAlign: {};
        wrapperWrap: {};
        wrapperStyle: {};
        fullness: {};
        addonBefore: {};
        addonAfter: {};
        size: {};
        extra: {};
        feedbackText: {};
        feedbackLayout: {};
        tooltipLayout: {};
        feedbackStatus: {};
        feedbackIcon: {};
        asterisk: {};
        gridSpan: {};
        bordered: {
            default: boolean;
        };
        inset: {
            default: boolean;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    className: {};
    required: {};
    label: {};
    colon: {};
    layout: {};
    tooltip: {};
    labelStyle: {};
    labelAlign: {};
    labelWrap: {};
    labelWidth: {};
    wrapperWidth: {};
    labelCol: {};
    wrapperCol: {};
    wrapperAlign: {};
    wrapperWrap: {};
    wrapperStyle: {};
    fullness: {};
    addonBefore: {};
    addonAfter: {};
    size: {};
    extra: {};
    feedbackText: {};
    feedbackLayout: {};
    tooltipLayout: {};
    feedbackStatus: {};
    feedbackIcon: {};
    asterisk: {};
    gridSpan: {};
    bordered: {
        default: boolean;
    };
    inset: {
        default: boolean;
    };
}>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    bordered: boolean;
    inset: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    BaseItem: import("vue").DefineComponent<{
        className: {};
        required: {};
        label: {};
        colon: {};
        layout: {};
        tooltip: {};
        labelStyle: {};
        labelAlign: {};
        labelWrap: {};
        labelWidth: {};
        wrapperWidth: {};
        labelCol: {};
        wrapperCol: {};
        wrapperAlign: {};
        wrapperWrap: {};
        wrapperStyle: {};
        fullness: {};
        addonBefore: {};
        addonAfter: {};
        size: {};
        extra: {};
        feedbackText: {};
        feedbackLayout: {};
        tooltipLayout: {};
        feedbackStatus: {};
        feedbackIcon: {};
        asterisk: {};
        gridSpan: {};
        bordered: {
            default: boolean;
        };
        inset: {
            default: boolean;
        };
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        className: {};
        required: {};
        label: {};
        colon: {};
        layout: {};
        tooltip: {};
        labelStyle: {};
        labelAlign: {};
        labelWrap: {};
        labelWidth: {};
        wrapperWidth: {};
        labelCol: {};
        wrapperCol: {};
        wrapperAlign: {};
        wrapperWrap: {};
        wrapperStyle: {};
        fullness: {};
        addonBefore: {};
        addonAfter: {};
        size: {};
        extra: {};
        feedbackText: {};
        feedbackLayout: {};
        tooltipLayout: {};
        feedbackStatus: {};
        feedbackIcon: {};
        asterisk: {};
        gridSpan: {};
        bordered: {
            default: boolean;
        };
        inset: {
            default: boolean;
        };
    }>>, {
        bordered: boolean;
        inset: boolean;
    }>;
};
export default FormItem;
