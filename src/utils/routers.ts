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
    path: '/test',
    title: '系统首页',
    name: 'test',
    icon: '#icon-home1',
    address: '0',
    quickCheck: 'XTSY',
    children: [
      {
        path: '/test/dashboard',
        title: '仪表盘',
        name: 'dashboard',
        address: '0-0',
        quickCheck: 'YBP'
      },
      {
        path: '/test/testData',
        title: '数据测试',
        name: 'data',
        address: '0-1',
        quickCheck: 'SJCE'
      }
    ]
  },
  {
    path: '/module1',
    title: '演示模块一',
    name: 'module1',
    icon: '#icon-dashboard',
    children: [
      {
        path: '/module1/subModule1',
        title: '模块一子模块',
        name: 'subModule1',
        address: '1-0',
        quickCheck: 'MKYZMK'
      },
      {
        path: '/module1/subModule2',
        title: '封装组件演示',
        name: 'subModule2',
        icon: '#icon-dashboard',
        children: [
          {
            path: '/module1/subModule2/table',
            title: '表格演示',
            name: 'table',
            address: '1-1',
            quickCheck: 'BGYS'
          },
          {
            path: '/module1/subModule2/list',
            title: '列表演示',
            name: 'list',
            address: '1-2',
            quickCheck: 'LBYS'
          }
        ]
      }
    ]
  },
  {
    path: '/bussiness',
    title: '业务',
    name: 'bussiness',
    icon: '#icon-icons_bussiness',
    children: [
      {
        path: '/bussiness/billQuery',
        title: '账单查询',
        name: 'billQuery',
        address: '2-0',
        quickCheck: 'ZDCX'
      },
      {
        path: '/bussiness/progressQuery',
        title: '申请进度查询',
        name: 'progressQuery',
        address: '2-1',
        quickCheck: 'SQJDCX'
      },
      {
        path: '/bussiness/financialHy',
        title: '金融历史',
        name: 'financialHy',
        address: '2-2',
        quickCheck: 'JRLS'
      },
      {
        path: '/bussiness/accountStatus',
        title: '账户状态查询',
        name: 'accountStatus',
        address: '2-3',
        quickCheck: 'ZHZTCX'
      }
    ]
  },
  {
    icon: '#icon-echarts_line',
    title: '图表统计',
    path: '/charts',
    name: 'charts',
    address: '3',
    quickCheck: 'TBTJ'
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
