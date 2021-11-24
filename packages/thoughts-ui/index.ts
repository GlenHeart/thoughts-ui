import Select from '../select/select.vue';

export default function install(Vue) {
  [Select].forEach((comp) => {
    Vue.component(comp.name, comp);
  });
}
