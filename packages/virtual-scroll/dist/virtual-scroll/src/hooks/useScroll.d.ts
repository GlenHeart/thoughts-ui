import { Ref } from 'vue';
import type { virtualScrollOption } from '../type';
export default function useScroll(virtualScrollListRef: {
    value: unknown;
}, itemHeight: {
    value: number;
}, options: Ref<virtualScrollOption[]>, renderOptionNum: {
    value: number;
}): {
    preList: Ref<{
        [x: string]: any;
        value: string;
        text: string;
    }[]>;
    midList: Ref<{
        [x: string]: any;
        value: string;
        text: string;
    }[]>;
    nextList: Ref<{
        [x: string]: any;
        value: string;
        text: string;
    }[]>;
    renderList: Ref<{
        [x: string]: any;
        value: string;
        text: string;
    }[]>;
    handleScroll: (e: Event) => void;
    renderScroll: (scrollTop: number) => void;
};
