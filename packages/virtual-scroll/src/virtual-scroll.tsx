import { defineComponent, toRefs, PropType, onMounted, ref } from 'vue'
import VirtualScrollOption from './virtual-scroll-option'
import useSrcoll from './hooks/useScroll'
import type { virtualScrollOption } from './type'
import '../index.scss'

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

