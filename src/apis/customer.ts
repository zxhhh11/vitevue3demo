// import request from '@/utils/request'
import ajax from '@/utils/ajax'
import axios from "axios";

// // 获取路由
// export const getRouters = () => {
//   return request({
//     url: '/getRouters',
//     method: 'get'
//   })
// }
export async function getCustomers() {
    return ajax.get('/api/queryCustomer')
}