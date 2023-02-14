
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
    name: "queryFun",
    path: "/queryFun",
    hidden: false,
    component: "Layout",
    alwaysShow: true,
    meta: {
      title: "查询类功能",
      icon: "#icon-all",
      noCache: false,
      link: null
    },
    children: [
      {
        name: "branchGuestMaint",
        path: "branchGuestMaint",
        hidden: false,
        component: "queryFun/branchGuestMaint/index",
        meta: {
          title: "分行要客维护",
          icon: "#icon-dashboard",
          noCache: false,
          link: null
        }
      },
      {
        name: "SMSHisyQuery",
        path: "SMSHisyQuery",
        hidden: false,
        component: "queryFun/SMSHisyQuery/index",
        meta: {
          title: "短信渠道历史查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "personCardBill",
        path: "personCardBill",
        hidden: false,
        component: "queryFun/personCardBill/index",
        meta: {
          title: "个人卡合并账单查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "customerRightsInfo",
        path: "customerRightsInfo",
        hidden: false,
        component: "queryFun/customerRightsInfo/index",
        meta: {
          title: "客户权益信息查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "applyProgress",
        path: "applyProgress",
        hidden: false,
        component: "queryFun/applyProgress/index",
        meta: {
          title: "申请件进度查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "creditCardLimit",
        path: "creditCardLimit",
        hidden: false,
        component: "queryFun/creditCardLimit/index",
        meta: {
          title: "信用卡额度查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "creditCardTrans",
        path: "creditCardTrans",
        hidden: false,
        component: "queryFun/creditCardTrans/index",
        meta: {
          title: "信用卡交易查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "creditCardBill",
        path: "creditCardBill",
        hidden: false,
        component: "queryFun/creditCardBill/index",
        meta: {
          title: "信用卡账单查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "creditCardInfo",
        path: "creditCardInfo",
        hidden: false,
        component: "queryFun/creditCardInfo/index",
        meta: {
          title: "信用卡信息查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "creditCardStatus",
        path: "creditCardStatus",
        hidden: false,
        component: "queryFun/creditCardStatus/index",
        meta: {
          title: "信用卡状态查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "mainAttachedCard",
        path: "mainAttachedCard",
        hidden: false,
        component: "queryFun/mainAttachedCard/index",
        meta: {
          title: "主附卡关系查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "annualFeeWaiver",
        path: "annualFeeWaiver",
        hidden: false,
        component: "queryFun/annualFeeWaiver/index",
        meta: {
          title: "年费减免查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "accountStatus",
        path: "accountStatus",
        hidden: false,
        component: "queryFun/accountStatus/index",
        meta: {
          title: "账户状态查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "officialCardInfo",
        path: "officialCardInfo",
        hidden: false,
        component: "queryFun/officialCardInfo/index",
        meta: {
          title: "公务卡信息查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "cardReplaceHisy",
        path: "cardReplaceHisy",
        hidden: false,
        component: "queryFun/cardReplaceHisy/index",
        meta: {
          title: "换卡历史记录查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "financialHisy",
        path: "financialHisy",
        hidden: false,
        component: "queryFun/financialHisy/index",
        meta: {
          title: "金融历史查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "creditCardAuth",
        path: "creditCardAuth",
        hidden: false,
        component: "queryFun/creditCardAuth/index",
        meta: {
          title: "信用卡授权查询",
          icon: "user",
          noCache: false,
          link: null
        }
      },

    ]
  },
  {
    name: "OperatFun",
    path: "/OperatFun",
    hidden: false,
    component: "Layout",
    alwaysShow: true,
    meta: {
      title: "操作类功能",
      icon: "#icon-category",
      noCache: false,
      link: null
    },
    children: [
      {
        name: "tranSMSNotif",
        path: "tranSMSNotif",
        hidden: false,
        component: "OperatFun/tranSMSNotif/index",
        meta: {
          title: "交易短信通知触发金额",
          icon: "#icon-dashboard",
          noCache: false,
          link: null
        }
      },
      {
        name: "installmentTradeAndReduce",
        path: "installmentTradeAndReduce",
        hidden: false,
        component: "OperatFun/installmentTradeAndReduce/index",
        meta: {
          title: "分期交易提前结算并减免手续费",
          icon: "user",
          noCache: false,
          link: null
        }
      },
      {
        name: "customerAndAccountFLAgjust",
        path: "customerAndAccountFLAgjust",
        hidden: false,
        component: "OperatFun/customerAndAccountFLAgjust/index",
        meta: {
          title: "客户、账户五级分类批量调整申请",
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