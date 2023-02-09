
import type { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs';
export const dynamicRoutes = [
  {
    path: '/filter',
    meta: {
      title: '快速查找'
    },
    name: 'filter',
    component: "Layout",
    hidden: true,
    children: [
      {
        path: '/filter',
        component: 'filter/index',
        name: 'filter',
        meta: { title: '查找', icon: 'dashboard', affix: true }
      }
    ]
  }, {
    name: "guestManagerMod",
    path: "/guestManagerMod",
    hidden: false,
    // "redirect":"noRedirect",
    component: "Layout",
    alwaysShow: true,
    meta: {
      title: "要客客户经理使用模块",
      icon: "#icon-bussinesscard",
      noCache: false,
      link: null
    },
    children: [
      {
        name: "inquireCustomerInfo",
        path: "inquireCustomerInfo",
        hidden: false,
        component: "guestManagerMod/inquireCustomerInfo/index",
        meta: {
          title: "本人名下要客信息查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "guestManagerModify",
        path: "guestManagerModify",
        hidden: false,
        component: "guestManagerMod/guestManagerModify/index",
        meta: {
          title: "要客经理修改维护",
          icon: "user",
          noCache: false,
          link: null
        }
      }
    ]
  },
  {
    name: "guestReport",
    path: "/guestReport",
    hidden: false,
    // "redirect":"noRedirect",
    component: "Layout",
    alwaysShow: true,
    meta: {
      title: "要客报表",
      icon: "#icon-dashboard",
      noCache: false,
      link: null
    },
    children: [
      {
        name: "guestStatSheet",
        path: "guestStatSheet",
        hidden: false,
        component: "guestReport/guestStatSheet/index",
        meta: {
          title: "要客客户统计表",
          icon: "#icon-dashboard",
          noCache: false,
          link: null
        }
      },
      {
        name: "guestDetailStatSheet",
        path: "guestDetailStatSheet",
        hidden: false,
        component: "guestReport/guestDetailStatSheet/index",
        meta: {
          title: "要客经理修改维护",
          icon: "user",
          noCache: false,
          link: null
        }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    component: 'error/404',
    hidden: true
  }
]


export default [
  {
    url: '/api/getRouters',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: dynamicRoutes  // data 中返回的数据最好在此文件夹中定义
      };
    },
  }
] as MockMethod[]; // 定义数据格式