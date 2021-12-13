import ThoughtsUI from 'thoughts-ui'
import DefaultTheme from 'vitepress/dist/client/theme-default'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(ThoughtsUI)
  }
}