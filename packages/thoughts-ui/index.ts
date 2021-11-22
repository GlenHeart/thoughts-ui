import Button from '../components/button/button.vue';
import Affix from '../components/affix/affix.vue';
import Dialog from '../components/dialog/dialog.vue';

export { Button, Affix, Dialog };

export default function install(Vue) {
  [Button, Affix, Dialog].forEach((comp) => {
    Vue.component(comp.name, comp);
  });
}
