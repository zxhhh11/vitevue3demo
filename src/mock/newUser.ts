import type { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs';
export default [
    {
        url: '/auth-center/jwt/login',
        method: 'post',
        // rawResponse: async (req, res) => { // 响应（非JSON）
        //     console.log(req,res,'res')
        //   let reqbody = '';
        //   await new Promise((resolve) => {
        //     req.on('data', (chunk) => {
        //       reqbody += chunk;
        //     });
        //     req.on('end', () => resolve(undefined));
        //   });
        //   res.setHeader('Content-Type', 'text/plain');
        //   res.statusCode = 200;
        //   console.log(req,res,'res222')
        //   res.end(`hello, ${reqbody}`);
        // },
        response: () => {
            
           return  {
                status: 200,
                message:'success',
                data: {
                  state: 20101,
                  accessToken:'longtimenoseeIamdyingtoseeyou',
                  // menuTree: getMenu(),
                  userInfo: {
                    role: 'admin',
                    name: 'admin',
                  },
                },
              }
          },
    }
] as MockMethod[
    
]; // 定义数据格式