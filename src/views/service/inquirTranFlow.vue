<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            本柜员交易流水查询
          </span>
        </template>
        <div>
          <el-descriptions :column="1" border v-if="querybox">
            <el-descriptions-item label="交易日期" label-align="right" align="left">
              <el-date-picker v-model="tradDay" style="width:40%" type="date" placeholder="Pick a day" />
            </el-descriptions-item>
            <el-descriptions-item label="客户卡号" label-align="right" align="left">
              <el-input v-model="customerCardNo" placeholder="Please input" style="width:40%" />
            </el-descriptions-item>
            <el-descriptions-item label="流水号" label-align="right" align="left">
              <el-input v-model="serialNo" placeholder="Please input" style="width:40%" />
            </el-descriptions-item>
            <el-descriptions-item label-align="right" align="left">
              <el-button type="primary" @click="queryClick">提交</el-button>
            </el-descriptions-item>
          </el-descriptions>
          <BaseTable v-else :tableData="tranLists" :total="tranLists.length" :currentPage="currentPage"
            :hasPagination="true" :handleClick="handleClick" :isMutiSelect="false" @handleCurrent="handleCurrent"
            :newColumns="columns"></BaseTable>

        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { tranList } from '@/utils/data'
import BaseTable from '@/components/common/baseTable/index.vue'

let tranLists = ref(tranList)
let querybox = ref(true)
let currentPage = ref(1)
let tradDay = ref('')
let serialNo = ref('')
let customerCardNo = ref('')
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
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(() => {
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})
const handleClick = () => { },
  handleCurrent = (val: any) => {
    //这里没有用Mock
    // this.getHistoryList({ currentPage: val, part: 'branch' })
  },
  columns = () => {
    return [
      {
        index: 0,
        prop: 'TRADFLOW',
        dataIndex: 'TRADFLOW',
        label: '交易流水',

      },
      { index: 1, prop: 'TRADCARDNO', dataIndex: 'TRADCARDNO', label: '交易卡号' },
      { index: 2, prop: 'TRADNAME', dataIndex: 'TRADNAME', label: '交易名称' },
      { index: 3, prop: 'TRADSTARTTIME', dataIndex: 'TRADSTARTTIME', label: '交易开始时间' },
      { index: 4, prop: 'TRADENDTIME', dataIndex: 'TRADENDTIME', label: '交易结束时间' },
      { index: 5, prop: 'OPERATOR', dataIndex: 'OPERATOR', label: '操作员' },
      { index: 6, prop: 'RECHECKER', dataIndex: 'RECHECKER', label: '复核员' },
      {
        index: 7, prop: 'TRADRESULT', dataIndex: 'TRADRESULT', label: '交易结果',
        isLink: true,
        onClick: tranResultClick
      }
    ]
  },
  tranResultClick = () => {

  },
  queryClick = () => {
    querybox.value = false
  }
</script>
<style scoped>

</style>