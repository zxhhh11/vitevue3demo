import { defineComponent, getCurrentInstance, h } from 'vue';

export default defineComponent({
  name: 'RenderItem',
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  proxy: getCurrentInstance(),

  render() {
    ////@ts-ignore
    return this.render?.(this.row); //不加?. 会报如下错误：Cannot invoke an object which is possibly 'undefined' in TS
  }
});
