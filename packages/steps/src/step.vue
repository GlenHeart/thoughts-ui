<template>
  {{ name }}
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ThSteps',
  setup () {
    const name = ref<string>('th-steps')
    return {
      name
    }
  }
})
</script>