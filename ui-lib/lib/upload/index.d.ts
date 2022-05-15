import { ElUpload } from 'element-plus';
export declare type UploadProps = typeof ElUpload & {
    textContent?: string;
    errorAdaptor?: (error?: ErrorEvent) => string;
};
export declare const Upload: import("vue").DefineComponent<{
    textContent: {
        type: StringConstructor;
        default: string;
    };
    errorAdaptor: {
        type: FunctionConstructor;
        default(error?: ErrorEvent | undefined): string;
    };
    fileList: {
        type: ArrayConstructor;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    textContent: {
        type: StringConstructor;
        default: string;
    };
    errorAdaptor: {
        type: FunctionConstructor;
        default(error?: ErrorEvent | undefined): string;
    };
    fileList: {
        type: ArrayConstructor;
    };
}>>, {
    textContent: string;
    errorAdaptor: Function;
}>;
export default Upload;
