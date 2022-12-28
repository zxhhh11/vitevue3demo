import ajax from '@/utils/ajax';

// const serverPre = ajax.serverUrlMock;
const serverPre = ajax.serverUrl;
// const serverName = '/progress';
const serverName = '/ccai';
// 页面模板列表查询
export type ParamsType = {
  [key: string]: any;
};
export async function getProgressListAPI(params: ParamsType) {
  return ajax.get(serverPre(`${serverName}/progress`), params);
}
