import type { Component } from 'vue';
declare type ListenersTransformRules = Record<string, string>;
export declare const transformComponent: <T extends Record<string, any>>(tag: any, transformRules?: ListenersTransformRules | undefined, defaultProps?: Partial<T> | undefined) => any;
export {};
