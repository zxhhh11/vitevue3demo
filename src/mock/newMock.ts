
import type { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs';

export default [
  {
    url: '/api/getUserInfo', // 注意，这里只能是string格式
    method: 'get',
    response: () => {
      return 'hello world and get mockData';
    },
  },
  {
    url: '/api/hhh/getUserInfo', // 注意，这里只能是string格式
    method: 'get',
    timeout: 2000,// 设置超时时间
    response: () => { //响应数据（JSON）
      return {
        code: 200,
        message: 'ok',
        response: () => {
          //批量模拟随机数
          let data = [];
          for (let i = 1; i < 301; i++) {
            let obj = Mock.mock({
              'rows|1-100': 100,
            });
            data.push(obj.rows);
          }
          console.log(data);
          return data;
        },
      }
    },
  },
  {
    url: '/api/text',
    method: 'post',

    rawResponse: async (req, res) => { // 响应（非JSON）
      let reqbody = '';
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  }
] as MockMethod[]; // 定义数据格式