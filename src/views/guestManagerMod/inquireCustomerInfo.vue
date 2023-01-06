<template>
  <div >
    <!-- <el-descriptions :column="3" border>
    <el-descriptions-item
      label="客户姓名:"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      width="150px"
      >{{ customer.customerName }}</el-descriptions-item
    >
    <el-descriptions-item label="证件类型:" label-align="right" align="center"
      >{{ customer.IDtype }}</el-descriptions-item
    >
    <el-descriptions-item label="证件号码:" label-align="right" align="center"
      >{{ customer.IDNo }}</el-descriptions-item
    >
    <el-descriptions-item label="卡号:" label-align="right" align="center">
      <el-tag size="small">{{ customer.cardNo }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="客户号:" label-align="right" align="center">
      <el-tag size="small">{{ customer.customerNo }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="客户类型:" label-align="right" align="center">
      <el-tag size="small">{{ customer.customerType }}</el-tag>
    </el-descriptions-item>
  </el-descriptions> -->
  inquireCustomerInfo
<div>  登录验证--{{ loginStatus }}</div>
<div> token验证---{{ tokenTest }}</div>

<el-button type="primary" @click="changeCustomer">修改用户</el-button>
<el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useStore  from '@/stores/index'
import { storeToRefs } from 'pinia';
const loginStatus = ref('')
const tokenTest = ref('')
const { counterStore ,userStore} = useStore()
const {user,customer} = storeToRefs(userStore)
const {changeUser} = userStore
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
/**
* 路由对象
*/
const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
const data = reactive({})
const changeCustomer = ()=>{
  console.log(customer,'customer')
  changeUser('钱小二')
}
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  let params={"userid":"666778","cradno":"616161616161616161"}
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
  // axios.post('/login/queryByCard',params).then(res=>{
  //   console.log(res.data,'res token')
  //   if(res.data.status==='200'){
  //     loginStatus.value = '登录成功'+res.data.data.token
  //     let token = res.data.data.token
  //     // let data = {token}
  //     console.log(data,'data')
  //     axios.post('/login/testCai',{token}).then(response=>{
  //       console.log(response,'response')
  //       tokenTest.value = response.data.data
  //     })
  //   }
  // })
  // axios.post('/api/card/accountDetail',{"crcrdMgtAccno":"1"}).then(res=>{
  //   console.log(res,'res /card/accountDetail')
  // })
  axios.post('http://22.188.151.161:81/card/accountDetail',{"crcrdMgtAccno":"1"}).then(res=>{
    console.log(res,'res /card/accountDetail')
  })
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped>
.my-label {
  background: var(--el-color-success-light-9);
}
.my-content {
  background: var(--el-color-danger-light-9);
}
</style>