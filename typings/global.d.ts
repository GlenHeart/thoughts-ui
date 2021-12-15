declare module 'vue' {
  export interface GlobalComponents {
    ThVirtualScroll: typeof import('thoughts-ui')['ThVirtualScroll']
  }
}