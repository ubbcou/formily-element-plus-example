import { SlotTypes } from '../__builtins__/shared';
import { ElCheckbox, ElCheckboxGroup } from 'element-plus';
declare type ElCheckboxProps = Omit<typeof ElCheckbox, 'value'> & {
    value: ElCheckboxProps['label'];
};
export interface CheckboxProps extends ElCheckboxProps {
    option: Omit<typeof ElCheckbox, 'value'> & {
        value: ElCheckboxProps['label'];
        label: SlotTypes;
    };
}
export declare type CheckboxGroupProps = typeof ElCheckboxGroup & {
    value: any[];
    options?: Array<CheckboxProps | string>;
    optionType: 'default' | 'button';
};
export declare const Checkbox: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            option: Record<string, any>;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            option: {
                type: ObjectConstructor;
                default: null;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "option">;
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
            option: {
                type: ObjectConstructor;
                default: null;
            };
        }>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            option: Record<string, any>;
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
        option: {
            type: ObjectConstructor;
            default: null;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    option: {
        type: ObjectConstructor;
        default: null;
    };
}>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    option: Record<string, any>;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Group: import("vue").ComponentOptions<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, any, any, any> | {
        new (...args: any[]): any;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    };
};
export default Checkbox;
