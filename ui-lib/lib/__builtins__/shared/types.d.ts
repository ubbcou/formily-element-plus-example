import { Component, VNode } from 'vue';
export declare type SlotTypes = Component | string | number | ((props: Record<string, any>) => VNode[] | VNode) | VNode;
