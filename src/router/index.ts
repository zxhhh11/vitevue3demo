

import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import ErrorConfig from './error';
// import type { FunctionalComponent } from 'vue';
import Home from '@/views/Home.vue';
import NProgress from '@/utils/progress';
import RoutesMapConfig from './routes';

// import { toRouteType } from './types';

// interface RoutesType {
//   path: string;
//   redirect?: RouteLocationRaw;
//   meta?: RouteMeta;
//   children?: RouteRecordRaw[];
//   component?: FunctionalComponent;
//   name?: string;
// }
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      title: '登录XX系统'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '系统首页'
    },
    children: []
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  }
];
routes[1].children = RoutesMapConfig.concat(ErrorConfig);

const router = createRouter({
  history: createWebHistory(),
  routes
});
/**********注意： 如果需要添加新的路由页，
 * 不要改动这里代码 只需要在同级的routes 文件夹操作就可以
 * 可以添加新的ts文件，参考 demo.ts 也可以在现有routes/**.ts 文件中加入新路由配置
 *  添加新路由后务必在utils/routers.ts(控制页面中的menu菜单)文件中同步信息
 *  ********/

router.beforeEach((to, from, next) => {
  NProgress.start();
  document.title = `${to.meta.title} | vue-manage-system`;
  // const role = localStorage.getItem('ms_username');
  // if (!role && to.path !== '/login') {
  //   next('/login');
  // } else if (to.meta.permission) {
  //   // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
  //   role === 'admin' ? next() : next('/403');
  // } else {
  //   next();
  // }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;