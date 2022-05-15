import { Ref, PropType } from 'vue';
import { ArrayField } from '@formily/core';
import type { ButtonProps as ElButtonProps } from 'element-plus';
import type { Schema } from '@formily/json-schema';
export interface IArrayBaseAdditionProps extends ElButtonProps {
    title?: string;
    method?: 'push' | 'unshift';
    defaultValue?: any;
}
export declare type ArrayBaseMixins = {
    Addition?: typeof ArrayBaseAddition;
    Remove?: typeof ArrayBaseRemove;
    MoveUp?: typeof ArrayBaseMoveUp;
    MoveDown?: typeof ArrayBaseMoveDown;
    SortHandle?: typeof ArrayBaseSortHandle;
    Index?: typeof ArrayBaseIndex;
    useArray?: typeof useArray;
    useIndex?: typeof useIndex;
    useRecord?: typeof useRecord;
};
export interface IArrayBaseProps {
    disabled?: boolean;
    keyMap?: WeakMap<Record<string, unknown>, string> | string[] | null;
}
export interface IArrayBaseItemProps {
    index: number;
    record: any;
}
export interface IArrayBaseContext {
    field: Ref<ArrayField>;
    schema: Ref<Schema>;
    props: IArrayBaseProps;
    attrs: {
        [key in string]?: any;
    };
    keyMap?: WeakMap<Record<string, unknown>, string> | string[] | null;
}
declare const useArray: () => IArrayBaseContext | null;
declare const useIndex: (index?: number | undefined) => Ref<number>;
declare const useRecord: (record?: number | undefined) => Ref<any>;
declare const ArrayBaseSortHandle: import("vue").DefineComponent<Readonly<{
    index?: any;
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    index?: any;
}>>>, {
    index: any;
}>;
declare const ArrayBaseIndex: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
declare const ArrayBaseAddition: import("vue").DefineComponent<Readonly<{
    method?: any;
    defaultValue?: any;
    title?: any;
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    method?: any;
    defaultValue?: any;
    title?: any;
}>>>, {
    method: any;
    defaultValue: any;
    title: any;
}>;
declare const ArrayBaseRemove: import("vue").DefineComponent<{
    readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
    readonly disabled: boolean;
    readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
    readonly loading: boolean;
    readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    readonly plain: boolean;
    readonly text: boolean;
    readonly bg: boolean;
    readonly autofocus: boolean;
    readonly round: boolean;
    readonly circle: boolean;
    readonly dark: boolean;
} & {
    readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
    readonly color?: string | undefined;
    readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
} & {
    title?: string | undefined;
    index?: number | undefined;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
    readonly disabled: boolean;
    readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
    readonly loading: boolean;
    readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    readonly plain: boolean;
    readonly text: boolean;
    readonly bg: boolean;
    readonly autofocus: boolean;
    readonly round: boolean;
    readonly circle: boolean;
    readonly dark: boolean;
} & {
    readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
    readonly color?: string | undefined;
    readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
} & {
    title?: string | undefined;
    index?: number | undefined;
}>, {}>;
declare const ArrayBaseMoveDown: import("vue").DefineComponent<{
    readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
    readonly disabled: boolean;
    readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
    readonly loading: boolean;
    readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    readonly plain: boolean;
    readonly text: boolean;
    readonly bg: boolean;
    readonly autofocus: boolean;
    readonly round: boolean;
    readonly circle: boolean;
    readonly dark: boolean;
} & {
    readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
    readonly color?: string | undefined;
    readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
} & {
    title?: string | undefined;
    index?: number | undefined;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
    readonly disabled: boolean;
    readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
    readonly loading: boolean;
    readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    readonly plain: boolean;
    readonly text: boolean;
    readonly bg: boolean;
    readonly autofocus: boolean;
    readonly round: boolean;
    readonly circle: boolean;
    readonly dark: boolean;
} & {
    readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
    readonly color?: string | undefined;
    readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
} & {
    title?: string | undefined;
    index?: number | undefined;
}>, {}>;
declare const ArrayBaseMoveUp: import("vue").DefineComponent<{
    readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
    readonly disabled: boolean;
    readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
    readonly loading: boolean;
    readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    readonly plain: boolean;
    readonly text: boolean;
    readonly bg: boolean;
    readonly autofocus: boolean;
    readonly round: boolean;
    readonly circle: boolean;
    readonly dark: boolean;
} & {
    readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
    readonly color?: string | undefined;
    readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
} & {
    title?: string | undefined;
    index?: number | undefined;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
    readonly disabled: boolean;
    readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
    readonly loading: boolean;
    readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    readonly plain: boolean;
    readonly text: boolean;
    readonly bg: boolean;
    readonly autofocus: boolean;
    readonly round: boolean;
    readonly circle: boolean;
    readonly dark: boolean;
} & {
    readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
    readonly color?: string | undefined;
    readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
} & {
    title?: string | undefined;
    index?: number | undefined;
}>, {}>;
export declare const ArrayBase: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            keyMap: {
                type: PropType<string[] | WeakMap<Record<string, unknown>, string>>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled">;
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
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            keyMap: {
                type: PropType<string[] | WeakMap<Record<string, unknown>, string>>;
            };
        }>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            disabled: boolean;
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
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        keyMap: {
            type: PropType<string[] | WeakMap<Record<string, unknown>, string>>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    keyMap: {
        type: PropType<string[] | WeakMap<Record<string, unknown>, string>>;
    };
}>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    disabled: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Index: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    Item: import("vue").DefineComponent<Readonly<{
        index?: any;
        record?: any;
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
        index?: any;
        record?: any;
    }>>>, {
        index: any;
        record: any;
    }>;
    SortHandle: import("vue").DefineComponent<Readonly<{
        index?: any;
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
        index?: any;
    }>>>, {
        index: any;
    }>;
    Addition: import("vue").DefineComponent<Readonly<{
        method?: any;
        defaultValue?: any;
        title?: any;
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
        method?: any;
        defaultValue?: any;
        title?: any;
    }>>>, {
        method: any;
        defaultValue: any;
        title: any;
    }>;
    Remove: import("vue").DefineComponent<{
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
        readonly disabled: boolean;
        readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loading: boolean;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly plain: boolean;
        readonly text: boolean;
        readonly bg: boolean;
        readonly autofocus: boolean;
        readonly round: boolean;
        readonly circle: boolean;
        readonly dark: boolean;
    } & {
        readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
        readonly color?: string | undefined;
        readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    } & {
        title?: string | undefined;
        index?: number | undefined;
    }, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
        readonly disabled: boolean;
        readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loading: boolean;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly plain: boolean;
        readonly text: boolean;
        readonly bg: boolean;
        readonly autofocus: boolean;
        readonly round: boolean;
        readonly circle: boolean;
        readonly dark: boolean;
    } & {
        readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
        readonly color?: string | undefined;
        readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    } & {
        title?: string | undefined;
        index?: number | undefined;
    }>, {}>;
    MoveDown: import("vue").DefineComponent<{
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
        readonly disabled: boolean;
        readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loading: boolean;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly plain: boolean;
        readonly text: boolean;
        readonly bg: boolean;
        readonly autofocus: boolean;
        readonly round: boolean;
        readonly circle: boolean;
        readonly dark: boolean;
    } & {
        readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
        readonly color?: string | undefined;
        readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    } & {
        title?: string | undefined;
        index?: number | undefined;
    }, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
        readonly disabled: boolean;
        readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loading: boolean;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly plain: boolean;
        readonly text: boolean;
        readonly bg: boolean;
        readonly autofocus: boolean;
        readonly round: boolean;
        readonly circle: boolean;
        readonly dark: boolean;
    } & {
        readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
        readonly color?: string | undefined;
        readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    } & {
        title?: string | undefined;
        index?: number | undefined;
    }>, {}>;
    MoveUp: import("vue").DefineComponent<{
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
        readonly disabled: boolean;
        readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loading: boolean;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly plain: boolean;
        readonly text: boolean;
        readonly bg: boolean;
        readonly autofocus: boolean;
        readonly round: boolean;
        readonly circle: boolean;
        readonly dark: boolean;
    } & {
        readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
        readonly color?: string | undefined;
        readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    } & {
        title?: string | undefined;
        index?: number | undefined;
    }, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
        readonly disabled: boolean;
        readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loading: boolean;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly plain: boolean;
        readonly text: boolean;
        readonly bg: boolean;
        readonly autofocus: boolean;
        readonly round: boolean;
        readonly circle: boolean;
        readonly dark: boolean;
    } & {
        readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never> | undefined;
        readonly color?: string | undefined;
        readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    } & {
        title?: string | undefined;
        index?: number | undefined;
    }>, {}>;
    useArray: () => IArrayBaseContext | null;
    useIndex: (index?: number | undefined) => Ref<number>;
    useKey: (schema: Schema) => {
        keyMap: string[] | WeakMap<Record<string, unknown>, string>;
        getKey: (record: any, index: number) => string | undefined;
    };
    useRecord: (record?: number | undefined) => Ref<any>;
};
export {};
