<template>
  <div>
    <ThVirtualScroll :options="options" />
  </div>
</template>

<script lang="ts">
import { ThVirtualScroll } from 'thoughts-ui'
import { ref, defineComponent } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

export default defineComponent({
  components: { ThVirtualScroll },
  setup() {
    return {
      options: ref(
        Array.from({ length: 1000 }).map((_, idx) => ({
          value: `Option ${idx + 1}`,
          text: `${initials[idx % 10]}${idx}`
        }))
      ),
      value: ref('')
    }
  }
})
</script>
