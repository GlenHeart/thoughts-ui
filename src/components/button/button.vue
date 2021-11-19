<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'ThButton',
  setup() {
    return {};
  },
};
</script>

<style scoped>
.button {
  padding: 6px 24px;
}
</style>
