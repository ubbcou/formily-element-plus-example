import { Ref } from 'vue';
import { ElCollapse } from 'element-plus';
declare type ElCollapseProps = typeof ElCollapse;
export declare type IArrayCollapseProps = ElCollapseProps & {
    defaultOpenPanelCount?: number;
};
export declare const ArrayCollapseInner: import("vue").DefineComponent<{
    defaultOpenPanelCount: {
        type: NumberConstructor;
        default: number;
    };
    onChange: {
        type: FunctionConstructor;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultOpenPanelCount: {
        type: NumberConstructor;
        default: number;
    };
    onChange: {
        type: FunctionConstructor;
    };
}>>, {
    defaultOpenPanelCount: number;
}>;
export declare const ArrayCollapseItem: import("vue").DefineComponent<import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    collapse: import("element-plus").CollapseContext | undefined;
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string | undefined) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    focusing: Ref<boolean>;
    isClick: Ref<boolean>;
    id: Ref<number>;
    isActive: import("vue").ComputedRef<boolean | undefined>;
    handleFocus: () => void;
    handleHeaderClick: () => void;
    handleEnterClick: () => void;
    ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        on: {
            beforeEnter(el: any): void;
            enter(el: any): void;
            afterEnter(el: any): void;
            beforeLeave(el: any): void;
            leave(el: any): void;
            afterLeave(el: any): void;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
    ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
        readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
        readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    }>>, {
        size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
        color: string;
    }>> & Record<string, any>;
    ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
}>>, {
    disabled: boolean;
    name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
    title: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
            title: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "name" | "disabled">;
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
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
        }>>, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
                readonly disabled: BooleanConstructor;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            collapse: import("element-plus").CollapseContext | undefined;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            focusing: Ref<boolean>;
            isClick: Ref<boolean>;
            id: Ref<number>;
            isActive: import("vue").ComputedRef<boolean | undefined>;
            handleFocus: () => void;
            handleHeaderClick: () => void;
            handleEnterClick: () => void;
            ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                on: {
                    beforeEnter(el: any): void;
                    enter(el: any): void;
                    afterEnter(el: any): void;
                    beforeLeave(el: any): void;
                    leave(el: any): void;
                    afterLeave(el: any): void;
                };
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                    readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                style: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }>>, {
                size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
                color: string;
            }>> & Record<string, any>;
            ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            disabled: boolean;
            name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
            title: string;
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
        readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
    }>> & import("vue").ShallowUnwrapRef<{
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        collapse: import("element-plus").CollapseContext | undefined;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        focusing: Ref<boolean>;
        isClick: Ref<boolean>;
        id: Ref<number>;
        isActive: import("vue").ComputedRef<boolean | undefined>;
        handleFocus: () => void;
        handleHeaderClick: () => void;
        handleEnterClick: () => void;
        ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            on: {
                beforeEnter(el: any): void;
                enter(el: any): void;
                afterEnter(el: any): void;
                beforeLeave(el: any): void;
                leave(el: any): void;
                afterLeave(el: any): void;
            };
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
        ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }>>, {
            size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
            color: string;
        }>> & Record<string, any>;
        ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
}>>, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    collapse: import("element-plus").CollapseContext | undefined;
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string | undefined) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    focusing: Ref<boolean>;
    isClick: Ref<boolean>;
    id: Ref<number>;
    isActive: import("vue").ComputedRef<boolean | undefined>;
    handleFocus: () => void;
    handleHeaderClick: () => void;
    handleEnterClick: () => void;
    ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        on: {
            beforeEnter(el: any): void;
            enter(el: any): void;
            afterEnter(el: any): void;
            beforeLeave(el: any): void;
            leave(el: any): void;
            afterLeave(el: any): void;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
    ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
        readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
        readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    }>>, {
        size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
        color: string;
    }>> & Record<string, any>;
    ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    disabled: boolean;
    name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
    title: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: ((app: import("vue").App<any>, ...options: any[]) => any) | undefined;
}>> | Readonly<import("vue").ExtractPropTypes<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
            title: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "name" | "disabled">;
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
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
        }>>, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
                readonly disabled: BooleanConstructor;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            collapse: import("element-plus").CollapseContext | undefined;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            focusing: Ref<boolean>;
            isClick: Ref<boolean>;
            id: Ref<number>;
            isActive: import("vue").ComputedRef<boolean | undefined>;
            handleFocus: () => void;
            handleHeaderClick: () => void;
            handleEnterClick: () => void;
            ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                on: {
                    beforeEnter(el: any): void;
                    enter(el: any): void;
                    afterEnter(el: any): void;
                    beforeLeave(el: any): void;
                    leave(el: any): void;
                    afterLeave(el: any): void;
                };
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                    readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                style: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }>>, {
                size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
                color: string;
            }>> & Record<string, any>;
            ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            disabled: boolean;
            name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
            title: string;
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
        readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
    }>> & import("vue").ShallowUnwrapRef<{
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        collapse: import("element-plus").CollapseContext | undefined;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        focusing: Ref<boolean>;
        isClick: Ref<boolean>;
        id: Ref<number>;
        isActive: import("vue").ComputedRef<boolean | undefined>;
        handleFocus: () => void;
        handleHeaderClick: () => void;
        handleEnterClick: () => void;
        ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            on: {
                beforeEnter(el: any): void;
                enter(el: any): void;
                afterEnter(el: any): void;
                beforeLeave(el: any): void;
                leave(el: any): void;
                afterLeave(el: any): void;
            };
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
        ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }>>, {
            size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
            color: string;
        }>> & Record<string, any>;
        ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
}>>, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    collapse: import("element-plus").CollapseContext | undefined;
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string | undefined) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    focusing: Ref<boolean>;
    isClick: Ref<boolean>;
    id: Ref<number>;
    isActive: import("vue").ComputedRef<boolean | undefined>;
    handleFocus: () => void;
    handleHeaderClick: () => void;
    handleEnterClick: () => void;
    ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        on: {
            beforeEnter(el: any): void;
            enter(el: any): void;
            afterEnter(el: any): void;
            beforeLeave(el: any): void;
            leave(el: any): void;
            afterLeave(el: any): void;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
    ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
        readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
        readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    }>>, {
        size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
        color: string;
    }>> & Record<string, any>;
    ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    disabled: boolean;
    name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
    title: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
}>>, {
    [x: string]: any;
} | {
    [x: string]: any;
}>;
export declare const ArrayCollapse: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            defaultOpenPanelCount: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            defaultOpenPanelCount: {
                type: NumberConstructor;
                default: number;
            };
            onChange: {
                type: FunctionConstructor;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "defaultOpenPanelCount">;
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
            defaultOpenPanelCount: {
                type: NumberConstructor;
                default: number;
            };
            onChange: {
                type: FunctionConstructor;
            };
        }>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            defaultOpenPanelCount: number;
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
        defaultOpenPanelCount: {
            type: NumberConstructor;
            default: number;
        };
        onChange: {
            type: FunctionConstructor;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    defaultOpenPanelCount: {
        type: NumberConstructor;
        default: number;
    };
    onChange: {
        type: FunctionConstructor;
    };
}>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    defaultOpenPanelCount: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        collapse: import("element-plus").CollapseContext | undefined;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        focusing: Ref<boolean>;
        isClick: Ref<boolean>;
        id: Ref<number>;
        isActive: import("vue").ComputedRef<boolean | undefined>;
        handleFocus: () => void;
        handleHeaderClick: () => void;
        handleEnterClick: () => void;
        ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            on: {
                beforeEnter(el: any): void;
                enter(el: any): void;
                afterEnter(el: any): void;
                beforeLeave(el: any): void;
                leave(el: any): void;
                afterLeave(el: any): void;
            };
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
        ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }>>, {
            size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
            color: string;
        }>> & Record<string, any>;
        ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
    }>>, {
        disabled: boolean;
        name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
        title: string;
    }>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                disabled: boolean;
                name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
                title: string;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
                readonly disabled: BooleanConstructor;
            }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "name" | "disabled">;
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
                readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
                readonly disabled: BooleanConstructor;
            }>>, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
                    readonly disabled: BooleanConstructor;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                collapse: import("element-plus").CollapseContext | undefined;
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                focusing: Ref<boolean>;
                isClick: Ref<boolean>;
                id: Ref<number>;
                isActive: import("vue").ComputedRef<boolean | undefined>;
                handleFocus: () => void;
                handleHeaderClick: () => void;
                handleEnterClick: () => void;
                ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    on: {
                        beforeEnter(el: any): void;
                        enter(el: any): void;
                        afterEnter(el: any): void;
                        beforeLeave(el: any): void;
                        leave(el: any): void;
                        afterLeave(el: any): void;
                    };
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
                ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                    readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                        readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    style: import("vue").ComputedRef<import("vue").CSSProperties>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                    readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
                }>>, {
                    size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
                    color: string;
                }>> & Record<string, any>;
                ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                disabled: boolean;
                name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
                title: string;
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
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
        }>> & import("vue").ShallowUnwrapRef<{
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
                readonly disabled: BooleanConstructor;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            collapse: import("element-plus").CollapseContext | undefined;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            focusing: Ref<boolean>;
            isClick: Ref<boolean>;
            id: Ref<number>;
            isActive: import("vue").ComputedRef<boolean | undefined>;
            handleFocus: () => void;
            handleHeaderClick: () => void;
            handleEnterClick: () => void;
            ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                on: {
                    beforeEnter(el: any): void;
                    enter(el: any): void;
                    afterEnter(el: any): void;
                    beforeLeave(el: any): void;
                    leave(el: any): void;
                    afterLeave(el: any): void;
                };
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                    readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                style: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }>>, {
                size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
                color: string;
            }>> & Record<string, any>;
            ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        }> & {} & {} & import("vue").ComponentCustomProperties;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
    }>>, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        collapse: import("element-plus").CollapseContext | undefined;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        focusing: Ref<boolean>;
        isClick: Ref<boolean>;
        id: Ref<number>;
        isActive: import("vue").ComputedRef<boolean | undefined>;
        handleFocus: () => void;
        handleHeaderClick: () => void;
        handleEnterClick: () => void;
        ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            on: {
                beforeEnter(el: any): void;
                enter(el: any): void;
                afterEnter(el: any): void;
                beforeLeave(el: any): void;
                leave(el: any): void;
                afterLeave(el: any): void;
            };
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
        ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }>>, {
            size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
            color: string;
        }>> & Record<string, any>;
        ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        disabled: boolean;
        name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
        title: string;
    }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App<any>, ...options: any[]) => any) & {
        install?: ((app: import("vue").App<any>, ...options: any[]) => any) | undefined;
    }>> | Readonly<import("vue").ExtractPropTypes<{
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                disabled: boolean;
                name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
                title: string;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
                readonly disabled: BooleanConstructor;
            }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "name" | "disabled">;
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
                readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
                readonly disabled: BooleanConstructor;
            }>>, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
                    readonly disabled: BooleanConstructor;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                collapse: import("element-plus").CollapseContext | undefined;
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                focusing: Ref<boolean>;
                isClick: Ref<boolean>;
                id: Ref<number>;
                isActive: import("vue").ComputedRef<boolean | undefined>;
                handleFocus: () => void;
                handleHeaderClick: () => void;
                handleEnterClick: () => void;
                ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    on: {
                        beforeEnter(el: any): void;
                        enter(el: any): void;
                        afterEnter(el: any): void;
                        beforeLeave(el: any): void;
                        leave(el: any): void;
                        afterLeave(el: any): void;
                    };
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
                ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                    readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                        readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    style: import("vue").ComputedRef<import("vue").CSSProperties>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                    readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
                }>>, {
                    size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
                    color: string;
                }>> & Record<string, any>;
                ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                disabled: boolean;
                name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
                title: string;
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
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
        }>> & import("vue").ShallowUnwrapRef<{
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
                readonly disabled: BooleanConstructor;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            collapse: import("element-plus").CollapseContext | undefined;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            focusing: Ref<boolean>;
            isClick: Ref<boolean>;
            id: Ref<number>;
            isActive: import("vue").ComputedRef<boolean | undefined>;
            handleFocus: () => void;
            handleHeaderClick: () => void;
            handleEnterClick: () => void;
            ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                on: {
                    beforeEnter(el: any): void;
                    enter(el: any): void;
                    afterEnter(el: any): void;
                    beforeLeave(el: any): void;
                    leave(el: any): void;
                    afterLeave(el: any): void;
                };
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                    readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                style: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }>>, {
                size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
                color: string;
            }>> & Record<string, any>;
            ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        }> & {} & {} & import("vue").ComponentCustomProperties;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
    }>>, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, () => number, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        collapse: import("element-plus").CollapseContext | undefined;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        focusing: Ref<boolean>;
        isClick: Ref<boolean>;
        id: Ref<number>;
        isActive: import("vue").ComputedRef<boolean | undefined>;
        handleFocus: () => void;
        handleHeaderClick: () => void;
        handleEnterClick: () => void;
        ElCollapseTransition: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{}, {
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            on: {
                beforeEnter(el: any): void;
                enter(el: any): void;
                afterEnter(el: any): void;
                beforeLeave(el: any): void;
                leave(el: any): void;
                afterLeave(el: any): void;
            };
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
        ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }>>, {
            size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
            color: string;
        }>> & Record<string, any>;
        ArrowRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        disabled: boolean;
        name: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").CollapseActiveName>, unknown, unknown>;
        title: string;
    }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: import("vue").App<any>, ...options: any[]) => any;
    }>>, {
        [x: string]: any;
    } | {
        [x: string]: any;
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
        title?: any;
        method?: any;
        defaultValue?: any;
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
        title?: any;
        method?: any;
        defaultValue?: any;
    }>>>, {
        title: any;
        method: any;
        defaultValue: any;
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
    useArray: () => import("../array-base").IArrayBaseContext | null;
    useIndex: (index?: number | undefined) => Ref<number>;
    useRecord: (record?: number | undefined) => Ref<any>;
};
export default ArrayCollapse;
