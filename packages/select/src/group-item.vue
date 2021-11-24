<template>
  <div
    v-if="item.isTitle"
    class="el-select-group__title"
    :style="[style, { lineHeight: `${height}px` }]"
  >
    {{ item.label }}
  </div>
  <div v-else class="el-select-group__split" :style="style">
    <span
      class="el-select-group__split-dash"
      :style="{ top: `${height / 2}px` }"
    ></span>
  </div>
</template>

<script lang="ts">
import { StyleValue } from '@element-plus/components/virtual-list';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
    style: {
      type: Object as PropType<StyleValue>,
      required: true,
    },
    height: {
      type: Number as PropType<number>,
      required: true,
      default: 0,
    },
  },
})
</script>
