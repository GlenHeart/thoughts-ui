import { App } from 'vue'
import virtualScroll from '@thoughts-ui/virtual-scroll'

const components = [virtualScroll]

const install = (app: App): void => {
  components.forEach((component) => {
    // 遍历组件，挂载到全局
    app.component(component.name, component)
  })                                                                                                                                                         
}

export default {
  install
}

export * from '@thoughts-ui/virtual-scroll'