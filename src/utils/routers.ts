interface MockRouterType{
  path:string,
  title:string,
  name:string,
  icon?:string,
  quickCheck?:string,
  children?:MockRouterType[],
  address?:string
}

export const originalMockRouters: MockRouterType[] = [
  {
    path: '/index',
    title: '首页',
    name: 'index',
    icon: '#icon-home1',
    address: '0',
  },
  {
    path: '/guestManagerMod',
    title: '要客客户经理使用模块',
    name: 'guestManagerMod',
    icon: '#icon-home1',
    address: '1',
    children: [
      {
        path: '/guestManagerMod/inquireCustomerInfo',
        title: '本人名下要客信息查询',
        name: 'inquireCustomerInfo',
        address: '1-0',
        quickCheck: 'BRMXYKXXCX'
      },
      {
        path: '/guestManagerMod/guestManagerModify',
        title: '要客经理修改维护',
        name: 'guestManagerModify',
        address: '1-1',
        quickCheck: 'YKJLXGWH'
      }
    ]
  },
  {
    path: '/guestReport',
    title: '要客报表',
    name: 'guestReport',
    icon: '#icon-dashboard',
    address: '2',
    children: [
      {
        path: '/guestReport/guestStatSheet',
        title: '要客客户统计表',
        name: 'guestStatSheet',
        address: '2-0',
        quickCheck: 'YKKHTJB'
      },
      {
        path: '/guestReport/guestDetailStatSheet',
        title: '要客明细统计表',
        name: 'guestDetailStatSheet',
        address: '2-1',
        quickCheck: 'YKMXTJB'
       
      }
    ]
  },
  {
    path: '/queryFun',
    title: '查询类功能',
    name: 'queryFun',
    icon: '#icon-dashboard',
    address: '3',
    children: [
      {
        path: '/queryFun/branchGuestMaint',
        title: '分行要客维护',
        name: 'branchGuestMaint',
        address: '3-0',
        quickCheck: 'FHYKWH'
      },
      {
        path: '/queryFun/SMSHisyQuery',
        title: '短信渠道历史查询',
        name: 'SMSHisyQuery',
        address: '3-1',
        quickCheck: 'DXQDLSCX'
      },
      {
        path: '/queryFun/personCardBill',
        title: '个人卡合并账单查询',
        name: 'personCardBill',
        address: '3-2',
        quickCheck: 'GRKHBZDCX'
      },
      {
        path: '/queryFun/customerRightsInfo',
        title: '客户权益信息查询',
        name: 'customerRightsInfo',
        address: '3-3',
        quickCheck: 'KHQYXXCX'
      },
      {
        path: '/queryFun/applyProgress',
        title: '申请件进度查询',
        name: 'applyProgress',
        address: '3-4',
        quickCheck: 'SQJJDCX'
      },
      {
        path: '/queryFun/creditCardLimit',
        title: '信用卡额度查询',
        name: 'creditCardLimit',
        address: '3-5',
        quickCheck: 'XYKEDCX'
      },
      {
        path: '/queryFun/creditCardTrans',
        title: '信用卡交易查询',
        name: 'creditCardTrans',
        address: '3-6',
        quickCheck: 'XYKJYCX'
      },
      {
        path: '/queryFun/creditCardBill',
        title: '信用卡账单查询',
        name: 'creditCardBill',
        address: '3-7',
        quickCheck: 'XYKZDCX'
      },
      {
        path: '/queryFun/creditCardInfo',
        title: '信用卡信息查询',
        name: 'creditCardInfo',
        address: '3-8',
        quickCheck: 'XYKXXCX'
      },
      {
        path: '/queryFun/creditCardStatus',
        title: '信用卡状态查询',
        name: 'creditCardStatus',
        address: '3-9',
        quickCheck: 'XYKZTCX'
      },
      {
        path: '/queryFun/mainAttachedCard',
        title: '主附卡关系查询',
        name: 'mainAttachedCard',
        address: '3-10',
        quickCheck: 'ZFKGXCX'
      },
      {
        path: '/queryFun/annualFeeWaiver',
        title: '年费减免查询',
        name: 'annualFeeWaiver',
        address: '3-11',
        quickCheck: 'NFJMCX'
      },
      {
        path: '/queryFun/accountStatus',
        title: '账户状态查询',
        name: 'accountStatus',
        address: '3-12',
        quickCheck: 'ZHZTCX'
      },
      {
        path: '/queryFun/officialCardInfo',
        title: '公务卡信息查询',
        name: 'officialCardInfo',
        address: '3-13',
        quickCheck: 'GWKXXCX'
      },
      {
        path: '/queryFun/cardReplaceHisy',
        title: '换卡历史记录查询',
        name: 'cardReplaceHisy',
        address: '3-14',
        quickCheck: 'HKLSJLCX'
      },
      {
        path: '/queryFun/financialHisy',
        title: '金融历史查询',
        name: 'financialHisy',
        address: '3-15',
        quickCheck: 'JRLSCX'
      },
      {
        path: '/queryFun/creditCardAuth',
        title: '信用卡授权查询',
        name: 'creditCardAuth',
        address: '3-16',
        quickCheck: 'XYKSQCX'
      },
    ]
  },
  {
    path: '/OperatFun',
    title: '操作类功能',
    name: 'OperatFun',
    icon: '#icon-dashboard',
    address: '4',
    children: [
      {
        path: '/OperatFun/tranSMSNotif',
        title: '交易短信通知触发金额',
        name: 'tranSMSNotif',
        address: '4-0',
        quickCheck: 'JYDXTZCFJE'
      },
      {
        path: '/OperatFun/installmentTradeAndReduce',
        title: '分期交易提前结算并减免手续费',
        name: 'installmentTradeAndReduce',
        address: '4-1',
        quickCheck: 'FQJYTQJSBJMSXF'
       
      },
      {
        path: '/OperatFun/customerAndAccountFLAgjust',
        title: '客户、账户五级分类批量调整申请',
        name: 'customerAndAccountFLAgjust',
        address: '4-2',
        quickCheck: 'KHZHWJFLPLTZSQ'
       
      }
    ]
  }
];
export const serviceMockRouters: MockRouterType[] = [
  {
    path: '/service',
    title: '服务类功能',
    name: 'service',
    icon: '#icon-all-fill',
    children: [
      {
        path: '/service/customerInfo',
        title: '客户信息',
        name: 'customerInfo',
      },
      {
        path: '/service/branchTranFlow',
        title: '分行端交易流水',
        name: 'branchTranFlow',
      },
      {
        path: '/service/headOfficeSerHsy',
        title: '总行端服务历史（400）',
        name: 'headOfficeSerHsy',
      },
      {
        path: '/service/interCardTranFlow',
        title: '国际卡上收前交易流水',
        name: 'interCardTranFlow',
      },
      {
        path: '/service/inquirTranFlow',
        title: '本柜员交易流水查询',
        name: 'inquirTranFlow',
      },
      
    ]
  }
];

let routeQuery: Omit<MockRouterType,'name'|'icon'|'children'>[] = [];  //从MockRouterType去'name'|'icon' 的类型定义
// 将 menu 转化成用于导航快速检索的列表
const routeQueryHandle = (original: MockRouterType[]) => {
  original.map((item: MockRouterType, index: number) => {
    if (item.children) {
      routeQueryHandle(item.children);
    } else {
      let obj = {
        title: item.title,
        path: item.path,
        address: item.address,
        quickCheck: item.quickCheck
      };
      routeQuery.push(obj);
    }
  });
  return routeQuery;
};

export const routeQueryAll = routeQueryHandle(originalMockRouters);
