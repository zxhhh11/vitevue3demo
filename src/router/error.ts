export default [
  {
    path: '/404',
    name: '404',
    meta: {
      title: '找不到页面'
    },
    icon: 'commodity',
    component: () =>
      import(/* webpackChunkName: "404" */ '@/views/error/404.vue')
  },
  {
    path: '/401',
    name: '401',
    meta: {
      title: '没有权限'
    },
    icon: 'delete-three',
    component: () =>
      import(/* webpackChunkName: "403" */ '@/views/error/401.vue')
  }
];
