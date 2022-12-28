import ajax from '@/utils/ajax';
const serverPre = ajax.serverUrlMock;
const serverName = '/auth-center';
const editPwdServerName = '/auth-management/user';
export type ParamsType = {
  [key: string]: any;
};
export async function handleLogin(data: ParamsType) {
  return ajax.post(serverPre(`${serverName}/jwt/login`), data);
}

export async function fetchPermissions() {
  return ajax.post(serverPre(`${serverName}/base/resource/list`));
}

export async function logout() {
  return ajax.get(serverPre(`${serverName}/jwt/logout`));
}

export async function editPassword(data: ParamsType) {
  return ajax.post(serverPre(`${editPwdServerName}/password/updatePwd`), data);
}

// import { ContentType, Method, RequestParams } from 'axios-mapper';
// import { UserInfoModel, Users } from '@/model/userModel';

// import { LoginModel } from '@/views/user-manager/login/model/loginModel';

// import { RootObject } from '@/model/rootObject';
// import https from '@/utils/https';

export const loginRequest = () => {
  //userInfo: RequestParams
  // return https(false).request<RootObject<LoginModel>>(
  //   'user/login',
  //   Method.POST,
  //   userInfo,
  //   ContentType.json
  // );
  return new Promise((resolve) => {
    resolve(true);
  });
};

export const userInfoRequest = () => {
  return new Promise((resolve) => {
    resolve(true);
  });
  // return https().request<RootObject<UserInfoModel>>(
  //   'user/userInfo',
  //   Method.GET,
  //   undefined,
  //   ContentType.form
  // );
};

export const getUsers = () => {
  //user: any
  return new Promise((resolve) => {
    resolve(true);
  });
  // return https().request<RootObject<Users>>(
  //   'user/getUsers',
  //   Method.GET,
  //   user,
  //   ContentType.form
  // );
};
