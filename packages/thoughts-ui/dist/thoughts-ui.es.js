import { defineComponent, createVNode, ref, toRefs, onMounted } from "vue";
var VirtualScrollOption = defineComponent({
  props: {
    itemHeight: {
      type: Number,
      default: 0,
      required: true
    },
    label: {
      type: String,
      default: "",
      required: true
    }
  },
  setup(props, {
    emit
  }) {
    const {
      label,
      itemHeight
    } = props;
    const style = {
      height: `${itemHeight}px`
    };
    return () => createVNode("li", {
      "style": style
    }, [label]);
  }
});
function useScroll(virtualScrollListRef, itemHeight, options, renderOptionNum) {
  const preList = ref([]);
  const midList = ref([]);
  const nextList = ref([]);
  const renderList = ref([]);
  let tick = false;
  const handleScroll = (e) => {
    if (tick)
      return;
    tick = true;
    requestAnimationFrame(() => {
      tick = false;
    });
    const scrollTop = e.target.scrollTop;
    renderScroll(scrollTop);
  };
  const renderScroll = (scrollTop) => {
    const getStartIndex = (scrollTop2) => {
      return Math.ceil(scrollTop2 / itemHeight.value);
    };
    const baseTop = scrollTop - renderOptionNum.value * itemHeight.value > 0 ? scrollTop - renderOptionNum.value * itemHeight.value : 0;
    transform();
    const startIndex = getStartIndex(scrollTop);
    preList.value = getList(startIndex, startIndex + renderOptionNum.value);
    midList.value = getList(startIndex + renderOptionNum.value, startIndex + renderOptionNum.value * 2);
    nextList.value = getList(startIndex + renderOptionNum.value * 2, startIndex + renderOptionNum.value * 3);
    renderList.value = [...preList.value, ...midList.value, ...nextList.value];
    function getList(startIdx, stopIdx) {
      return options.value.slice(startIdx, stopIdx);
    }
    function transform() {
      virtualScrollListRef.value.style.transform = `translate3d(0, ${baseTop}px, 0)`;
    }
  };
  return {
    preList,
    midList,
    nextList,
    renderList,
    handleScroll,
    renderScroll
  };
}
var index$1 = "";
var VirtualScroll = defineComponent({
  name: "VirtualScroll",
  components: {
    VirtualScrollOption
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    itemHeight: {
      type: Number,
      default: 32
    }
  },
  setup(props) {
    const virtualScrollRef = ref(null);
    const virtualScrollListRef = ref(null);
    const {
      options,
      itemHeight
    } = toRefs(props);
    const renderOptionNum = ref(0);
    const scrollHeight = {
      height: `${options.value.length * itemHeight.value}px`
    };
    const {
      handleScroll,
      renderList,
      renderScroll
    } = useScroll(virtualScrollListRef, itemHeight, options, renderOptionNum);
    onMounted(() => {
      var _a;
      const height = (_a = virtualScrollRef.value) == null ? void 0 : _a.clientHeight;
      renderOptionNum.value = Math.ceil(height / itemHeight.value);
      renderScroll(0);
    });
    return () => createVNode("div", {
      "class": "virtual-scroll",
      "ref": virtualScrollRef,
      "onScroll": handleScroll
    }, [createVNode("div", {
      "class": "virtual-scroll-bg",
      "style": scrollHeight
    }, null), createVNode("ul", {
      "class": "virtual-scroll-list",
      "ref": virtualScrollListRef
    }, [renderList.value.map((item) => createVNode(VirtualScrollOption, {
      "label": item.value,
      "itemHeight": 32,
      "key": item.value
    }, null))])]);
  }
});
VirtualScroll.install = function(app) {
  app.component(VirtualScroll.name, VirtualScroll);
};
const components = [VirtualScroll];
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
var index = {
  install
};
export { index as default };
