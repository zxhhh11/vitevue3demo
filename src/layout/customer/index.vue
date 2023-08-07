<template>
  <div>
    <el-descriptions class="customer-info" :column="4" border>
      <el-descriptions-item label="客户姓名：" label-align="right" align="center" label-class-name="my-label"
        class-name="my-content" width="150px">{{ CUSTOMERINFO.CUSTOMERNAME }}
        <span class="filter-icon" @click="filterClick">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-100"></use>
          </svg>
        </span>
      </el-descriptions-item>
      <el-descriptions-item label="证件号码：" label-align="right" align="center">{{
        CUSTOMERINFO.IDNO
      }}</el-descriptions-item>
      <el-descriptions-item label="卡号：" label-align="right" align="center">{{
        CUSTOMERINFO.CARDNO
      }}</el-descriptions-item>
      <el-descriptions-item label="客户号：" label-align="right" align="center">
        <el-tag size="small">{{ CUSTOMERINFO.CUSTOMERNO }}</el-tag>
      </el-descriptions-item>

    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCommonStore } from '@/stores/common'
import { storeToRefs } from 'pinia';
import { useCustomerStore } from '@/stores/customer'
const router = useRouter()
const route = useRoute();
const commonStore = useCommonStore()
const customerStore = useCustomerStore()
const { editableTabsVal } = storeToRefs(commonStore)
const { CUSTOMERINFO } = storeToRefs(customerStore)
const { chgEditableTabsVal } = commonStore
const filterClick = () => {
  if (editableTabsVal.value !== '6') {
    chgEditableTabsVal('6')
  }
  router.push('/filter')
}

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(() => {
})


</script>
<style scoped>
.filter-icon {
  cursor: pointer;
  font-size: 28px;
  vertical-align: middle;
  margin-left: 10px;
  color: #2eafe9;
}

.filter-icon:hover {
  color: #0779ad;
}

.customer-info {
  margin-bottom: 10px;
}
</style>