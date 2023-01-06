import axios from 'axios';
import type {AxiosRequestConfig} from  'axios';
// import { getSessionStorage } from './storage';

// axios.defaults.headers = {
//   'X-Requested-With': 'XMLHttpRequest'
// };
axios.defaults.timeout = 1000 * 60 * 10;

function requestHandle(params: AxiosRequestConfig<any>) {
  return new Promise((resolve, reject) => {
    axios(params)
      .then((res) => {
        if (res.data) {
          console.log(res, 'res ajax');
          // if (res.data.status === 200) { //TODO: mock
          if (res.data.status === '000000') {
            resolve({
              // data: res.data.data ? res.data.data : null // TODO: 后续接口返回数据形式固定后需再修改
              data: res.data ? res.data : null
            });
          } else if (res.status === 20122) {
            reject(new Error('请求有误，请核对信息后重试'));
          } else {
            if (res.status === 20121) {
              try {
                document.location.replace('/login');
              } catch (err) {
                console.log(err);
              }
            } else {
              resolve({
                error: {
                  code: res.data.status,
                  message: res.data.message
                }
              });
            }
          }
        } else {
          reject(new Error('没有返回数据'));
        }
      })
      .catch((err) => {
        resolve({
          error: {
            code: 500,
            message: `${params.url}: ${err.message}`
          }
        });
      });
  });
}

function queryString(url: string | string[], query?: { [x: string]: string }) {
  const str = [];
  for (const key in query) {
    if (query[key]) {
      str.push(key + '=' + query[key]);
    }
  }
  const paramStr = str.join('&');
  return paramStr
    ? `${url}${url.indexOf('?') > -1 ? '&' : '?'}${paramStr}`
    : url;
}

function getHeaders(options: any) {
  const headers = Object.assign(
    {
      'Content-Type': 'application/json'
    },
    options
  );

  // headers.Authentication =
  //   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJtZWV0aW5nIiwiaXNzIjoiS3lpYmlKUylPTyIsIm9wcklkIjoiMTAwNDA1NzgiLCJleHAiOjE2NDMyNjk1NTYsInVzZXJJZCI6Im1hb3h5LWIiLCJpYXQiOjE2NDMyNjY5NjR9.-GGG9KivBh9xvi6xcqJjG5JHReA0qpXj1PR3fL_4yTY';
  // const token = getSessionStorage('auth_token');
  // if (token) {
  //   headers.Authentication = token;
  // }
  return headers;
}

export default {
  post: function (url: string, params?: any, op?: any) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params,
      headers: getHeaders(op)
    });
  },
  get: function (
    url: string | string[],
    // url: string,
    params?: { [x: string]: string } | {},
    op?: any
  ) {
    return requestHandle({
      method: 'get',
      url: queryString(url, params) as string,
      headers: getHeaders(op)
    });
  },
  serverUrl(apiName: string) {
    // return `/api${apiName}`; //LiuBo
    return apiName; //mock
  },
  serverUrlMock(apiName: string) {
    return apiName;
  },
  queryString
};
