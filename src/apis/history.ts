// import QS from 'qs';

import ajax from '@/utils/ajax';
import axios from 'axios';

// const serverPre = ajax.serverUrlMock;
const serverPre = ajax.serverUrl;
const serverName = '/ccai';
//ccai/202010
// 页面模板列表查询
export type ParamsType = {
  [key: string]: any;
};
export async function getHistoryListAPI(params: ParamsType) {
  return ajax.get(serverPre(`${serverName}/list`), params);
}
// export async function getFinancialListAPI(params: any) {
//   return ajax.get(serverPre(`${serverName}/financial/list`), params);
// }
export async function getFinancialListAPI(params: ParamsType) {
  return ajax.post(serverPre(`${serverName}/202023`), params);
}
export async function setSTLTYPE(params: ParamsType) {
  return ajax.post(serverPre(`${serverName}/201036`), params);
}
// export async function getTranListAPI(params: any) {
//   return ajax.get(serverPre(`/ccai/202010`), params);
// }
// const config = {
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//     'Access-Control-Allow-Origin': '*'
//   }
// };
export async function getTranListAPI(params: ParamsType) {
  // console.log(serverPre(`/ccai/202010`), 'serverPre');
  return ajax.post(serverPre(`${serverName}/202010`), params);
  // return axios.get(serverPre(`/ccai/202010`), {
  //   params: {
  //     FUNCODE: '202010',
  //     TRANS_CARDNO: '111111',
  //     TRANS_ACTNUM: '22222'
  //   },
  //   // paramsSerializer: function (params) {
  //   //   return QS.stringify(params, { arrayFormat: 'brackets' });
  //   // },
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // });
  // return axios({
  //   url: serverPre(`/ccai/202010`),
  //   method: 'get',
  //   params: {
  //     data: params //传递的对象
  //   },
  //   paramsSerializer: function (params) {
  //     return QS.stringify(params, { arrayFormat: 'indices' });
  //   }
  //   // data: { searchParams: JSON.stringify(params) }
  // }).then((res: any) => {
  //   console.log(res, 'res in get api 2');
  // });
}
