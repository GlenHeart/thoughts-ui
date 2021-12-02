<script lang="tsx">
import { defineComponent, toRefs, PropType } from 'vue'
import VirtualScrollOption from './virtual-scroll-option.vue'
import type { virtualScrollOption } from '@/virtual-scroll/types'

export default defineComponent({
  name: 'VirtualScroll',
  components: {
    VirtualScrollOption
  },
  props: {
    options: {
      type: Array as PropType<virtualScrollOption[]>,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const { options } = toRefs(props)
    return () => (
      <ul class="virtual-scroll">
        {options.value.map((item) => (
          <VirtualScrollOption
            label={item.value}
            itemHeight={32}
          ></VirtualScrollOption>
        ))}
      </ul>
    )
  }
})
</script>
<style lang="scss">
.virtual-scroll {
  display: block;
  height: 100%;
  width: 100%;
  min-width: 200px;
  height: 200px;
  overflow: auto;
}
</style>
