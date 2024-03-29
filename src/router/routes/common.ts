// export default [

// ];
import Layout from '@/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router';
export const Router: Array<RouteRecordRaw> = [
  {
    path: '/index',
    name: 'index',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/index.vue')
  },
  {
    path: '/index2',
    name: 'index2',
    meta: {
      title: '首页2',
    },
    component: () => import('@/views/guestManagerMod/inquireCustomerInfo.vue')
  },
  {
    path: '/guestManagerMod',
    meta: {
      title: '要客客户经理使用模块',
    },
    component: Layout,
    name: 'guestManagerMod',
    // redirect:'/guestManagerMod/inquireCustomerInfo',
    children: [
      {
        path: '/guestManagerMod/inquireCustomerInfo',

        name: 'inquireCustomerInfo',
        meta: {
          title: '本人名下要客信息查询',
        },
        component: () => import('@/views/guestManagerMod/inquireCustomerInfo.vue')
      },
      {
        path: '/guestManagerMod/guestManagerModify',
        meta: {
          title: '要客经理修改维护',
        },
        name: 'guestManagerModify',
        component: () => import('@/views/guestManagerMod/guestManagerModify.vue')
      }
    ]
  },
  {
    path: '/guestReport',

    name: 'guestReport',
    meta: {
      title: '要客报表',
    },
    component: Layout,
    children: [
      {
        path: '/guestReport/guestStatSheet',
        meta: {
          title: '要客客户统计表',
        },
        name: 'guestStatSheet',
        component: () => import('@/views/guestReport/guestStatSheet.vue')
      }
      ,
      {
        path: '/guestReport/guestDetailStatSheet',
        meta: {
          title: '要客明细统计表',
        },
        name: 'guestDetailStatSheet',
        component: () => import('@/views/guestReport/guestDetailStatSheet.vue')
      }
    ]
  },
  {
    path: '/queryFun',
    component: Layout,
    name: 'queryFun',
    meta: {
      title: '查询类功能',
    },
    children: [
      {
        path: '/queryFun/branchGuestMaint',
        meta: {
          title: '分行要客维护',
        },
        name: 'branchGuestMaint',
        component: () => import('@/views/queryFun/branchGuestMaint.vue')
      },
      {
        path: '/queryFun/SMSHisyQuery',

        meta: {
          title: '短信渠道历史查询',
        },
        name: 'SMSHisyQuery',
        component: () => import('@/views/queryFun/SMSHisyQuery.vue')
      },
      {
        path: '/queryFun/personCardBill',

        meta: {
          title: '个人卡合并账单查询',
        },
        name: 'personCardBill',
        component: () => import('@/views/queryFun/personCardBill.vue')
      },
      {
        path: '/queryFun/customerRightsInfo',

        meta: {
          title: '客户权益信息查询',
        },
        name: 'customerRightsInfo',
        component: () => import('@/views/queryFun/customerRightsInfo.vue')
      },
      {
        path: '/queryFun/applyProgress',

        meta: {
          title: '申请件进度查询',
        },
        name: 'applyProgress',
        component: () => import('@/views/queryFun/applyProgress.vue')
      },
      {
        path: '/queryFun/creditCardLimit',

        meta: {
          title: '信用卡额度查询',
        },
        name: 'creditCardLimit',
        component: () => import('@/views/queryFun/creditCardLimit.vue')
      },
      {
        path: '/queryFun/creditCardTrans',

        meta: {
          title: '信用卡交易查询',
        },
        name: 'creditCardTrans',
        component: () => import('@/views/queryFun/creditCardTrans.vue')
      },
      {
        path: '/queryFun/creditCardBill',

        meta: {
          title: '信用卡账单查询',
        },
        name: 'creditCardBill',
        component: () => import('@/views/queryFun/creditCardBill.vue')
      },
      {
        path: '/queryFun/creditCardInfo',

        name: 'creditCardInfo',
        meta: {
          title: '信用卡信息查询',
        },
        component: () => import('@/views/queryFun/creditCardInfo.vue')
      },
      {
        path: '/queryFun/creditCardStatus',

        meta: {
          title: '信用卡状态查询',
        },
        name: 'creditCardStatus',
        component: () => import('@/views/queryFun/creditCardStatus.vue')
      },
      {
        path: '/queryFun/mainAttachedCard',

        meta: {
          title: '主附卡关系查询',
        },
        name: 'mainAttachedCard',
        component: () => import('@/views/queryFun/mainAttachedCard.vue')
      },
      {
        path: '/queryFun/annualFeeWaiver',

        meta: {
          title: '年费减免查询',
        },
        name: 'annualFeeWaiver',
        component: () => import('@/views/queryFun/annualFeeWaiver.vue')
      },
      {
        path: '/queryFun/accountStatus',

        meta: {
          title: '账户状态查询',
        },
        name: 'accountStatus',
        component: () => import('@/views/queryFun/accountStatus.vue')
      },
      {
        path: '/queryFun/officialCardInfo',

        meta: {
          title: '公务卡信息查询',
        },
        name: 'officialCardInfo',
        component: () => import('@/views/queryFun/officialCardInfo.vue')
      },
      {
        path: '/queryFun/cardReplaceHisy',

        meta: {
          title: '换卡历史记录查询',
        },
        name: 'cardReplaceHisy',
        component: () => import('@/views/queryFun/cardReplaceHisy.vue')
      },
      {
        path: '/queryFun/financialHisy',

        meta: {
          title: '金融历史查询',
        },
        name: 'financialHisy',
        component: () => import('@/views/queryFun/financialHisy.vue')
      },
      {
        path: '/queryFun/creditCardAuth',

        meta: {
          title: '信用卡授权查询',
        },
        name: 'creditCardAuth',
        component: () => import('@/views/queryFun/creditCardAuth.vue')
      },
    ]
  },
  {
    path: '/OperatFun',
    meta: {
      title: '操作类功能',
    },

    name: 'OperatFun',
    children: [
      {
        path: '/OperatFun/tranSMSNotif',

        name: 'tranSMSNotif',
        meta: {
          title: '交易短信通知触发金额',
        },
        component: () => import('@/views/OperatFun/tranSMSNotif.vue')
      },
      {
        path: '/OperatFun/installmentTradeAndReduce',
        meta: {
          title: '分期交易提前结算并减免手续费',
        },
        name: 'installmentTradeAndReduce',
        component: () => import('@/views/OperatFun/installmentTradeAndReduce.vue')
      },
      {
        path: '/OperatFun/customerAndAccountFLAgjust',
        meta: {
          title: '客户、账户五级分类批量调整申请',
        },
        name: 'customerAndAccountFLAgjust',
        component: () => import('@/views/OperatFun/customerAndAccountFLAgjust.vue')
      }
    ]
  },
  /**************  底部菜单路由  可独立拆分出去********************/
  // {
  //   path: '/service',
  //   meta: {
  //     title: '服务类功能'
  //   },
  //   redirect: '/service/customerInfo',
  //   children: [
  //     {
  //       path: '/service/customerInfo',

  //       meta: {
  //         title: '客户信息',
  //       },
  //       name: 'customerInfo',
  //       component: () =>
  //       import(/* webpackChunkName: "customerInfo" */ '@/views/service/customerInfo.vue')
  //     },
  //     {
  //       path: '/service/branchTranFlow',
  //       meta: {
  //         title: '分行端交易流水'
  //       },
  //       name: 'branchTranFlow',
  //       component: () =>
  //       import(/* webpackChunkName: "branchTranFlow" */ '@/views/service/branchTranFlow.vue')
  //     },
  //     {
  //       path: '/service/headOfficeSerHsy',
  //       meta: {
  //         title: '总行端服务历史（400）'
  //       },
  //       name: 'headOfficeSerHsy',
  //       component: () =>
  //       import(/* webpackChunkName: "headOfficeSerHsy" */ '@/views/service/headOfficeSerHsy.vue')
  //     },
  //     {
  //       path: '/service/interCardTranFlow',
  //       meta: {
  //         title: '国际卡上收前交易流水',
  //       },
  //       name: 'interCardTranFlow',
  //       component: () =>
  //       import(/* webpackChunkName: "interCardTranFlow" */ '@/views/service/interCardTranFlow.vue')
  //     },
  //     {
  //       path: '/service/inquirTranFlow',
  //       meta: {
  //         title: '本柜员交易流水查询'
  //       },
  //       name: 'inquirTranFlow',
  //       component: () =>
  //       import(/* webpackChunkName: "inquirTranFlow" */ '@/views/service/inquirTranFlow.vue')
  //     },
  //     {
  //       path: '/service/myService',
  //       meta: {
  //         title: '我的服务'
  //       },
  //       name: 'myService',
  //       component: () =>
  //       import(/* webpackChunkName: "myService" */ '@/views/service/myService.vue')
  //     },
  //   ]
  // },
  {
    path: '/filter',
    meta: {
      title: '快速查找'
    },
    name: 'filter',
    component: () =>
      import(/* webpackChunkName: "filter" */ '@/views/filter.vue')
  },

]