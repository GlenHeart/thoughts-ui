<template>
  <div>
    <th-select
      v-model="value"
      :options="options"
      placeholder="Please select"
      style="width: 240px"
    />
  </div>
</template>

<script lang="ts">
import { ThSelect } from 'thoughts-ui'
import { ref, defineComponent } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

export default defineComponent({
  components: { ThSelect },
  setup() {
    return {
      options: ref(
        Array.from({ length: 1000 }).map((_, idx) => ({
          value: `Option ${idx + 1}`,
          label: `${initials[idx % 10]}${idx}`
        }))
      ),
      value: ref('')
    }
  }
})
</script>
