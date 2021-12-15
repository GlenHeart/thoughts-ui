import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    itemHeight: {
        type: PropType<number>;
        default: number;
        required: true;
    };
    label: {
        type: PropType<string>;
        default: string;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    itemHeight?: unknown;
    label?: unknown;
} & {
    itemHeight: number;
    label: string;
} & {}>, {
    itemHeight: number;
    label: string;
}>;
export default _default;
