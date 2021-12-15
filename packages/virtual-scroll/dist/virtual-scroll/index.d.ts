export declare const ThVirtualScroll: import("@thoughts-ui/utils/types").SFCWithInstall<import("vue").DefineComponent<{
    options: {
        type: import("vue").PropType<import("./src/type").virtualScrollOption[]>;
        default: () => never[];
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options?: unknown;
    itemHeight?: unknown;
} & {
    itemHeight: number;
    options: import("./src/type").virtualScrollOption[];
} & {}>, {
    itemHeight: number;
    options: import("./src/type").virtualScrollOption[];
}>> & Record<string, any>;
export default ThVirtualScroll;
export * from './src/virtual-scroll';
