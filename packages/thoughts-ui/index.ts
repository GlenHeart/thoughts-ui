import Button from '../button/button.vue';
import Affix from '../affix/affix.vue';
import Dialog from '../dialog/dialog.vue';
export { Button, Affix, Dialog };
export default function install(Vue) {
  [Button, Affix, Dialog].forEach((comp) => {
    Vue.component(comp.name, comp);
  });
}
