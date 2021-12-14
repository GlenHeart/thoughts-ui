import VirtualScroll from './src/virtual-scroll'
import { App } from 'vue'

VirtualScroll.install = function (app: App): void {
  app.component(VirtualScroll.name, VirtualScroll)
}

export default VirtualScroll