<template>
  <div style="position: fixed">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, shallowRef, PropType, watch } from 'vue';
import { useEventListener } from '@vueuse/core';

interface rootStyleType {
  width: string | number;
  height: string | number;
}

export default defineComponent({
  props: {
    offset: {
      type: Number,
      default: 0,
    },
    rootStyle: Object as PropType<rootStyleType>,
    position: String,
    target: String,
  },
  setup(props, { emit }) {
    const scrollContainer = shallowRef<HTMLElement>();
    const root = shallowRef<HTMLElement>();
    const target = shallowRef<HTMLElement>();

    const affixedStyle = reactive({
      offset: '0px',
    });
    const state = reactive({
      fixed: false,
      height: 0,
      width: 0,
      scrollTop: 0,
      clientHeight: 0,
      transform: 0,
    });
    const update = () => {
      if (!root.value || !target.value || !scrollContainer.value) return;
      const rootRect = root.value.getBoundingClientRect();
      const targetRect = target.value.getBoundingClientRect();
      state.height = rootRect.height;
      state.width = rootRect.width;
      state.scrollTop =
        scrollContainer.value instanceof Window
          ? document.documentElement.scrollTop
          : scrollContainer.value.scrollTop;
      state.clientHeight = document.documentElement.clientHeight;
      if (props.position === 'top') {
        if (props.target) {
          const difference = targetRect.bottom - props.offset - state.height;
          state.fixed = props.offset > rootRect.top && targetRect.bottom > 0;
          state.transform = difference < 0 ? difference : 0;
        }
        if (!props.target) {
          state.fixed = props.offset > rootRect.top;
        }
      }
      if (props.position !== 'top') {
        if (props.target) {
          const difference =
            state.clientHeight - targetRect.top - props.offset - state.height;
          state.fixed =
            state.clientHeight - props.offset < rootRect.bottom &&
            state.clientHeight > targetRect.top;
          state.transform = difference < 0 ? -difference : 0;
        }
        if (!props.target) {
          state.fixed = state.clientHeight - props.offset < rootRect.bottom;
        }
      }
    };
    const onScroll = () => {
      update();
      emit('scroll', {
        scrollTop: state.scrollTop,
        fixed: state.fixed,
      });
    };
    watch(
      () => state.fixed,
      () => {
        emit('change', state.fixed);
      },
    );
    useEventListener(scrollContainer, 'scroll', onScroll);
    return {
      affixedStyle,
    };
  },
});
</script>
