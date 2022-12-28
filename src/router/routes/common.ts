// export default [
  
// ];
import type { RouteRecordRaw } from 'vue-router';
export const Router: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'test',
    meta: {
      title: '图表统计'
    },
    // icon: 'analysis',
    component: () =>
      import(/* webpackChunkName: "charts" */ '@/views/test/index.vue')
  },{
  path: '/charts',
  name: 'charts',
  meta: {
    title: '图表统计'
  },
  // icon: 'analysis',
  component: () =>
    import(/* webpackChunkName: "charts" */ '@/views/charts/index.vue')
},

]