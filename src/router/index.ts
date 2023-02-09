// @ts-nocheck

import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import usePermissionStore from '@/stores/permission'
// import ErrorConfig from './error';
// import type { FunctionalComponent } from 'vue';
// import Home from '@/views/Home.vue';
import NProgress from '@/utils/progress';
// import RoutesMapConfig from './routes';
import Layout from '@/layout/index.vue';
import {isHttp} from '@/utils/validate'
// import { toRouteType } from './types';
// console.log(usePermissionStore,'usePermissionStore')

import axios from "axios";
/**
 * Note: 路由配置项
 *
 * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * query: '{"id": 1, "name": "ry"}' // 访问路由的默认传递参数
 * roles: ['admin', 'common']       // 访问路由的角色权限
 * permissions: ['a:a:a', 'b:b:b']  // 访问路由的菜单权限
 * meta : {
    noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
    breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示
    activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
  }
 */
export type RoutesType = RouteRecordRaw & { hidden?:boolean }

//公共路由
export let routes: Array<RoutesType> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/Login.vue')
  },
 
  {
    path: '/401',
    component: () => import('@/views/error/401.vue'),
    hidden: true
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/index',
  //   children: [
  //     {
  //       path: '/index',
  //       component: () => import('@/views/index.vue'),
  //       name: 'index',
  //       meta: { title: '首页', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   redirect: '/login',
  // },
  {
    path:'/',
    component:Layout,
    redirect:'/index',
    children:[
      {
        path: '/index',
        name:'index',
        component:() => import('@/views/index.vue'),
        meta: { title: '首页', icon: 'home', affix: true }
      }
    ]
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   component: () => import('@/views/error/404.vue'),
  //   hidden: true
  // },
  // {
  //   path: '/filter',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/filter',
  //       component: () => import('@/views/filter/index.vue'),
  //       name: 'filter',
  //       meta: { title: '查找', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guestManagerMod',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/inquireCustomerInfo',
  //       component: () => import('@/views/guestManagerMod/inquireCustomerInfo/index.vue'),
  //       name: 'inquireCustomerInfo',
  //       meta: { title: '本人名下要客信息查询12', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
 
];
const errorPage = {
  path: "/:pathMatch(.*)*",
  component: () => import('@/views/error/404.vue'),
  hidden: true
}


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});
let hasRoles = true
const token = 'efwgwwegvsdv'
const whiteList = ['/login', '/auth-redirect', '/bind', '/register'];
// function initMenu(newRouter=[]){
//   if(newRouter&&newRouter.length>0){
//     newRouter.forEach(r => {
//       router.addRoute(r) // 动态添加可访问路由表
//   })
//   }else{
//     usePermissionStore().generateRoutes().then(accessRoutes=> {
//       accessRoutes.forEach(r => {
//           router.addRoute(r) // 动态添加可访问路由表
//       })
//     })
//   }
 
// }
// export async function init(){
// if(sessionStorage.getItem('router')){
//   console.log('init before')
//   let newRouter = JSON.parse(sessionStorage.getItem('router'))
//   await initMenu(newRouter)
//   console.log('路由初始化完成')
//   console.log(router.getRoutes())
// }
// }

router.beforeEach(async(to, from, next) => {
  NProgress.start();
    if(token){
      if(!usePermissionStore().isFlag){
        if (hasRoles) {
        //  init()
     await usePermissionStore().generateRoutes()
   
          let arr = usePermissionStore().addRoutes
        console.log(arr)
        arr.forEach(r => {
            router.addRoute(r) // 动态添加可访问路由表
        })
         next({...to,replace:true})
          hasRoles=false
        }else{
          next()
        }
      }else{
        console.log(222)
        next()
      }
    }else{
      if (whiteList.indexOf(to.path) !== -1) {
        // 在免登录白名单，直接进入
        next()
      } else {
        next('/login') // 否则全部重定向到登录页
        NProgress.done()
      }
    }
 
 
})
// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   if(to.path === '/login' ){
//     next()
//   }else{
//     if(token){
//       if(!usePermissionStore().isFlag){
//         if (hasRoles) {
//         usePermissionStore().generateRoutes().then(accessRoutes=> {
//             accessRoutes.forEach(r => {
//               console.log(r.path,'route.path')
//                 router.addRoute(r) // 动态添加可访问路由表
//             })
            
//           })
//           next({...to,replace:true})
//           hasRoles=false
//         }else{
//           next()
//         }
//       }else{
//         console.log(222)
//         next()
//       }
//     }else{
//       console.log('/login')
//       next({path:'/login'})
//     }
//   }
 
// })

 
  
  // const role = localStorage.getItem('ms_username');
  // if (!role && to.path !== '/login') {
  //   next('/login');
  // } else if (to.meta.permission) {
  //   // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
  //   role === 'admin' ? next() : next('/403');
  // } else {
  //   next();
 
   
  // }
  
// });


router.afterEach(() => {
  NProgress.done();
});

export default router;