
import type { App, Plugin } from 'vue'
import type { InstallOptions } from '@thoughts-ui/utils/config'

export const makeInstaller = (components: Plugin[] = []) => {
  const apps: App[] = []

  const install = (app: App, opts: InstallOptions) => {
    if (apps.includes(app)) return
    apps.push(app)
    components.forEach((c) => app.use(c))
  }

  return {
    install
  }
}
