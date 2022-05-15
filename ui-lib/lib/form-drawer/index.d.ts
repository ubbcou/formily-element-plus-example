import { Form, IFormProps } from '@formily/core';
import { IMiddleware } from '@formily/shared';
import type { ElDrawer as ElDrawerProps, ElButton as ElButtonProps } from 'element-plus';
import { Component, VNode } from 'vue';
declare type FormDrawerContentProps = {
    form: Form;
};
declare type FormDrawerContent = Component | ((props: FormDrawerContentProps) => VNode);
declare type DrawerTitle = string | number | Component | VNode | (() => VNode);
declare type IFormDrawerProps = Omit<typeof ElDrawerProps, 'title'> & {
    title?: DrawerTitle;
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
export interface IFormDrawer {
    forOpen(middleware: IMiddleware<IFormProps>): IFormDrawer;
    forConfirm(middleware: IMiddleware<IFormProps>): IFormDrawer;
    forCancel(middleware: IMiddleware<IFormProps>): IFormDrawer;
    open(props?: IFormProps): Promise<any>;
    close(): void;
}
export interface IFormDrawerComponentProps {
    content: FormDrawerContent;
    resolve: () => any;
    reject: () => any;
}
export declare function FormDrawer(title: IFormDrawerProps | DrawerTitle, content: FormDrawerContent): IFormDrawer;
export declare function FormDrawer(title: IFormDrawerProps | DrawerTitle, id: string | symbol, content: FormDrawerContent): IFormDrawer;
export declare function FormDrawer(title: DrawerTitle, id: string, content: FormDrawerContent): IFormDrawer;
export declare namespace FormDrawer {
    var Footer: import("vue").DefineComponent<{}, () => any, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
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
export default FormDrawer;
