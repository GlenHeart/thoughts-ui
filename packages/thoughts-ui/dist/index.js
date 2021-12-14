// will-ui/index.ts
import virtualScroll from '@thoughts-ui/virtual-scroll';
const components = [virtualScroll];
const install = (app) => {
    components.forEach((component) => {
        // 遍历组件，挂载到全局
        app.component(component.name, component);
    });
};
export default {
    install
};
//# sourceMappingURL=index.js.map