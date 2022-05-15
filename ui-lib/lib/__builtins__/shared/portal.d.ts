export interface IPortalProps {
    id?: string | symbol;
}
export declare const createPortalProvider: (id: string | symbol) => import("vue").DefineComponent<{
    id: {
        type: (SymbolConstructor | StringConstructor)[];
        default: string | symbol;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: (SymbolConstructor | StringConstructor)[];
        default: string | symbol;
    };
}>>, {
    id: string | symbol;
}>;
export declare function getPortalContext(id: string | symbol): any;
