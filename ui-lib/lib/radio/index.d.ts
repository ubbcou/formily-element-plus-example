import { PropType } from 'vue';
import { SlotTypes } from '../__builtins__/shared';
import { ElRadio, ElRadioGroup } from 'element-plus';
export declare type ElRadioProps = typeof ElRadio;
export declare type RadioGroupProps = typeof ElRadioGroup & {
    value: any;
    options?: ((Omit<ElRadioProps, 'value'> & {
        value: ElRadioProps['label'];
        label: SlotTypes;
    }) | string)[];
    optionType: 'defalt' | 'button';
};
export declare const Radio: (import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly border: BooleanConstructor;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
    readonly disabled: BooleanConstructor;
    readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
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
    focus: import("vue").Ref<boolean>;
    isGroup: import("vue").ComputedRef<boolean>;
    modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
    disabled: import("vue").ComputedRef<boolean>;
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
    handleChange: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string | number | boolean) => boolean;
    change: (val: string | number | boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly border: BooleanConstructor;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
    readonly disabled: BooleanConstructor;
    readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
}>> & {
    onChange?: ((val: string | number | boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
}, {
    size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never>;
    disabled: boolean;
    name: string;
    label: import("element-plus/es/utils").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
    modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
    border: boolean;
}>> & {
    RadioButton: import("vue").DefineComponent<{
        readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
        readonly disabled: BooleanConstructor;
        readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
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
        isGroup: import("vue").ComputedRef<boolean>;
        size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
        disabled: import("vue").ComputedRef<boolean>;
        tabIndex: import("vue").ComputedRef<0 | -1>;
        modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
        focus: import("vue").Ref<boolean>;
        activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        radioRef: import("vue").Ref<HTMLInputElement | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
        readonly disabled: BooleanConstructor;
        readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
    }>>, {
        size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never>;
        disabled: boolean;
        name: string;
        label: import("element-plus/es/utils").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
    }>;
    RadioGroup: import("vue").DefineComponent<{
        readonly id: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
        readonly disabled: BooleanConstructor;
        readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
        readonly fill: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
        readonly textColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
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
        radioGroupRef: import("vue").Ref<HTMLDivElement | undefined>;
        formItem: import("element-plus").FormItemContext | undefined;
        groupId: import("vue").Ref<string | undefined>;
        isLabeledByFormItem: import("vue").ComputedRef<boolean>;
        handleKeydown: (e: KeyboardEvent) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (val: string | number | boolean) => boolean;
        change: (val: string | number | boolean) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly id: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
        readonly disabled: BooleanConstructor;
        readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
        readonly fill: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
        readonly textColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    }>> & {
        onChange?: ((val: string | number | boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
    }, {
        size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never>;
        disabled: boolean;
        fill: string;
        label: string;
        id: string;
        modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
        textColor: string;
    }>;
}) & {
    Group: import("vue").DefineComponent<{
        options: {
            type: PropType<(string | (Omit<import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
                readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly border: BooleanConstructor;
                readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                readonly disabled: BooleanConstructor;
                readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
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
                focus: import("vue").Ref<boolean>;
                isGroup: import("vue").ComputedRef<boolean>;
                modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
                tabIndex: import("vue").ComputedRef<0 | -1>;
                size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                disabled: import("vue").ComputedRef<boolean>;
                radioRef: import("vue").Ref<HTMLInputElement | undefined>;
                handleChange: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: string | number | boolean) => boolean;
                change: (val: string | number | boolean) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
                readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly border: BooleanConstructor;
                readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                readonly disabled: BooleanConstructor;
                readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
            }>> & {
                onChange?: ((val: string | number | boolean) => any) | undefined;
                "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
            }, {
                size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never>;
                disabled: boolean;
                name: string;
                label: import("element-plus/es/utils").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
                modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
                border: boolean;
            }>> & {
                RadioButton: import("vue").DefineComponent<{
                    readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                    readonly disabled: BooleanConstructor;
                    readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
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
                    isGroup: import("vue").ComputedRef<boolean>;
                    size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                    disabled: import("vue").ComputedRef<boolean>;
                    tabIndex: import("vue").ComputedRef<0 | -1>;
                    modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
                    focus: import("vue").Ref<boolean>;
                    activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                    readonly disabled: BooleanConstructor;
                    readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
                }>>, {
                    size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never>;
                    disabled: boolean;
                    name: string;
                    label: import("element-plus/es/utils").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
                }>;
                RadioGroup: import("vue").DefineComponent<{
                    readonly id: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
                    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                    readonly disabled: BooleanConstructor;
                    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
                    readonly fill: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
                    readonly textColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
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
                    radioGroupRef: import("vue").Ref<HTMLDivElement | undefined>;
                    formItem: import("element-plus").FormItemContext | undefined;
                    groupId: import("vue").Ref<string | undefined>;
                    isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                    handleKeydown: (e: KeyboardEvent) => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    "update:modelValue": (val: string | number | boolean) => boolean;
                    change: (val: string | number | boolean) => boolean;
                }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly id: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
                    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                    readonly disabled: BooleanConstructor;
                    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
                    readonly fill: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
                    readonly textColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                }>> & {
                    onChange?: ((val: string | number | boolean) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
                }, {
                    size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never>;
                    disabled: boolean;
                    fill: string;
                    label: string;
                    id: string;
                    modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
                    textColor: string;
                }>;
            }, "value"> & {
                value: ElRadioProps['label'];
                label: SlotTypes;
            }))[] | undefined>;
            default: () => never[];
        };
        optionType: {
            type: PropType<"defalt" | "button">;
            default: string;
        };
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        options: {
            type: PropType<(string | (Omit<import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
                readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly border: BooleanConstructor;
                readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                readonly disabled: BooleanConstructor;
                readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
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
                focus: import("vue").Ref<boolean>;
                isGroup: import("vue").ComputedRef<boolean>;
                modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
                tabIndex: import("vue").ComputedRef<0 | -1>;
                size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                disabled: import("vue").ComputedRef<boolean>;
                radioRef: import("vue").Ref<HTMLInputElement | undefined>;
                handleChange: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: string | number | boolean) => boolean;
                change: (val: string | number | boolean) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
                readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly border: BooleanConstructor;
                readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                readonly disabled: BooleanConstructor;
                readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
            }>> & {
                onChange?: ((val: string | number | boolean) => any) | undefined;
                "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
            }, {
                size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never>;
                disabled: boolean;
                name: string;
                label: import("element-plus/es/utils").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
                modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
                border: boolean;
            }>> & {
                RadioButton: import("vue").DefineComponent<{
                    readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                    readonly disabled: BooleanConstructor;
                    readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
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
                    isGroup: import("vue").ComputedRef<boolean>;
                    size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                    disabled: import("vue").ComputedRef<boolean>;
                    tabIndex: import("vue").ComputedRef<0 | -1>;
                    modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
                    focus: import("vue").Ref<boolean>;
                    activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                    readonly disabled: BooleanConstructor;
                    readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
                }>>, {
                    size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never>;
                    disabled: boolean;
                    name: string;
                    label: import("element-plus/es/utils").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
                }>;
                RadioGroup: import("vue").DefineComponent<{
                    readonly id: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
                    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                    readonly disabled: BooleanConstructor;
                    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
                    readonly fill: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
                    readonly textColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
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
                    radioGroupRef: import("vue").Ref<HTMLDivElement | undefined>;
                    formItem: import("element-plus").FormItemContext | undefined;
                    groupId: import("vue").Ref<string | undefined>;
                    isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                    handleKeydown: (e: KeyboardEvent) => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    "update:modelValue": (val: string | number | boolean) => boolean;
                    change: (val: string | number | boolean) => boolean;
                }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly id: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
                    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                    readonly disabled: BooleanConstructor;
                    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
                    readonly fill: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                    readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
                    readonly textColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                }>> & {
                    onChange?: ((val: string | number | boolean) => any) | undefined;
                    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
                }, {
                    size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never>;
                    disabled: boolean;
                    fill: string;
                    label: string;
                    id: string;
                    modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
                    textColor: string;
                }>;
            }, "value"> & {
                value: ElRadioProps['label'];
                label: SlotTypes;
            }))[] | undefined>;
            default: () => never[];
        };
        optionType: {
            type: PropType<"defalt" | "button">;
            default: string;
        };
    }>>, {
        options: (string | (Omit<import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly border: BooleanConstructor;
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
            readonly disabled: BooleanConstructor;
            readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
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
            focus: import("vue").Ref<boolean>;
            isGroup: import("vue").ComputedRef<boolean>;
            modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
            tabIndex: import("vue").ComputedRef<0 | -1>;
            size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
            disabled: import("vue").ComputedRef<boolean>;
            radioRef: import("vue").Ref<HTMLInputElement | undefined>;
            handleChange: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: string | number | boolean) => boolean;
            change: (val: string | number | boolean) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly border: BooleanConstructor;
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
            readonly disabled: BooleanConstructor;
            readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
        }>> & {
            onChange?: ((val: string | number | boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
        }, {
            size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never>;
            disabled: boolean;
            name: string;
            label: import("element-plus/es/utils").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
            modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
            border: boolean;
        }>> & {
            RadioButton: import("vue").DefineComponent<{
                readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                readonly disabled: BooleanConstructor;
                readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
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
                isGroup: import("vue").ComputedRef<boolean>;
                size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
                disabled: import("vue").ComputedRef<boolean>;
                tabIndex: import("vue").ComputedRef<0 | -1>;
                modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
                focus: import("vue").Ref<boolean>;
                activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                radioRef: import("vue").Ref<HTMLInputElement | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                readonly disabled: BooleanConstructor;
                readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
            }>>, {
                size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never>;
                disabled: boolean;
                name: string;
                label: import("element-plus/es/utils").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
            }>;
            RadioGroup: import("vue").DefineComponent<{
                readonly id: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
                readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
                readonly fill: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
                readonly textColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
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
                radioGroupRef: import("vue").Ref<HTMLDivElement | undefined>;
                formItem: import("element-plus").FormItemContext | undefined;
                groupId: import("vue").Ref<string | undefined>;
                isLabeledByFormItem: import("vue").ComputedRef<boolean>;
                handleKeydown: (e: KeyboardEvent) => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "update:modelValue": (val: string | number | boolean) => boolean;
                change: (val: string | number | boolean) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly id: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
                readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
                readonly disabled: BooleanConstructor;
                readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
                readonly fill: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
                readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, undefined, unknown, unknown, unknown>;
                readonly textColor: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            }>> & {
                onChange?: ((val: string | number | boolean) => any) | undefined;
                "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
            }, {
                size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", never>;
                disabled: boolean;
                fill: string;
                label: string;
                id: string;
                modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
                textColor: string;
            }>;
        }, "value"> & {
            value: ElRadioProps['label'];
            label: SlotTypes;
        }))[] | undefined;
        optionType: "defalt" | "button";
    }>;
};
export default Radio;
