import { IWithInstall } from '../../typings/global'
import VirtualScroll from './src/virtual-scroll.vue'
import { App } from 'vue'

VirtualScroll.install = function (app: App): void {
  app.component(VirtualScroll.name, VirtualScroll)
}

const _VirtualScroll: IWithInstall<typeof VirtualScroll> = VirtualScroll
export default _VirtualScroll