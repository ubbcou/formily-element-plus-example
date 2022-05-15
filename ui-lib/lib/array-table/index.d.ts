import { Ref } from 'vue';
import type { VNode, Component } from 'vue';
export declare const ArrayTable: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            onChange: any;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<Readonly<{
            onChange?: any;
        }>>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "onChange" | undefined>;
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
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<Readonly<{
            onChange?: any;
        }>>>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            onChange: any;
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
    } & Readonly<import("vue").ExtractPropTypes<Readonly<{
        onChange?: any;
    }>>> & import("vue").ShallowUnwrapRef<() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<Readonly<{
    onChange?: any;
}>>>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    onChange: any;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Column: import("vue").ComponentOptions<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, any, any, any>;
    Index: import("vue").DefineComponent<{}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    SortHandle: import("vue").DefineComponent<Readonly<{
        index?: any;
    }>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    }>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "success" | "warning" | "info" | "danger" | "primary", unknown>;
        readonly disabled: boolean;
        readonly loading: boolean;
        readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
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
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "success" | "warning" | "info" | "danger" | "primary", unknown>;
        readonly disabled: boolean;
        readonly loading: boolean;
        readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
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
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "success" | "warning" | "info" | "danger" | "primary", unknown>;
        readonly disabled: boolean;
        readonly loading: boolean;
        readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
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
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "success" | "warning" | "info" | "danger" | "primary", unknown>;
        readonly disabled: boolean;
        readonly loading: boolean;
        readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
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
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "success" | "warning" | "info" | "danger" | "primary", unknown>;
        readonly disabled: boolean;
        readonly loading: boolean;
        readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
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
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "success" | "warning" | "info" | "danger" | "primary", unknown>;
        readonly disabled: boolean;
        readonly loading: boolean;
        readonly icon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
        readonly nativeType: import("element-plus/es/utils").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
        readonly loadingIcon: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
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
    useArray: () => import("../array-base").IArrayBaseContext | null;
    useIndex: (index?: number | undefined) => Ref<number>;
    useRecord: (record?: number | undefined) => Ref<any>;
};
export default ArrayTable;
