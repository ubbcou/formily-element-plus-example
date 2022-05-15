import type { VNode } from 'vue';
export declare type SpaceProps = {
    size: 'small' | 'middle' | 'large' | number;
    direction: 'horizontal' | 'vertical';
    align: 'start' | 'end' | 'center' | 'baseline';
};
export declare const Space: import("vue").DefineComponent<Readonly<{
    size?: any;
    direction?: any;
    align?: any;
}>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    size?: any;
    direction?: any;
    align?: any;
}>>>, {
    size: any;
    direction: any;
    align: any;
}>;
export default Space;
