import { buildProps } from '../utils/props';
import type { ExtractPropTypes } from 'vue';

export const dialogProps = buildProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
  },
  modalClick: {
    type: Boolean,
  },
  width: {
    type: String,
  },
} as const);

export type DialogProps = ExtractPropTypes<typeof dialogProps>;
