<template>
  <div>
    inquireCustomerInfo
    <div> 登录验证--{{ loginStatus }}</div>
    <div> token验证---{{ tokenTest }}</div>

    <el-button type="primary" @click="changeCustomer">修改用户</el-button>

    <div class="list">
      <CustomList :list="customerInfoData" :column="2" :datas="customerInfo" title="列表使用演示"></CustomList>
    </div>
    <br>
    <div class="custom-form">
      <div class="card-title">快速查询</div>
      <el-descriptions :column="2" class="query-box" size="small" border>
        <el-descriptions-item label="姓名" label-class-name="my-label" content-class-name="my-content">
          <el-input placeholder="请在此处输入用户姓名" size="small" v-model="state.name" clearable>
          </el-input>
        </el-descriptions-item>
        <el-descriptions-item label="卡号">
          <el-input placeholder="请在此处输入信用卡号" size="small" v-model="state.creditCardNo" clearable>
          </el-input>
        </el-descriptions-item>
        <el-descriptions-item label="手机号">
          <el-input placeholder="请在此处输入手机号" size="small" v-model="state.phoneNo" clearable>
          </el-input>
        </el-descriptions-item>
        <el-descriptions-item label="证件号">
          <el-input placeholder="请在此处输入证件号" size="small" v-model="state.idNo" clearable>
          </el-input>
        </el-descriptions-item>
      </el-descriptions>
    </div>
    <div class="custom-table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useStore from '@/stores/index'
import { storeToRefs } from 'pinia';
import { customerInfoData } from '@/utils/data';
import CustomList from '@/components/common/customList/index.vue';
let state = ref({
  name: '',
  creditCardNo: '',
  phoneNo: '',
  idNo: '',
});
const currentPage = ref(1)
const loginStatus = ref('')
const tokenTest = ref('')
const { counterStore, userStore } = useStore()
const { user, customer } = storeToRefs(userStore)
const { changeUser } = userStore
const customerInfo = [
  {
    CIFCMNO: '582995',
    CUSTOMERNO: '86188216708',
    CMNOTYPE: '客户号类型',
    GRADE: '1',
    CMTYPE: '个人',
    LANG: '简体中文',
    CORPORATION: '个人',
    MARITALSTATUS: '已婚',
    WORKFAXNO: '工作传真号码',
    EDUCATION: '本科',
    DUTY: '其它',
    NATIONALITY: '中国',
    IDENTIFY: '一级敏感要客（A）',
    VIPIDENTIFY: '财富管理',
    VIPVALIDITY: '2021-03-14——2050-12-31',
    FAMILYNO: '3',
    EMAIL: '***********@166.com',
    SECURITYIDENTIFY: 'MMME'
  }
];
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

const changeCustomer = () => {
  console.log(customer, 'customer')
  changeUser('钱小二')
}
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  let params = { "userid": "666778", "cradno": "616161616161616161" }
  console.log('test ......')
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
  // axios.post('http://22.188.151.161:81/card/accountDetail',{"crcrdMgtAccno":"1"}).then(res=>{
  //   console.log(res,'res /card/accountDetail')
  // })
})
watchEffect(() => {
})


</script>
<style scoped>
.my-label {
  background: var(--el-color-success-light-9);
}

.my-content {
  background: var(--el-color-danger-light-9);
}

.list {
  width: 1000px;
  margin-bottom: 20px;
}

.custom-form {
  width: 1000px;
  margin-bottom: 20px;
}

.custom-table {
  width: 1000px;
}
</style>