<script lang="tsx">
import { defineComponent, toRefs, PropType, onMounted, ref } from 'vue'
import VirtualScrollOption from './virtual-scroll-option.vue'
import useSrcoll from './hooks/useScroll'
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
    },
    itemHeight: {
      type: Number,
      default: 32
    }
  },
  setup(props) {
    const virtualScrollRef = ref<HTMLElement | null>(null)
    const virtualScrollListRef = ref<HTMLElement | null>(null)
    const { options, itemHeight } = toRefs(props)
    const renderOptionNum = ref(0)
    const scrollHeight = {
      height: `${options.value.length * itemHeight.value}px`
    }
    const { handleScroll, renderList, renderScroll } = useSrcoll(
      virtualScrollListRef,
      itemHeight,
      options,
      renderOptionNum
    )
    onMounted(() => {
      const height = (virtualScrollRef.value as unknown as HTMLElement)
        ?.clientHeight
      renderOptionNum.value = Math.ceil(height / itemHeight.value)
      renderScroll(0)
    })
    return () => (
      <div
        class="virtual-scroll"
        ref={virtualScrollRef}
        onScroll={handleScroll}
      >
        <div class="virtual-scroll-bg" style={scrollHeight}></div>
        <ul class="virtual-scroll-list" ref={virtualScrollListRef}>
          {renderList.value.map((item) => (
            <VirtualScrollOption
              label={item.value}
              itemHeight={32}
              key={item.value}
            ></VirtualScrollOption>
          ))}
        </ul>
      </div>
    )
  }
})
</script>
<style lang="scss">
.virtual-scroll {
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  min-width: 200px;
  height: 200px;
  overflow: auto;
  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    background-color: #f5f5f5;
  }
  &-list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
</style>
