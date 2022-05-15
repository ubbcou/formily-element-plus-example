import type { DefineComponent } from 'vue';
import { InjectionKey, Ref } from 'vue';
export declare type CreateContext<T> = {
    Provider?: DefineComponent;
    Consumer?: DefineComponent;
    injectKey: InjectionKey<Ref<T>>;
};
export declare const createContext: <T>(defaultValue?: T | undefined) => CreateContext<T>;
export declare const useContext: <T>(context: CreateContext<T>) => Ref<T>;
