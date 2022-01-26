import Vue, { Ref, ref } from 'vue'
import type { virtualScrollOption } from '../type'
export default function useScroll(
  virtualScrollListRef: { value: unknown },
  itemHeight: { value: number },
  options: Ref<virtualScrollOption[]>,
  renderOptionNum: { value: number }
) {
  const preList = ref<virtualScrollOption[]>([])
  const midList = ref<virtualScrollOption[]>([])
  const nextList = ref<virtualScrollOption[]>([])
  const renderList = ref<virtualScrollOption[]>([])
  let tick = false

  const handleScroll = (e: Event) => {
    if (tick) return
    tick = true
    requestAnimationFrame(() => {
      tick = false
    })
    const scrollTop = (e.target as unknown as HTMLElement).scrollTop
    renderScroll(scrollTop)
  }
  const renderScroll = (scrollTop: number) => {
    const getStartIndex = (scrollTop: number) => {
      return Math.ceil(scrollTop / itemHeight.value)
    }
    const baseTop =
      scrollTop - renderOptionNum.value * itemHeight.value > 0
        ? scrollTop - renderOptionNum.value * itemHeight.value
        : 0
    transform()
    const startIndex = getStartIndex(scrollTop)
    preList.value = getList(startIndex, startIndex + renderOptionNum.value)
    midList.value = getList(
      startIndex + renderOptionNum.value,
      startIndex + renderOptionNum.value * 2
    )
    nextList.value = getList(
      startIndex + renderOptionNum.value * 2,
      startIndex + renderOptionNum.value * 3
    )
    renderList.value = [...preList.value, ...midList.value, ...nextList.value]
    function getList(startIdx: number, stopIdx: number): virtualScrollOption[] {
      return options.value.slice(startIdx, stopIdx)
    }
    function transform() {
      ;(
        virtualScrollListRef.value as unknown as HTMLElement
      ).style.transform = `translate3d(0, ${baseTop}px, 0)`
    }
  }

  return {
    preList,
    midList,
    nextList,
    renderList,
    handleScroll,
    renderScroll
  }
}
