import ThSteps from './src/step.vue'
import { App } from 'vue'

ThSteps.install = function (app: App): void {
  app.component(ThSteps.name, ThSteps)
}

export default ThSteps