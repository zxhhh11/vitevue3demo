<template>
  <div>
    <div class="custom-form">

      <el-radio-group v-model="condition" class="ml-4">
        <el-descriptions :column="1" class="query-box" size="small" border>
          <el-descriptions-item>
            <template #label>
              <el-radio label="1" size="small">按卡号查询</el-radio>
            </template>
            <el-input v-model="cardNo" placeholder="请在此处输入卡号" aria-autocomplete="none" clearable @focus="iptFocus('1')">
            </el-input>
          </el-descriptions-item>
          <el-descriptions-item label="">
            <template #label>
              <el-radio label="2" size="small">按证件号码查询</el-radio>
            </template>
            <el-input @focus="iptFocus('2')" placeholder="请在此处输入证件号码" v-model="idNo" clearable></el-input>
          </el-descriptions-item>
          <el-descriptions-item label="">
            <template #label>
              <el-radio label="3" size="small">按手机号码查询</el-radio>
            </template>
            <el-input @focus="iptFocus('3')" placeholder="请在此处输入手机号码" v-model="phoneNo" clearable></el-input>
          </el-descriptions-item>
          <el-descriptions-item label="">
            <div><el-button type="primary" @click="queryCustomer">查询</el-button></div>
          </el-descriptions-item>
        </el-descriptions>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCommonStore } from '@/stores/common'
import { storeToRefs } from 'pinia';
import { useCustomerStore } from '@/stores/customer';

const customerStore = useCustomerStore()
const commonStore = useCommonStore()
const { editableTabsVal } = storeToRefs(commonStore)
const { chgEditableTabsVal } = commonStore
const { clearCustomerInfo, queryCustomers } = customerStore
const condition = ref("1")
const cardNo = ref('')
const idNo = ref('')
const phoneNo = ref('')
const iptFocus = (id: string) => {
  console.log(223, id)
  condition.value = id
}

/**
* 路由对象
*/
const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();


onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(() => {
})
const queryCustomer = () => {
  //const a = Math.floor(Math.random() * 100) % 2;
  console.log(condition.value, 'condition.value')
  chgEditableTabsVal('0');
  queryCustomers(condition.value).then(response => {
    console.log(response, 'response')
  })
  // if (a === 0) {
  //   clearCustomerInfo()
  // }


}
</script>
<style>
.custom-form .el-descriptions .el-input {
  margin-right: 20px;
}
</style>