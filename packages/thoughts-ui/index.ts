import ThSelect from '../select/src/select.vue';

export { ThSelect };

export default function install(Vue) {
  [ThSelect].forEach((comp) => {
    Vue.component(comp.name, comp);
  });
}
