import ThSelect from './src/select.vue';

import type { App } from 'vue';
import type { SFCWithInstall } from '@element-plus/utils/types';

ThSelect.install = (app: App): void => {
  app.component(ThSelect.name, ThSelect);
};

const _Select = ThSelect as SFCWithInstall<typeof ThSelect>;

export default _Select;
export const ThSelect2 = _Select;

export * from './src/token';
