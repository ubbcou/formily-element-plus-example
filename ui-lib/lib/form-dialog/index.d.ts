import { Form, IFormProps } from '@formily/core';
import { IMiddleware } from '@formily/shared';
import type { ElDialog as ElDialogProps, ElButton as ElButtonProps } from 'element-plus';
import { Component, VNode } from 'vue';
declare type FormDialogContentProps = {
    form: Form;
};
declare type FormDialogContent = Component | ((props: FormDialogContentProps) => VNode);
declare type DialogTitle = string | number | Component | VNode | (() => VNode);
declare type IFormDialogProps = Omit<typeof ElDialogProps, 'title'> & {
    title?: DialogTitle;
    footer?: null | Component | VNode | (() => VNode);
    cancelText?: string | Component | VNode | (() => VNode);
    cancelButtonProps?: typeof ElButtonProps;
    okText?: string | Component | VNode | (() => VNode);
    okButtonProps?: typeof ElButtonProps;
    beforeClose?: (cb: Function) => void;
    onOpen?: () => void;
    onOpend?: () => void;
    onClose?: () => void;
    onClosed?: () => void;
    onCancel?: () => void;
    onOK?: () => void;
    loadingText?: string;
};
export interface IFormDialog {
    forOpen(middleware: IMiddleware<IFormProps>): IFormDialog;
    forConfirm(middleware: IMiddleware<IFormProps>): IFormDialog;
    forCancel(middleware: IMiddleware<IFormProps>): IFormDialog;
    open(props?: IFormProps): Promise<any>;
    close(): void;
}
export interface IFormDialogComponentProps {
    content: FormDialogContent;
    resolve: () => any;
    reject: () => any;
}
export declare function FormDialog(title: IFormDialogProps | DialogTitle, content: FormDialogContent): IFormDialog;
export declare function FormDialog(title: IFormDialogProps | DialogTitle, id: string | symbol, content: FormDialogContent): IFormDialog;
export declare function FormDialog(title: DialogTitle, id: string, content: FormDialogContent): IFormDialog;
export declare namespace FormDialog {
    var Footer: import("vue").DefineComponent<{}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    var Portal: import("vue").DefineComponent<{
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
}
export default FormDialog;
