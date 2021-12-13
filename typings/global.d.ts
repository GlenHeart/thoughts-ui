import { App } from 'vue'

export type IWithInstall<T> = T & { install(app:App): void }