import { Ref } from 'vue';
import { ElPopover } from 'element-plus';
import { FormItemProps } from '../form-item';
export declare type EditableProps = FormItemProps;
export declare type EditablePopoverProps = typeof ElPopover;
export declare const Editable: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<FormItemProps> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, undefined>;
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
        $options: import("vue").ComponentOptionsBase<Readonly<FormItemProps>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
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
    } & Readonly<FormItemProps> & import("vue").ShallowUnwrapRef<{}> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<FormItemProps>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Popover: import("vue").DefineComponent<import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
        readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, "bottom", unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
        readonly visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
        readonly transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
        readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
        readonly tabindex: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, 0, unknown, unknown, unknown>;
        readonly content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
        readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | any[] | {
            [x: string]: boolean;
        })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
        readonly enterable: {
            readonly default: true;
            readonly type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __elPropsReservedKey: true;
        };
        readonly effect: {
            readonly default: "light";
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __elPropsReservedKey: true;
        };
        readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly title: StringConstructor;
        readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], 150, unknown, unknown, unknown>;
        readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, undefined, unknown, unknown, unknown>;
        readonly showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
        readonly autoClose: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly persistent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    }, {
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
        kls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | any[] | {
            [x: string]: boolean;
        })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
        gpuAcceleration: import("vue").ComputedRef<boolean>;
        style: import("vue").ComputedRef<import("vue").StyleValue>;
        tooltipRef: Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                boundariesPadding: number;
                fallbackPlacements: import("element-plus").Placement[];
                gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperOptions: Partial<import("element-plus").Options>;
                strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                style: import("vue").StyleValue;
                className: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                referenceEl: HTMLElement;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                pure: boolean;
                appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                content: string;
                rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: boolean;
                open: boolean;
                arrowOffset: number;
                virtualRef: import("element-plus").Measurable;
                virtualTriggering: boolean;
                "onUpdate:visible": (val: boolean) => void;
                openDelay: number;
                visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "trigger" | "placement" | "disabled" | "visible" | "transition" | "popperOptions" | "content" | "popperStyle" | "popperClass" | "enterable" | "effect" | "teleported" | "offset" | "showAfter" | "hideAfter" | "showArrow" | "persistent" | "strategy" | "className" | "style" | "openDelay" | "visibleArrow" | "arrowOffset" | "virtualRef" | "virtualTriggering" | "open" | "appendTo" | "rawContent" | "pure" | "referenceEl" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "onUpdate:visible">;
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
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            }, {
                compatShowAfter: import("vue").ComputedRef<number>;
                compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                popperRef: Ref<({
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
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                        triggerRef: Ref<HTMLElement | undefined>;
                        popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: Ref<HTMLElement | undefined>;
                        referenceRef: Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                    triggerRef: Ref<HTMLElement | undefined>;
                    popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: Ref<HTMLElement | undefined>;
                    referenceRef: Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }> & import("vue").ComponentCustomProperties) | null>;
                open: Ref<boolean>;
                hide: () => void;
                updatePopper: () => void;
                onOpen: () => void;
                onClose: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                boundariesPadding: number;
                fallbackPlacements: import("element-plus").Placement[];
                gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperOptions: Partial<import("element-plus").Options>;
                strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                style: import("vue").StyleValue;
                className: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                referenceEl: HTMLElement;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                pure: boolean;
                appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                content: string;
                rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: boolean;
                open: boolean;
                arrowOffset: number;
                virtualRef: import("element-plus").Measurable;
                virtualTriggering: boolean;
                "onUpdate:visible": (val: boolean) => void;
                openDelay: number;
                visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
            disabled: BooleanConstructor;
            trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
            virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
            virtualTriggering: BooleanConstructor;
            onMouseenter: FunctionConstructor;
            onMouseleave: FunctionConstructor;
            onClick: FunctionConstructor;
            onKeydown: FunctionConstructor;
            onFocus: FunctionConstructor;
            onBlur: FunctionConstructor;
            onContextmenu: FunctionConstructor;
            id: StringConstructor;
            open: BooleanConstructor;
            appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
            content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            persistent: BooleanConstructor;
            ariaLabel: StringConstructor;
            visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
            transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
            teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
            enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            pure: BooleanConstructor;
            popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            zIndex: NumberConstructor;
            boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
            gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
            popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
            strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
            showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            compatShowAfter: import("vue").ComputedRef<number>;
            compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            popperRef: Ref<({
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
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                    triggerRef: Ref<HTMLElement | undefined>;
                    popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: Ref<HTMLElement | undefined>;
                    referenceRef: Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                triggerRef: Ref<HTMLElement | undefined>;
                popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: Ref<HTMLElement | undefined>;
                referenceRef: Ref<HTMLElement | undefined>;
                popperProvides: import("element-plus").ElPopperInjectionContext;
            }> & import("vue").ComponentCustomProperties) | null>;
            open: Ref<boolean>;
            hide: () => void;
            updatePopper: () => void;
            onOpen: () => void;
            onClose: () => void;
        }> & import("vue").ComponentCustomProperties) | null>;
        popperRef: import("vue").ComputedRef<({
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
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                triggerRef: Ref<HTMLElement | undefined>;
                popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: Ref<HTMLElement | undefined>;
                referenceRef: Ref<HTMLElement | undefined>;
                popperProvides: import("element-plus").ElPopperInjectionContext;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
            triggerRef: Ref<HTMLElement | undefined>;
            popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
            contentRef: Ref<HTMLElement | undefined>;
            referenceRef: Ref<HTMLElement | undefined>;
            popperProvides: import("element-plus").ElPopperInjectionContext;
        }> & import("vue").ComponentCustomProperties) | null | undefined>;
        hide: () => void;
        beforeEnter: () => void;
        beforeLeave: () => void;
        afterEnter: () => void;
        afterLeave: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
        readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, "bottom", unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
        readonly visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
        readonly transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
        readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
        readonly tabindex: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, 0, unknown, unknown, unknown>;
        readonly content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
        readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | any[] | {
            [x: string]: boolean;
        })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
        readonly enterable: {
            readonly default: true;
            readonly type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __elPropsReservedKey: true;
        };
        readonly effect: {
            readonly default: "light";
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __elPropsReservedKey: true;
        };
        readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly title: StringConstructor;
        readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], 150, unknown, unknown, unknown>;
        readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, undefined, unknown, unknown, unknown>;
        readonly showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
        readonly autoClose: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly persistent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
    }, {
        disabled: boolean;
        trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
        offset: number;
        width: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        effect: string;
        placement: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, unknown, unknown>;
        popperClass: string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | any[] | {
            [x: string]: boolean;
        })[])[])[])[])[])[])[])[])[])[];
        showAfter: number;
        hideAfter: number;
        popperOptions: Partial<import("element-plus").Options>;
        enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        popperStyle: import("vue").StyleValue;
        visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
        content: string;
        transition: string;
        teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        persistent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        tabindex: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
        showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        autoClose: number;
    }>> & {
        directive: import("element-plus/es/utils").SFCWithInstall<import("vue").ObjectDirective<any, any>>;
    }, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                width: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, unknown, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                popperOptions: Partial<import("element-plus").Options>;
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                content: string;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                tabindex: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                autoClose: number;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, "bottom", unknown, unknown, unknown>;
                readonly disabled: BooleanConstructor;
                readonly visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                readonly transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                readonly tabindex: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, 0, unknown, unknown, unknown>;
                readonly content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                readonly enterable: {
                    readonly default: true;
                    readonly type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __elPropsReservedKey: true;
                };
                readonly effect: {
                    readonly default: "light";
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __elPropsReservedKey: true;
                };
                readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                readonly title: StringConstructor;
                readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], 150, unknown, unknown, unknown>;
                readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, undefined, unknown, unknown, unknown>;
                readonly showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                readonly hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
                readonly autoClose: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                readonly persistent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "trigger" | "placement" | "disabled" | "visible" | "transition" | "popperOptions" | "tabindex" | "content" | "popperStyle" | "popperClass" | "enterable" | "effect" | "teleported" | "width" | "offset" | "showAfter" | "hideAfter" | "autoClose" | "showArrow" | "persistent">;
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
                readonly trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, "bottom", unknown, unknown, unknown>;
                readonly disabled: BooleanConstructor;
                readonly visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                readonly transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                readonly tabindex: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, 0, unknown, unknown, unknown>;
                readonly content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                readonly enterable: {
                    readonly default: true;
                    readonly type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __elPropsReservedKey: true;
                };
                readonly effect: {
                    readonly default: "light";
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __elPropsReservedKey: true;
                };
                readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                readonly title: StringConstructor;
                readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], 150, unknown, unknown, unknown>;
                readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, undefined, unknown, unknown, unknown>;
                readonly showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                readonly hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
                readonly autoClose: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                readonly persistent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            }, {
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
                kls: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
                gpuAcceleration: import("vue").ComputedRef<boolean>;
                style: import("vue").ComputedRef<import("vue").StyleValue>;
                tooltipRef: Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{
                        disabled: boolean;
                        trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                        offset: number;
                        effect: string;
                        placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                        popperClass: string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[];
                        showAfter: number;
                        hideAfter: number;
                        boundariesPadding: number;
                        fallbackPlacements: import("element-plus").Placement[];
                        gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        popperOptions: Partial<import("element-plus").Options>;
                        strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                        style: import("vue").StyleValue;
                        className: string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[];
                        enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        popperStyle: import("vue").StyleValue;
                        referenceEl: HTMLElement;
                        stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                        pure: boolean;
                        appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                        content: string;
                        rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        transition: string;
                        teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        persistent: boolean;
                        open: boolean;
                        arrowOffset: number;
                        virtualRef: import("element-plus").Measurable;
                        virtualTriggering: boolean;
                        "onUpdate:visible": (val: boolean) => void;
                        openDelay: number;
                        visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                        openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                        visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                        hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                        showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                        arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                        disabled: BooleanConstructor;
                        trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                        virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                        virtualTriggering: BooleanConstructor;
                        onMouseenter: FunctionConstructor;
                        onMouseleave: FunctionConstructor;
                        onClick: FunctionConstructor;
                        onKeydown: FunctionConstructor;
                        onFocus: FunctionConstructor;
                        onBlur: FunctionConstructor;
                        onContextmenu: FunctionConstructor;
                        id: StringConstructor;
                        open: BooleanConstructor;
                        appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                        content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                        rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                        persistent: BooleanConstructor;
                        ariaLabel: StringConstructor;
                        visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                        transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                        teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                        className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                        effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                        enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        pure: BooleanConstructor;
                        popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                        popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                        referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                        stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        zIndex: NumberConstructor;
                        boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                        fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                        gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                        placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                        popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                        strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                        showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                        "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "trigger" | "placement" | "disabled" | "visible" | "transition" | "popperOptions" | "content" | "popperStyle" | "popperClass" | "enterable" | "effect" | "teleported" | "offset" | "showAfter" | "hideAfter" | "showArrow" | "persistent" | "strategy" | "className" | "style" | "openDelay" | "visibleArrow" | "arrowOffset" | "virtualRef" | "virtualTriggering" | "open" | "appendTo" | "rawContent" | "pure" | "referenceEl" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "onUpdate:visible">;
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
                        openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                        visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                        hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                        showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                        arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                        disabled: BooleanConstructor;
                        trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                        virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                        virtualTriggering: BooleanConstructor;
                        onMouseenter: FunctionConstructor;
                        onMouseleave: FunctionConstructor;
                        onClick: FunctionConstructor;
                        onKeydown: FunctionConstructor;
                        onFocus: FunctionConstructor;
                        onBlur: FunctionConstructor;
                        onContextmenu: FunctionConstructor;
                        id: StringConstructor;
                        open: BooleanConstructor;
                        appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                        content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                        rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                        persistent: BooleanConstructor;
                        ariaLabel: StringConstructor;
                        visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                        transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                        teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                        className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                        effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                        enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        pure: BooleanConstructor;
                        popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                        popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                        referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                        stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        zIndex: NumberConstructor;
                        boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                        fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                        gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                        placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                        popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                        strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                        showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                        "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                    }, {
                        compatShowAfter: import("vue").ComputedRef<number>;
                        compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                        popperRef: Ref<({
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
                            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                                triggerRef: Ref<HTMLElement | undefined>;
                                popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                                contentRef: Ref<HTMLElement | undefined>;
                                referenceRef: Ref<HTMLElement | undefined>;
                                popperProvides: import("element-plus").ElPopperInjectionContext;
                            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                                beforeCreate?: (() => void) | (() => void)[] | undefined;
                                created?: (() => void) | (() => void)[] | undefined;
                                beforeMount?: (() => void) | (() => void)[] | undefined;
                                mounted?: (() => void) | (() => void)[] | undefined;
                                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                                updated?: (() => void) | (() => void)[] | undefined;
                                activated?: (() => void) | (() => void)[] | undefined;
                                deactivated?: (() => void) | (() => void)[] | undefined;
                                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                                destroyed?: (() => void) | (() => void)[] | undefined;
                                unmounted?: (() => void) | (() => void)[] | undefined;
                                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                            };
                            $forceUpdate: () => void;
                            $nextTick: typeof import("vue").nextTick;
                            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                        } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                            triggerRef: Ref<HTMLElement | undefined>;
                            popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                            contentRef: Ref<HTMLElement | undefined>;
                            referenceRef: Ref<HTMLElement | undefined>;
                            popperProvides: import("element-plus").ElPopperInjectionContext;
                        }> & import("vue").ComponentCustomProperties) | null>;
                        open: Ref<boolean>;
                        hide: () => void;
                        updatePopper: () => void;
                        onOpen: () => void;
                        onClose: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                        disabled: boolean;
                        trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                        offset: number;
                        effect: string;
                        placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                        popperClass: string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[];
                        showAfter: number;
                        hideAfter: number;
                        boundariesPadding: number;
                        fallbackPlacements: import("element-plus").Placement[];
                        gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        popperOptions: Partial<import("element-plus").Options>;
                        strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                        style: import("vue").StyleValue;
                        className: string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[];
                        enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        popperStyle: import("vue").StyleValue;
                        referenceEl: HTMLElement;
                        stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                        pure: boolean;
                        appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                        content: string;
                        rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        transition: string;
                        teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        persistent: boolean;
                        open: boolean;
                        arrowOffset: number;
                        virtualRef: import("element-plus").Measurable;
                        virtualTriggering: boolean;
                        "onUpdate:visible": (val: boolean) => void;
                        openDelay: number;
                        visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    }> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{
                    openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                    disabled: BooleanConstructor;
                    trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                    virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                    virtualTriggering: BooleanConstructor;
                    onMouseenter: FunctionConstructor;
                    onMouseleave: FunctionConstructor;
                    onClick: FunctionConstructor;
                    onKeydown: FunctionConstructor;
                    onFocus: FunctionConstructor;
                    onBlur: FunctionConstructor;
                    onContextmenu: FunctionConstructor;
                    id: StringConstructor;
                    open: BooleanConstructor;
                    appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                    content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                    transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                    enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    pure: BooleanConstructor;
                    popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                    gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                    placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                    popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                    strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                    showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                } & import("vue").ShallowUnwrapRef<{
                    compatShowAfter: import("vue").ComputedRef<number>;
                    compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                    popperRef: Ref<({
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
                        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                            triggerRef: Ref<HTMLElement | undefined>;
                            popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                            contentRef: Ref<HTMLElement | undefined>;
                            referenceRef: Ref<HTMLElement | undefined>;
                            popperProvides: import("element-plus").ElPopperInjectionContext;
                        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                            beforeCreate?: (() => void) | (() => void)[] | undefined;
                            created?: (() => void) | (() => void)[] | undefined;
                            beforeMount?: (() => void) | (() => void)[] | undefined;
                            mounted?: (() => void) | (() => void)[] | undefined;
                            beforeUpdate?: (() => void) | (() => void)[] | undefined;
                            updated?: (() => void) | (() => void)[] | undefined;
                            activated?: (() => void) | (() => void)[] | undefined;
                            deactivated?: (() => void) | (() => void)[] | undefined;
                            beforeDestroy?: (() => void) | (() => void)[] | undefined;
                            beforeUnmount?: (() => void) | (() => void)[] | undefined;
                            destroyed?: (() => void) | (() => void)[] | undefined;
                            unmounted?: (() => void) | (() => void)[] | undefined;
                            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                        };
                        $forceUpdate: () => void;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                        triggerRef: Ref<HTMLElement | undefined>;
                        popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: Ref<HTMLElement | undefined>;
                        referenceRef: Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }> & import("vue").ComponentCustomProperties) | null>;
                    open: Ref<boolean>;
                    hide: () => void;
                    updatePopper: () => void;
                    onOpen: () => void;
                    onClose: () => void;
                }> & import("vue").ComponentCustomProperties) | null>;
                popperRef: import("vue").ComputedRef<({
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
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                        triggerRef: Ref<HTMLElement | undefined>;
                        popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: Ref<HTMLElement | undefined>;
                        referenceRef: Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                    triggerRef: Ref<HTMLElement | undefined>;
                    popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: Ref<HTMLElement | undefined>;
                    referenceRef: Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }> & import("vue").ComponentCustomProperties) | null | undefined>;
                hide: () => void;
                beforeEnter: () => void;
                beforeLeave: () => void;
                afterEnter: () => void;
                afterLeave: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                width: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, unknown, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                popperOptions: Partial<import("element-plus").Options>;
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                content: string;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                tabindex: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                autoClose: number;
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
            readonly trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
            readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, "bottom", unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
            readonly visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
            readonly transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
            readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
            readonly tabindex: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, 0, unknown, unknown, unknown>;
            readonly content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            readonly enterable: {
                readonly default: true;
                readonly type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __elPropsReservedKey: true;
            };
            readonly effect: {
                readonly default: "light";
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __elPropsReservedKey: true;
            };
            readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly title: StringConstructor;
            readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], 150, unknown, unknown, unknown>;
            readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, undefined, unknown, unknown, unknown>;
            readonly showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            readonly hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
            readonly autoClose: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly persistent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
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
            kls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
            gpuAcceleration: import("vue").ComputedRef<boolean>;
            style: import("vue").ComputedRef<import("vue").StyleValue>;
            tooltipRef: Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    disabled: boolean;
                    trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                    offset: number;
                    effect: string;
                    placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                    popperClass: string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[];
                    showAfter: number;
                    hideAfter: number;
                    boundariesPadding: number;
                    fallbackPlacements: import("element-plus").Placement[];
                    gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperOptions: Partial<import("element-plus").Options>;
                    strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                    style: import("vue").StyleValue;
                    className: string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[];
                    enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperStyle: import("vue").StyleValue;
                    referenceEl: HTMLElement;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                    pure: boolean;
                    appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                    content: string;
                    rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    transition: string;
                    teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    persistent: boolean;
                    open: boolean;
                    arrowOffset: number;
                    virtualRef: import("element-plus").Measurable;
                    virtualTriggering: boolean;
                    "onUpdate:visible": (val: boolean) => void;
                    openDelay: number;
                    visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                    disabled: BooleanConstructor;
                    trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                    virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                    virtualTriggering: BooleanConstructor;
                    onMouseenter: FunctionConstructor;
                    onMouseleave: FunctionConstructor;
                    onClick: FunctionConstructor;
                    onKeydown: FunctionConstructor;
                    onFocus: FunctionConstructor;
                    onBlur: FunctionConstructor;
                    onContextmenu: FunctionConstructor;
                    id: StringConstructor;
                    open: BooleanConstructor;
                    appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                    content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                    transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                    enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    pure: BooleanConstructor;
                    popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                    gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                    placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                    popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                    strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                    showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "trigger" | "placement" | "disabled" | "visible" | "transition" | "popperOptions" | "content" | "popperStyle" | "popperClass" | "enterable" | "effect" | "teleported" | "offset" | "showAfter" | "hideAfter" | "showArrow" | "persistent" | "strategy" | "className" | "style" | "openDelay" | "visibleArrow" | "arrowOffset" | "virtualRef" | "virtualTriggering" | "open" | "appendTo" | "rawContent" | "pure" | "referenceEl" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "onUpdate:visible">;
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
                    openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                    disabled: BooleanConstructor;
                    trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                    virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                    virtualTriggering: BooleanConstructor;
                    onMouseenter: FunctionConstructor;
                    onMouseleave: FunctionConstructor;
                    onClick: FunctionConstructor;
                    onKeydown: FunctionConstructor;
                    onFocus: FunctionConstructor;
                    onBlur: FunctionConstructor;
                    onContextmenu: FunctionConstructor;
                    id: StringConstructor;
                    open: BooleanConstructor;
                    appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                    content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                    transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                    enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    pure: BooleanConstructor;
                    popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                    gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                    placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                    popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                    strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                    showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                }, {
                    compatShowAfter: import("vue").ComputedRef<number>;
                    compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                    popperRef: Ref<({
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
                        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                            triggerRef: Ref<HTMLElement | undefined>;
                            popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                            contentRef: Ref<HTMLElement | undefined>;
                            referenceRef: Ref<HTMLElement | undefined>;
                            popperProvides: import("element-plus").ElPopperInjectionContext;
                        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                            beforeCreate?: (() => void) | (() => void)[] | undefined;
                            created?: (() => void) | (() => void)[] | undefined;
                            beforeMount?: (() => void) | (() => void)[] | undefined;
                            mounted?: (() => void) | (() => void)[] | undefined;
                            beforeUpdate?: (() => void) | (() => void)[] | undefined;
                            updated?: (() => void) | (() => void)[] | undefined;
                            activated?: (() => void) | (() => void)[] | undefined;
                            deactivated?: (() => void) | (() => void)[] | undefined;
                            beforeDestroy?: (() => void) | (() => void)[] | undefined;
                            beforeUnmount?: (() => void) | (() => void)[] | undefined;
                            destroyed?: (() => void) | (() => void)[] | undefined;
                            unmounted?: (() => void) | (() => void)[] | undefined;
                            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                        };
                        $forceUpdate: () => void;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                        triggerRef: Ref<HTMLElement | undefined>;
                        popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: Ref<HTMLElement | undefined>;
                        referenceRef: Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }> & import("vue").ComponentCustomProperties) | null>;
                    open: Ref<boolean>;
                    hide: () => void;
                    updatePopper: () => void;
                    onOpen: () => void;
                    onClose: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                    disabled: boolean;
                    trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                    offset: number;
                    effect: string;
                    placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                    popperClass: string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[];
                    showAfter: number;
                    hideAfter: number;
                    boundariesPadding: number;
                    fallbackPlacements: import("element-plus").Placement[];
                    gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperOptions: Partial<import("element-plus").Options>;
                    strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                    style: import("vue").StyleValue;
                    className: string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[];
                    enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperStyle: import("vue").StyleValue;
                    referenceEl: HTMLElement;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                    pure: boolean;
                    appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                    content: string;
                    rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    transition: string;
                    teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    persistent: boolean;
                    open: boolean;
                    arrowOffset: number;
                    virtualRef: import("element-plus").Measurable;
                    virtualTriggering: boolean;
                    "onUpdate:visible": (val: boolean) => void;
                    openDelay: number;
                    visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                }> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").ShallowUnwrapRef<{
                compatShowAfter: import("vue").ComputedRef<number>;
                compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                popperRef: Ref<({
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
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                        triggerRef: Ref<HTMLElement | undefined>;
                        popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: Ref<HTMLElement | undefined>;
                        referenceRef: Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                    triggerRef: Ref<HTMLElement | undefined>;
                    popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: Ref<HTMLElement | undefined>;
                    referenceRef: Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }> & import("vue").ComponentCustomProperties) | null>;
                open: Ref<boolean>;
                hide: () => void;
                updatePopper: () => void;
                onOpen: () => void;
                onClose: () => void;
            }> & import("vue").ComponentCustomProperties) | null>;
            popperRef: import("vue").ComputedRef<({
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
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                    triggerRef: Ref<HTMLElement | undefined>;
                    popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: Ref<HTMLElement | undefined>;
                    referenceRef: Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                triggerRef: Ref<HTMLElement | undefined>;
                popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: Ref<HTMLElement | undefined>;
                referenceRef: Ref<HTMLElement | undefined>;
                popperProvides: import("element-plus").ElPopperInjectionContext;
            }> & import("vue").ComponentCustomProperties) | null | undefined>;
            hide: () => void;
            beforeEnter: () => void;
            beforeLeave: () => void;
            afterEnter: () => void;
            afterLeave: () => void;
        }> & {} & {} & import("vue").ComponentCustomProperties;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        readonly trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
        readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, "bottom", unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
        readonly visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
        readonly transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
        readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
        readonly tabindex: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, 0, unknown, unknown, unknown>;
        readonly content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
        readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | any[] | {
            [x: string]: boolean;
        })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
        readonly enterable: {
            readonly default: true;
            readonly type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __elPropsReservedKey: true;
        };
        readonly effect: {
            readonly default: "light";
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __elPropsReservedKey: true;
        };
        readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly title: StringConstructor;
        readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], 150, unknown, unknown, unknown>;
        readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, undefined, unknown, unknown, unknown>;
        readonly showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
        readonly autoClose: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly persistent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
    }, {
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
        kls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | any[] | {
            [x: string]: boolean;
        })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
        gpuAcceleration: import("vue").ComputedRef<boolean>;
        style: import("vue").ComputedRef<import("vue").StyleValue>;
        tooltipRef: Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                boundariesPadding: number;
                fallbackPlacements: import("element-plus").Placement[];
                gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperOptions: Partial<import("element-plus").Options>;
                strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                style: import("vue").StyleValue;
                className: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                referenceEl: HTMLElement;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                pure: boolean;
                appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                content: string;
                rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: boolean;
                open: boolean;
                arrowOffset: number;
                virtualRef: import("element-plus").Measurable;
                virtualTriggering: boolean;
                "onUpdate:visible": (val: boolean) => void;
                openDelay: number;
                visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "trigger" | "placement" | "disabled" | "visible" | "transition" | "popperOptions" | "content" | "popperStyle" | "popperClass" | "enterable" | "effect" | "teleported" | "offset" | "showAfter" | "hideAfter" | "showArrow" | "persistent" | "strategy" | "className" | "style" | "openDelay" | "visibleArrow" | "arrowOffset" | "virtualRef" | "virtualTriggering" | "open" | "appendTo" | "rawContent" | "pure" | "referenceEl" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "onUpdate:visible">;
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
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            }, {
                compatShowAfter: import("vue").ComputedRef<number>;
                compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                popperRef: Ref<({
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
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                        triggerRef: Ref<HTMLElement | undefined>;
                        popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: Ref<HTMLElement | undefined>;
                        referenceRef: Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                    triggerRef: Ref<HTMLElement | undefined>;
                    popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: Ref<HTMLElement | undefined>;
                    referenceRef: Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }> & import("vue").ComponentCustomProperties) | null>;
                open: Ref<boolean>;
                hide: () => void;
                updatePopper: () => void;
                onOpen: () => void;
                onClose: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                boundariesPadding: number;
                fallbackPlacements: import("element-plus").Placement[];
                gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperOptions: Partial<import("element-plus").Options>;
                strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                style: import("vue").StyleValue;
                className: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                referenceEl: HTMLElement;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                pure: boolean;
                appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                content: string;
                rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: boolean;
                open: boolean;
                arrowOffset: number;
                virtualRef: import("element-plus").Measurable;
                virtualTriggering: boolean;
                "onUpdate:visible": (val: boolean) => void;
                openDelay: number;
                visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
            disabled: BooleanConstructor;
            trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
            virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
            virtualTriggering: BooleanConstructor;
            onMouseenter: FunctionConstructor;
            onMouseleave: FunctionConstructor;
            onClick: FunctionConstructor;
            onKeydown: FunctionConstructor;
            onFocus: FunctionConstructor;
            onBlur: FunctionConstructor;
            onContextmenu: FunctionConstructor;
            id: StringConstructor;
            open: BooleanConstructor;
            appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
            content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            persistent: BooleanConstructor;
            ariaLabel: StringConstructor;
            visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
            transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
            teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
            enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            pure: BooleanConstructor;
            popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            zIndex: NumberConstructor;
            boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
            gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
            popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
            strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
            showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            compatShowAfter: import("vue").ComputedRef<number>;
            compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            popperRef: Ref<({
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
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                    triggerRef: Ref<HTMLElement | undefined>;
                    popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: Ref<HTMLElement | undefined>;
                    referenceRef: Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                triggerRef: Ref<HTMLElement | undefined>;
                popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: Ref<HTMLElement | undefined>;
                referenceRef: Ref<HTMLElement | undefined>;
                popperProvides: import("element-plus").ElPopperInjectionContext;
            }> & import("vue").ComponentCustomProperties) | null>;
            open: Ref<boolean>;
            hide: () => void;
            updatePopper: () => void;
            onOpen: () => void;
            onClose: () => void;
        }> & import("vue").ComponentCustomProperties) | null>;
        popperRef: import("vue").ComputedRef<({
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
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                triggerRef: Ref<HTMLElement | undefined>;
                popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: Ref<HTMLElement | undefined>;
                referenceRef: Ref<HTMLElement | undefined>;
                popperProvides: import("element-plus").ElPopperInjectionContext;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
            triggerRef: Ref<HTMLElement | undefined>;
            popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
            contentRef: Ref<HTMLElement | undefined>;
            referenceRef: Ref<HTMLElement | undefined>;
            popperProvides: import("element-plus").ElPopperInjectionContext;
        }> & import("vue").ComponentCustomProperties) | null | undefined>;
        hide: () => void;
        beforeEnter: () => void;
        beforeLeave: () => void;
        afterEnter: () => void;
        afterLeave: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
        disabled: boolean;
        trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
        offset: number;
        width: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        effect: string;
        placement: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, unknown, unknown>;
        popperClass: string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | any[] | {
            [x: string]: boolean;
        })[])[])[])[])[])[])[])[])[])[];
        showAfter: number;
        hideAfter: number;
        popperOptions: Partial<import("element-plus").Options>;
        enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        popperStyle: import("vue").StyleValue;
        visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
        content: string;
        transition: string;
        teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        persistent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        tabindex: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
        showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        autoClose: number;
    }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App<any>, ...options: any[]) => any) & {
        install?: ((app: import("vue").App<any>, ...options: any[]) => any) | undefined;
    } & {
        directive: import("element-plus/es/utils").SFCWithInstall<import("vue").ObjectDirective<any, any>>;
    }>> | Readonly<import("vue").ExtractPropTypes<{
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                width: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, unknown, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                popperOptions: Partial<import("element-plus").Options>;
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                content: string;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                tabindex: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                autoClose: number;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, "bottom", unknown, unknown, unknown>;
                readonly disabled: BooleanConstructor;
                readonly visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                readonly transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                readonly tabindex: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, 0, unknown, unknown, unknown>;
                readonly content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                readonly enterable: {
                    readonly default: true;
                    readonly type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __elPropsReservedKey: true;
                };
                readonly effect: {
                    readonly default: "light";
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __elPropsReservedKey: true;
                };
                readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                readonly title: StringConstructor;
                readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], 150, unknown, unknown, unknown>;
                readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, undefined, unknown, unknown, unknown>;
                readonly showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                readonly hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
                readonly autoClose: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                readonly persistent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "trigger" | "placement" | "disabled" | "visible" | "transition" | "popperOptions" | "tabindex" | "content" | "popperStyle" | "popperClass" | "enterable" | "effect" | "teleported" | "width" | "offset" | "showAfter" | "hideAfter" | "autoClose" | "showArrow" | "persistent">;
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
                readonly trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, "bottom", unknown, unknown, unknown>;
                readonly disabled: BooleanConstructor;
                readonly visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                readonly transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                readonly tabindex: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, 0, unknown, unknown, unknown>;
                readonly content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                readonly enterable: {
                    readonly default: true;
                    readonly type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __elPropsReservedKey: true;
                };
                readonly effect: {
                    readonly default: "light";
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __elPropsReservedKey: true;
                };
                readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                readonly title: StringConstructor;
                readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], 150, unknown, unknown, unknown>;
                readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, undefined, unknown, unknown, unknown>;
                readonly showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                readonly hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
                readonly autoClose: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                readonly persistent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            }, {
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
                kls: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
                gpuAcceleration: import("vue").ComputedRef<boolean>;
                style: import("vue").ComputedRef<import("vue").StyleValue>;
                tooltipRef: Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{
                        disabled: boolean;
                        trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                        offset: number;
                        effect: string;
                        placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                        popperClass: string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[];
                        showAfter: number;
                        hideAfter: number;
                        boundariesPadding: number;
                        fallbackPlacements: import("element-plus").Placement[];
                        gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        popperOptions: Partial<import("element-plus").Options>;
                        strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                        style: import("vue").StyleValue;
                        className: string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[];
                        enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        popperStyle: import("vue").StyleValue;
                        referenceEl: HTMLElement;
                        stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                        pure: boolean;
                        appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                        content: string;
                        rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        transition: string;
                        teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        persistent: boolean;
                        open: boolean;
                        arrowOffset: number;
                        virtualRef: import("element-plus").Measurable;
                        virtualTriggering: boolean;
                        "onUpdate:visible": (val: boolean) => void;
                        openDelay: number;
                        visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                        openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                        visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                        hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                        showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                        arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                        disabled: BooleanConstructor;
                        trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                        virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                        virtualTriggering: BooleanConstructor;
                        onMouseenter: FunctionConstructor;
                        onMouseleave: FunctionConstructor;
                        onClick: FunctionConstructor;
                        onKeydown: FunctionConstructor;
                        onFocus: FunctionConstructor;
                        onBlur: FunctionConstructor;
                        onContextmenu: FunctionConstructor;
                        id: StringConstructor;
                        open: BooleanConstructor;
                        appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                        content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                        rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                        persistent: BooleanConstructor;
                        ariaLabel: StringConstructor;
                        visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                        transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                        teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                        className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                        effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                        enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        pure: BooleanConstructor;
                        popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                        popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                        referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                        stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        zIndex: NumberConstructor;
                        boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                        fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                        gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                        placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                        popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                        strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                        showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                        "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "trigger" | "placement" | "disabled" | "visible" | "transition" | "popperOptions" | "content" | "popperStyle" | "popperClass" | "enterable" | "effect" | "teleported" | "offset" | "showAfter" | "hideAfter" | "showArrow" | "persistent" | "strategy" | "className" | "style" | "openDelay" | "visibleArrow" | "arrowOffset" | "virtualRef" | "virtualTriggering" | "open" | "appendTo" | "rawContent" | "pure" | "referenceEl" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "onUpdate:visible">;
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
                        openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                        visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                        hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                        showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                        arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                        disabled: BooleanConstructor;
                        trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                        virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                        virtualTriggering: BooleanConstructor;
                        onMouseenter: FunctionConstructor;
                        onMouseleave: FunctionConstructor;
                        onClick: FunctionConstructor;
                        onKeydown: FunctionConstructor;
                        onFocus: FunctionConstructor;
                        onBlur: FunctionConstructor;
                        onContextmenu: FunctionConstructor;
                        id: StringConstructor;
                        open: BooleanConstructor;
                        appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                        content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                        rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                        persistent: BooleanConstructor;
                        ariaLabel: StringConstructor;
                        visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                        transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                        teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                        className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                        effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                        enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        pure: BooleanConstructor;
                        popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                        popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                        referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                        stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        zIndex: NumberConstructor;
                        boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                        fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                        gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                        offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                        placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                        popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                        strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                        showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                        "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                    }, {
                        compatShowAfter: import("vue").ComputedRef<number>;
                        compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                        popperRef: Ref<({
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
                            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                                triggerRef: Ref<HTMLElement | undefined>;
                                popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                                contentRef: Ref<HTMLElement | undefined>;
                                referenceRef: Ref<HTMLElement | undefined>;
                                popperProvides: import("element-plus").ElPopperInjectionContext;
                            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                                beforeCreate?: (() => void) | (() => void)[] | undefined;
                                created?: (() => void) | (() => void)[] | undefined;
                                beforeMount?: (() => void) | (() => void)[] | undefined;
                                mounted?: (() => void) | (() => void)[] | undefined;
                                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                                updated?: (() => void) | (() => void)[] | undefined;
                                activated?: (() => void) | (() => void)[] | undefined;
                                deactivated?: (() => void) | (() => void)[] | undefined;
                                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                                destroyed?: (() => void) | (() => void)[] | undefined;
                                unmounted?: (() => void) | (() => void)[] | undefined;
                                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                            };
                            $forceUpdate: () => void;
                            $nextTick: typeof import("vue").nextTick;
                            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                        } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                            triggerRef: Ref<HTMLElement | undefined>;
                            popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                            contentRef: Ref<HTMLElement | undefined>;
                            referenceRef: Ref<HTMLElement | undefined>;
                            popperProvides: import("element-plus").ElPopperInjectionContext;
                        }> & import("vue").ComponentCustomProperties) | null>;
                        open: Ref<boolean>;
                        hide: () => void;
                        updatePopper: () => void;
                        onOpen: () => void;
                        onClose: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                        disabled: boolean;
                        trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                        offset: number;
                        effect: string;
                        placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                        popperClass: string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[];
                        showAfter: number;
                        hideAfter: number;
                        boundariesPadding: number;
                        fallbackPlacements: import("element-plus").Placement[];
                        gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        popperOptions: Partial<import("element-plus").Options>;
                        strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                        style: import("vue").StyleValue;
                        className: string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[];
                        enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        popperStyle: import("vue").StyleValue;
                        referenceEl: HTMLElement;
                        stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                        pure: boolean;
                        appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                        content: string;
                        rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        transition: string;
                        teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        persistent: boolean;
                        open: boolean;
                        arrowOffset: number;
                        virtualRef: import("element-plus").Measurable;
                        virtualTriggering: boolean;
                        "onUpdate:visible": (val: boolean) => void;
                        openDelay: number;
                        visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                        showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    }> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{
                    openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                    disabled: BooleanConstructor;
                    trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                    virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                    virtualTriggering: BooleanConstructor;
                    onMouseenter: FunctionConstructor;
                    onMouseleave: FunctionConstructor;
                    onClick: FunctionConstructor;
                    onKeydown: FunctionConstructor;
                    onFocus: FunctionConstructor;
                    onBlur: FunctionConstructor;
                    onContextmenu: FunctionConstructor;
                    id: StringConstructor;
                    open: BooleanConstructor;
                    appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                    content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                    transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                    enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    pure: BooleanConstructor;
                    popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                    gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                    placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                    popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                    strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                    showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                } & import("vue").ShallowUnwrapRef<{
                    compatShowAfter: import("vue").ComputedRef<number>;
                    compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                    popperRef: Ref<({
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
                        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                            triggerRef: Ref<HTMLElement | undefined>;
                            popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                            contentRef: Ref<HTMLElement | undefined>;
                            referenceRef: Ref<HTMLElement | undefined>;
                            popperProvides: import("element-plus").ElPopperInjectionContext;
                        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                            beforeCreate?: (() => void) | (() => void)[] | undefined;
                            created?: (() => void) | (() => void)[] | undefined;
                            beforeMount?: (() => void) | (() => void)[] | undefined;
                            mounted?: (() => void) | (() => void)[] | undefined;
                            beforeUpdate?: (() => void) | (() => void)[] | undefined;
                            updated?: (() => void) | (() => void)[] | undefined;
                            activated?: (() => void) | (() => void)[] | undefined;
                            deactivated?: (() => void) | (() => void)[] | undefined;
                            beforeDestroy?: (() => void) | (() => void)[] | undefined;
                            beforeUnmount?: (() => void) | (() => void)[] | undefined;
                            destroyed?: (() => void) | (() => void)[] | undefined;
                            unmounted?: (() => void) | (() => void)[] | undefined;
                            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                        };
                        $forceUpdate: () => void;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                        triggerRef: Ref<HTMLElement | undefined>;
                        popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: Ref<HTMLElement | undefined>;
                        referenceRef: Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }> & import("vue").ComponentCustomProperties) | null>;
                    open: Ref<boolean>;
                    hide: () => void;
                    updatePopper: () => void;
                    onOpen: () => void;
                    onClose: () => void;
                }> & import("vue").ComponentCustomProperties) | null>;
                popperRef: import("vue").ComputedRef<({
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
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                        triggerRef: Ref<HTMLElement | undefined>;
                        popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: Ref<HTMLElement | undefined>;
                        referenceRef: Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                    triggerRef: Ref<HTMLElement | undefined>;
                    popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: Ref<HTMLElement | undefined>;
                    referenceRef: Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }> & import("vue").ComponentCustomProperties) | null | undefined>;
                hide: () => void;
                beforeEnter: () => void;
                beforeLeave: () => void;
                afterEnter: () => void;
                afterLeave: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                width: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, unknown, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                popperOptions: Partial<import("element-plus").Options>;
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                content: string;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                tabindex: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                autoClose: number;
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
            readonly trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
            readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, "bottom", unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
            readonly visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
            readonly transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
            readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
            readonly tabindex: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, 0, unknown, unknown, unknown>;
            readonly content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            readonly enterable: {
                readonly default: true;
                readonly type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __elPropsReservedKey: true;
            };
            readonly effect: {
                readonly default: "light";
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                readonly __elPropsReservedKey: true;
            };
            readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly title: StringConstructor;
            readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], 150, unknown, unknown, unknown>;
            readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, undefined, unknown, unknown, unknown>;
            readonly showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            readonly hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
            readonly autoClose: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly persistent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
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
            kls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
            gpuAcceleration: import("vue").ComputedRef<boolean>;
            style: import("vue").ComputedRef<import("vue").StyleValue>;
            tooltipRef: Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    disabled: boolean;
                    trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                    offset: number;
                    effect: string;
                    placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                    popperClass: string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[];
                    showAfter: number;
                    hideAfter: number;
                    boundariesPadding: number;
                    fallbackPlacements: import("element-plus").Placement[];
                    gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperOptions: Partial<import("element-plus").Options>;
                    strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                    style: import("vue").StyleValue;
                    className: string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[];
                    enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperStyle: import("vue").StyleValue;
                    referenceEl: HTMLElement;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                    pure: boolean;
                    appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                    content: string;
                    rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    transition: string;
                    teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    persistent: boolean;
                    open: boolean;
                    arrowOffset: number;
                    virtualRef: import("element-plus").Measurable;
                    virtualTriggering: boolean;
                    "onUpdate:visible": (val: boolean) => void;
                    openDelay: number;
                    visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                    disabled: BooleanConstructor;
                    trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                    virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                    virtualTriggering: BooleanConstructor;
                    onMouseenter: FunctionConstructor;
                    onMouseleave: FunctionConstructor;
                    onClick: FunctionConstructor;
                    onKeydown: FunctionConstructor;
                    onFocus: FunctionConstructor;
                    onBlur: FunctionConstructor;
                    onContextmenu: FunctionConstructor;
                    id: StringConstructor;
                    open: BooleanConstructor;
                    appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                    content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                    transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                    enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    pure: BooleanConstructor;
                    popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                    gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                    placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                    popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                    strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                    showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "trigger" | "placement" | "disabled" | "visible" | "transition" | "popperOptions" | "content" | "popperStyle" | "popperClass" | "enterable" | "effect" | "teleported" | "offset" | "showAfter" | "hideAfter" | "showArrow" | "persistent" | "strategy" | "className" | "style" | "openDelay" | "visibleArrow" | "arrowOffset" | "virtualRef" | "virtualTriggering" | "open" | "appendTo" | "rawContent" | "pure" | "referenceEl" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "onUpdate:visible">;
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
                    openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                    arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                    disabled: BooleanConstructor;
                    trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                    virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                    virtualTriggering: BooleanConstructor;
                    onMouseenter: FunctionConstructor;
                    onMouseleave: FunctionConstructor;
                    onClick: FunctionConstructor;
                    onKeydown: FunctionConstructor;
                    onFocus: FunctionConstructor;
                    onBlur: FunctionConstructor;
                    onContextmenu: FunctionConstructor;
                    id: StringConstructor;
                    open: BooleanConstructor;
                    appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                    content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                    transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                    teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                    enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    pure: BooleanConstructor;
                    popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                    popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                    referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                    gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                    offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                    placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                    popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                    strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                    showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                    "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                }, {
                    compatShowAfter: import("vue").ComputedRef<number>;
                    compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                    popperRef: Ref<({
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
                        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                            triggerRef: Ref<HTMLElement | undefined>;
                            popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                            contentRef: Ref<HTMLElement | undefined>;
                            referenceRef: Ref<HTMLElement | undefined>;
                            popperProvides: import("element-plus").ElPopperInjectionContext;
                        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                            beforeCreate?: (() => void) | (() => void)[] | undefined;
                            created?: (() => void) | (() => void)[] | undefined;
                            beforeMount?: (() => void) | (() => void)[] | undefined;
                            mounted?: (() => void) | (() => void)[] | undefined;
                            beforeUpdate?: (() => void) | (() => void)[] | undefined;
                            updated?: (() => void) | (() => void)[] | undefined;
                            activated?: (() => void) | (() => void)[] | undefined;
                            deactivated?: (() => void) | (() => void)[] | undefined;
                            beforeDestroy?: (() => void) | (() => void)[] | undefined;
                            beforeUnmount?: (() => void) | (() => void)[] | undefined;
                            destroyed?: (() => void) | (() => void)[] | undefined;
                            unmounted?: (() => void) | (() => void)[] | undefined;
                            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                        };
                        $forceUpdate: () => void;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                        triggerRef: Ref<HTMLElement | undefined>;
                        popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: Ref<HTMLElement | undefined>;
                        referenceRef: Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }> & import("vue").ComponentCustomProperties) | null>;
                    open: Ref<boolean>;
                    hide: () => void;
                    updatePopper: () => void;
                    onOpen: () => void;
                    onClose: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                    disabled: boolean;
                    trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                    offset: number;
                    effect: string;
                    placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                    popperClass: string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[];
                    showAfter: number;
                    hideAfter: number;
                    boundariesPadding: number;
                    fallbackPlacements: import("element-plus").Placement[];
                    gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperOptions: Partial<import("element-plus").Options>;
                    strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                    style: import("vue").StyleValue;
                    className: string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[];
                    enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    popperStyle: import("vue").StyleValue;
                    referenceEl: HTMLElement;
                    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                    pure: boolean;
                    appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                    content: string;
                    rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    transition: string;
                    teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    persistent: boolean;
                    open: boolean;
                    arrowOffset: number;
                    virtualRef: import("element-plus").Measurable;
                    virtualTriggering: boolean;
                    "onUpdate:visible": (val: boolean) => void;
                    openDelay: number;
                    visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                }> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").ShallowUnwrapRef<{
                compatShowAfter: import("vue").ComputedRef<number>;
                compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                popperRef: Ref<({
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
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                        triggerRef: Ref<HTMLElement | undefined>;
                        popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: Ref<HTMLElement | undefined>;
                        referenceRef: Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                    triggerRef: Ref<HTMLElement | undefined>;
                    popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: Ref<HTMLElement | undefined>;
                    referenceRef: Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }> & import("vue").ComponentCustomProperties) | null>;
                open: Ref<boolean>;
                hide: () => void;
                updatePopper: () => void;
                onOpen: () => void;
                onClose: () => void;
            }> & import("vue").ComponentCustomProperties) | null>;
            popperRef: import("vue").ComputedRef<({
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
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                    triggerRef: Ref<HTMLElement | undefined>;
                    popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: Ref<HTMLElement | undefined>;
                    referenceRef: Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                triggerRef: Ref<HTMLElement | undefined>;
                popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: Ref<HTMLElement | undefined>;
                referenceRef: Ref<HTMLElement | undefined>;
                popperProvides: import("element-plus").ElPopperInjectionContext;
            }> & import("vue").ComponentCustomProperties) | null | undefined>;
            hide: () => void;
            beforeEnter: () => void;
            beforeLeave: () => void;
            afterEnter: () => void;
            afterLeave: () => void;
        }> & {} & {} & import("vue").ComponentCustomProperties;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        readonly trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
        readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, "bottom", unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
        readonly visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
        readonly transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
        readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
        readonly tabindex: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, 0, unknown, unknown, unknown>;
        readonly content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
        readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | any[] | {
            [x: string]: boolean;
        })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
        readonly enterable: {
            readonly default: true;
            readonly type: import("vue").PropType<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __elPropsReservedKey: true;
        };
        readonly effect: {
            readonly default: "light";
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            readonly __elPropsReservedKey: true;
        };
        readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly title: StringConstructor;
        readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], 150, unknown, unknown, unknown>;
        readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, undefined, unknown, unknown, unknown>;
        readonly showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
        readonly autoClose: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly persistent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
    }, {
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
        kls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | any[] | {
            [x: string]: boolean;
        })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
        gpuAcceleration: import("vue").ComputedRef<boolean>;
        style: import("vue").ComputedRef<import("vue").StyleValue>;
        tooltipRef: Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                boundariesPadding: number;
                fallbackPlacements: import("element-plus").Placement[];
                gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperOptions: Partial<import("element-plus").Options>;
                strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                style: import("vue").StyleValue;
                className: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                referenceEl: HTMLElement;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                pure: boolean;
                appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                content: string;
                rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: boolean;
                open: boolean;
                arrowOffset: number;
                virtualRef: import("element-plus").Measurable;
                virtualTriggering: boolean;
                "onUpdate:visible": (val: boolean) => void;
                openDelay: number;
                visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "trigger" | "placement" | "disabled" | "visible" | "transition" | "popperOptions" | "content" | "popperStyle" | "popperClass" | "enterable" | "effect" | "teleported" | "offset" | "showAfter" | "hideAfter" | "showArrow" | "persistent" | "strategy" | "className" | "style" | "openDelay" | "visibleArrow" | "arrowOffset" | "virtualRef" | "virtualTriggering" | "open" | "appendTo" | "rawContent" | "pure" | "referenceEl" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "onUpdate:visible">;
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
                openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
                arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
                disabled: BooleanConstructor;
                trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
                virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
                virtualTriggering: BooleanConstructor;
                onMouseenter: FunctionConstructor;
                onMouseleave: FunctionConstructor;
                onClick: FunctionConstructor;
                onKeydown: FunctionConstructor;
                onFocus: FunctionConstructor;
                onBlur: FunctionConstructor;
                onContextmenu: FunctionConstructor;
                id: StringConstructor;
                open: BooleanConstructor;
                appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
                content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
                persistent: BooleanConstructor;
                ariaLabel: StringConstructor;
                visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
                transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
                teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                pure: BooleanConstructor;
                popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                zIndex: NumberConstructor;
                boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
                gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
                popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
                strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
                showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            }, {
                compatShowAfter: import("vue").ComputedRef<number>;
                compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
                popperRef: Ref<({
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
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                        triggerRef: Ref<HTMLElement | undefined>;
                        popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: Ref<HTMLElement | undefined>;
                        referenceRef: Ref<HTMLElement | undefined>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                        beforeCreate?: (() => void) | (() => void)[] | undefined;
                        created?: (() => void) | (() => void)[] | undefined;
                        beforeMount?: (() => void) | (() => void)[] | undefined;
                        mounted?: (() => void) | (() => void)[] | undefined;
                        beforeUpdate?: (() => void) | (() => void)[] | undefined;
                        updated?: (() => void) | (() => void)[] | undefined;
                        activated?: (() => void) | (() => void)[] | undefined;
                        deactivated?: (() => void) | (() => void)[] | undefined;
                        beforeDestroy?: (() => void) | (() => void)[] | undefined;
                        beforeUnmount?: (() => void) | (() => void)[] | undefined;
                        destroyed?: (() => void) | (() => void)[] | undefined;
                        unmounted?: (() => void) | (() => void)[] | undefined;
                        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                    triggerRef: Ref<HTMLElement | undefined>;
                    popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: Ref<HTMLElement | undefined>;
                    referenceRef: Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }> & import("vue").ComponentCustomProperties) | null>;
                open: Ref<boolean>;
                hide: () => void;
                updatePopper: () => void;
                onOpen: () => void;
                onClose: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                disabled: boolean;
                trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
                offset: number;
                effect: string;
                placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus").Placement, unknown>;
                popperClass: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                showAfter: number;
                hideAfter: number;
                boundariesPadding: number;
                fallbackPlacements: import("element-plus").Placement[];
                gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperOptions: Partial<import("element-plus").Options>;
                strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "absolute" | "fixed", unknown>;
                style: import("vue").StyleValue;
                className: string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[];
                enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                popperStyle: import("vue").StyleValue;
                referenceEl: HTMLElement;
                stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
                pure: boolean;
                appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
                content: string;
                rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                transition: string;
                teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                persistent: boolean;
                open: boolean;
                arrowOffset: number;
                virtualRef: import("element-plus").Measurable;
                virtualTriggering: boolean;
                "onUpdate:visible": (val: boolean) => void;
                openDelay: number;
                visibleArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
                showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            openDelay: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            visibleArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, number | (() => number) | undefined, unknown, unknown, unknown>;
            showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
            arrowOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
            disabled: BooleanConstructor;
            trigger: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, "hover", unknown, unknown, unknown>;
            virtualRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Measurable>, unknown, unknown, unknown, unknown>;
            virtualTriggering: BooleanConstructor;
            onMouseenter: FunctionConstructor;
            onMouseleave: FunctionConstructor;
            onClick: FunctionConstructor;
            onKeydown: FunctionConstructor;
            onFocus: FunctionConstructor;
            onBlur: FunctionConstructor;
            onContextmenu: FunctionConstructor;
            id: StringConstructor;
            open: BooleanConstructor;
            appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
            content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            persistent: BooleanConstructor;
            ariaLabel: StringConstructor;
            visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
            transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
            teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
            enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            pure: BooleanConstructor;
            popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | any[] | {
                [x: string]: boolean;
            })[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            zIndex: NumberConstructor;
            boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement[]>, () => never[], unknown, unknown, unknown>;
            gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus").Placement, unknown>;
            popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus").Options>>, () => {}, unknown, unknown, unknown>;
            strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "absolute" | "fixed", unknown>;
            showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            "onUpdate:visible": import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(val: boolean) => void>, never, false, never, never>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            compatShowAfter: import("vue").ComputedRef<number>;
            compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
            popperRef: Ref<({
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
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                    triggerRef: Ref<HTMLElement | undefined>;
                    popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: Ref<HTMLElement | undefined>;
                    referenceRef: Ref<HTMLElement | undefined>;
                    popperProvides: import("element-plus").ElPopperInjectionContext;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
                triggerRef: Ref<HTMLElement | undefined>;
                popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: Ref<HTMLElement | undefined>;
                referenceRef: Ref<HTMLElement | undefined>;
                popperProvides: import("element-plus").ElPopperInjectionContext;
            }> & import("vue").ComponentCustomProperties) | null>;
            open: Ref<boolean>;
            hide: () => void;
            updatePopper: () => void;
            onOpen: () => void;
            onClose: () => void;
        }> & import("vue").ComponentCustomProperties) | null>;
        popperRef: import("vue").ComputedRef<({
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
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
                triggerRef: Ref<HTMLElement | undefined>;
                popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: Ref<HTMLElement | undefined>;
                referenceRef: Ref<HTMLElement | undefined>;
                popperProvides: import("element-plus").ElPopperInjectionContext;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
            triggerRef: Ref<HTMLElement | undefined>;
            popperInstanceRef: Ref<import("@popperjs/core").Instance | undefined>;
            contentRef: Ref<HTMLElement | undefined>;
            referenceRef: Ref<HTMLElement | undefined>;
            popperProvides: import("element-plus").ElPopperInjectionContext;
        }> & import("vue").ComponentCustomProperties) | null | undefined>;
        hide: () => void;
        beforeEnter: () => void;
        beforeLeave: () => void;
        afterEnter: () => void;
        afterLeave: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
        disabled: boolean;
        trigger: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"click" | "focus" | "hover" | "contextmenu" | ("click" | "focus" | "hover" | "contextmenu")[]>, unknown, unknown>;
        offset: number;
        width: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        effect: string;
        placement: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus").Placement>, unknown, unknown>;
        popperClass: string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | any[] | {
            [x: string]: boolean;
        })[])[])[])[])[])[])[])[])[])[];
        showAfter: number;
        hideAfter: number;
        popperOptions: Partial<import("element-plus").Options>;
        enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        popperStyle: import("vue").StyleValue;
        visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
        content: string;
        transition: string;
        teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        persistent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        tabindex: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
        showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        autoClose: number;
    }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: import("vue").App<any>, ...options: any[]) => any;
    } & {
        directive: import("element-plus/es/utils").SFCWithInstall<import("vue").ObjectDirective<any, any>>;
    }>>, {
        [x: string]: any;
    } | {
        [x: string]: any;
    }>;
};
export default Editable;
