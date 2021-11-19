<template>
  <teleport to="body">
    <transition
      name="fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <div class="th-overlay-dialog" v-show="visible">
        <div class="th-dialog" :style="style">
          <div class="th-dialog-head">
            <slot name="head">
              {{ title }}
            </slot>
            <el-icon class="th-dialog-close" @click="closeDialog"
              ><Close
            /></el-icon>
          </div>
          <div class="th-dialog-content">
            <slot></slot>
          </div>
          <div class="th-dialog-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, toRefs, watch, ref, computed } from 'vue';
import type { CSSProperties } from 'vue';
import { dialogProps } from './dialog';
import './dialog.scss';
import { Close } from '@element-plus/icons';

export default defineComponent({
  props: dialogProps,
  emits: ['opened', 'closed', 'close', 'open', 'update:modelValue'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const visible = ref(false);
    watch(modelValue, (val) => {
      visible.value = val;
      // emit('open');
    });
    const afterEnter = (): void => {
      emit('opened');
    };
    const afterLeave = (): void => {
      emit('update:modelValue', false);
      emit('closed');
    };
    const beforeLeave = (): void => {
      emit('close');
    };
    const style = computed<CSSProperties>(() => {
      const result: CSSProperties = {};
      const varPrefix = '--th-dialog';
      if (props.width) {
        result[`${varPrefix}-width`] = props.width;
      }
      return result;
    });
    const closeDialog = () => {
      emit('close');
      visible.value = false;
    };
    return {
      style,
      visible,
      afterEnter,
      afterLeave,
      beforeLeave,
      closeDialog,
    };
  },
  components: {
    Close,
  },
});
</script>
