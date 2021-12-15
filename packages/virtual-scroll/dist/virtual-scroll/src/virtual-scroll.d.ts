import { PropType } from 'vue';
import type { virtualScrollOption } from './type';
import '../index.scss';
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<virtualScrollOption[]>;
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
    options: virtualScrollOption[];
} & {}>, {
    itemHeight: number;
    options: virtualScrollOption[];
}>;
export default _default;
