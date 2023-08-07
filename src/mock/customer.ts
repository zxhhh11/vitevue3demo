import type { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs';

export const customerInfoDatas = [
    {
        CUSTOMERNAME: '一二三',
        CUSTOMERGENDER: '男',
        IDTYPE: '身份证',
        VIPIDENTIFY: '一般客户',
        IDNO: '11154874888888',
        PHONENO: '12345678925',
        MARITALSTATUS: '已婚',
        IDENTIFY: '0',
        CARDNO: '156588995236542',
        CUSTOMERNO: '0265821'
    },
    {
        CUSTOMERNAME: '四五六',
        CUSTOMERGENDER: '女',
        IDTYPE: '身份证',
        VIPIDENTIFY: 'VIP客户',
        IDNO: '333325511888888',
        PHONENO: '566522398',
        MARITALSTATUS: '未婚',
        IDENTIFY: '1',
        CARDNO: '111897955465588888',
        CUSTOMERNO: '55526898'
    }
]
export default [
    {
        url: '/api/queryCustomer',
        method: 'get',
        response: () => {
            return {
                code: 200,
                status: '000000',
                message: 'ok',
                data: customerInfoDatas // data 中返回的数据最好在此文件夹中定义
            };

        },
    }
] as MockMethod[]; // 定义数据格式