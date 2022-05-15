import { PropType } from 'vue';
import { VoidField, Form } from '@formily/core';
import { Schema, SchemaKey } from '@formily/json-schema';
export interface IFormStep {
    connect: (steps: SchemaStep[], field: VoidField) => void;
    current: number;
    allowNext: boolean;
    allowBack: boolean;
    setCurrent(key: number): void;
    submit: Form['submit'];
    next(): void;
    back(): void;
}
export interface IFormStepProps {
    formStep?: IFormStep;
}
declare type SchemaStep = {
    name: SchemaKey;
    props: any;
    schema: Schema;
};
export declare const FormStep: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            formStep: IFormStep;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            formStep: {
                type: PropType<IFormStep>;
                default(): {
                    current: number;
                };
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "formStep">;
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
            formStep: {
                type: PropType<IFormStep>;
                default(): {
                    current: number;
                };
            };
        }>>, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            formStep: IFormStep;
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
        formStep: {
            type: PropType<IFormStep>;
            default(): {
                current: number;
            };
        };
    }>> & import("vue").ShallowUnwrapRef<() => any> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    formStep: {
        type: PropType<IFormStep>;
        default(): {
            current: number;
        };
    };
}>>, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    formStep: IFormStep;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    StepPane: import("vue").DefineComponent<{}, () => any, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    createFormStep: (defaultCurrent?: number) => IFormStep;
};
export default FormStep;
