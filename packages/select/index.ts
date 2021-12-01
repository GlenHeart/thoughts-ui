import type { App } from 'vue'
import ThSelect from './src/select.vue'

ThSelect.install = (app: App): void => {
  app.component(ThSelect.name, ThSelect)
}

export default ThSelect
