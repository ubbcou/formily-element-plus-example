export interface IArrayItemsItemProps {
    type?: 'card' | 'divide';
}
export declare const ArrayItems: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
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
        $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
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
    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<Readonly<{
        type?: any;
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
        type?: any;
    }>>>, {
        type: any;
    }>;
    Index: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
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
        readonly disabled: boolean;
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
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
        readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never> | undefined;
        readonly color?: string | undefined;
        readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    } & {
        title?: string | undefined;
        index?: number | undefined;
    }, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly disabled: boolean;
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
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
        readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never> | undefined;
        readonly color?: string | undefined;
        readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    } & {
        title?: string | undefined;
        index?: number | undefined;
    }>, {}>;
    MoveDown: import("vue").DefineComponent<{
        readonly disabled: boolean;
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
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
        readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never> | undefined;
        readonly color?: string | undefined;
        readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    } & {
        title?: string | undefined;
        index?: number | undefined;
    }, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly disabled: boolean;
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
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
        readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never> | undefined;
        readonly color?: string | undefined;
        readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    } & {
        title?: string | undefined;
        index?: number | undefined;
    }>, {}>;
    MoveUp: import("vue").DefineComponent<{
        readonly disabled: boolean;
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
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
        readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never> | undefined;
        readonly color?: string | undefined;
        readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    } & {
        title?: string | undefined;
        index?: number | undefined;
    }, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly disabled: boolean;
        readonly type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
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
        readonly size?: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never> | undefined;
        readonly color?: string | undefined;
        readonly autoInsertSpace?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    } & {
        title?: string | undefined;
        index?: number | undefined;
    }>, {}>;
    useArray: () => import("../array-base").IArrayBaseContext | null;
    useIndex: (index?: number | undefined) => import("vue").Ref<number>;
    useRecord: (record?: number | undefined) => import("vue").Ref<any>;
};
export default ArrayItems;
