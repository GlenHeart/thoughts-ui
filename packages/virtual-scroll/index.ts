import type { App } from 'vue'
import ThVirtualScroll from './src/virtual-scroll.vue'

ThVirtualScroll.install = (app: App): void => {
  app.component(ThVirtualScroll.name, ThVirtualScroll)
}

export default ThVirtualScroll
