// import request from '@/utils/request'

import axios from "axios";

// // 获取路由
// export const getRouters = () => {
//   return request({
//     url: '/getRouters',
//     method: 'get'
//   })
// }
export async function getRouters() {
    return axios.get('/api/getRouters')
}