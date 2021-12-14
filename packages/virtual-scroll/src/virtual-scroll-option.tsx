import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    itemHeight: {
      type: Number as PropType<number>,
      default: 0,
      required: true
    },
    label: {
      type: String as PropType<string>,
      default: '',
      required: true
    }
  },
  setup(props, { emit }) {
    const { label, itemHeight } = props
    const style = { height: `${itemHeight}px` }
    return () => <li style={style}>{label}</li>
  }
})