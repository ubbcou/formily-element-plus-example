import { PropType } from 'vue';
declare type ActiveKeys = string | number | Array<string | number>;
declare type ActiveKey = string | number;
export interface IFormCollapse {
    activeKeys: ActiveKeys;
    hasActiveKey(key: ActiveKey): boolean;
    setActiveKeys(key: ActiveKeys): void;
    addActiveKey(key: ActiveKey): void;
    removeActiveKey(key: ActiveKey): void;
    toggleActiveKey(key: ActiveKey): void;
}
export interface IFormCollapseProps {
    formCollapse?: IFormCollapse;
    activeKey?: ActiveKey;
}
export declare const FormCollapseItem: import("vue").DefineComponent<{}, () => any, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
declare const composeFormCollapse: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{
            formCollapse: {
                type: PropType<IFormCollapse>;
            };
            activeKey: {
                type: (StringConstructor | NumberConstructor)[];
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
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
            formCollapse: {
                type: PropType<IFormCollapse>;
            };
            activeKey: {
                type: (StringConstructor | NumberConstructor)[];
            };
        }>>, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}> & {
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
        formCollapse: {
            type: PropType<IFormCollapse>;
        };
        activeKey: {
            type: (StringConstructor | NumberConstructor)[];
        };
    }>> & import("vue").ShallowUnwrapRef<() => any> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    formCollapse: {
        type: PropType<IFormCollapse>;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
}>>, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<{}, () => any, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    createFormCollapse: (defaultActiveKeys?: ActiveKeys | undefined) => {
        activeKeys: ActiveKeys | undefined;
        setActiveKeys(keys: ActiveKeys): void;
        hasActiveKey(key: ActiveKey): boolean;
        addActiveKey(key: ActiveKey): void;
        removeActiveKey(key: ActiveKey): void;
        toggleActiveKey(key: ActiveKey): void;
    };
};
export { composeFormCollapse as FormCollapse };
export default composeFormCollapse;
