<template>
  <div >
    <el-tabs type="border-card">
    <el-tab-pane >
      <template #label>
        <span class="custom-tabs-label">
         总行端(400)服务会话列表 
        </span>
      </template>
     <div>
      <BaseTable
            :tableData="sessionLists"
            :total="sessionLists.length"
            :currentPage="currentPage"
            :hasPagination="true"
            :handleClick="handleClick"
            :isMutiSelect="false"
            @handleCurrent="handleCurrent"
            :newColumns="columns"
          ></BaseTable>
       
     </div>
    </el-tab-pane>
    
  </el-tabs>
  <BaseModal
        :dialogVisiable="tradListVisiable"
        @hide-dialog="hideDialog"
        title="总行端(400交易列表)"
        cancelText="关闭"
        :hasConfirm="false"
        width="60%"
      > 
       <!-- 第一种list 渲染方式 list 和data 分别定义 支持插槽 支持content 加标签 但是可能不支持太过复杂的list  -->
       <BaseTable
            :tableData="tradLists"
            :total="tradLists.length"
            :currentPage="tradCurrentPage"
            :hasPagination="true"
            :handleClick="handleClick"
            :isMutiSelect="false"
            @handleCurrent="handleCurrent"
            :newColumns="tradColumns"
          ></BaseTable>
       
  </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {sessionList,tradList} from '@/utils/data'
import BaseTable from '@/components/common/baseTable/index.vue'
import BaseModal from '@/components/common/modal/index.vue'

let currentPage = ref(1)
let tradCurrentPage = ref(1)
let tradListVisiable = ref(false)
let sessionLists = ref(sessionList)
let tradLists = ref(tradList)
/**
* 路由对象
*/
const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();
//console.log('1-开始创建组件-setup')

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})

const handleClick = () => {},
  handleCurrent = (val: any) => {
    //这里没有用Mock
    // this.getHistoryList({ currentPage: val, part: 'branch' })
  },
  hideDialog=()=>{
    tradListVisiable.value= false
  },
columns = () => {
    return [
      {
        index: 0,
        prop: 'CALLOUTNO',
        dataIndex: 'CALLOUTNO',
        label: '呼叫编号',
        isLink:true,
        onClick:callNoClick
      },
      { index: 1, prop: 'ATTENDANT', dataIndex: 'ATTENDANT', label: '坐席员' },
      { index: 2, prop: 'CALLTIME', dataIndex: 'CALLTIME', label: '来电时间' },
      { index: 3, prop: 'CALLNO', dataIndex: 'CALLNO', label: '来电号码' }, 
      { index: 4, prop: 'PROBLEMDESC', dataIndex: 'PROBLEMDESC', label: '问题描述' }
    ];
  },
  tradColumns = () => {
    return [
      {
        index: 0,
        prop: 'TRADSTARTTIME',
        dataIndex: 'TRADSTARTTIME',
        label: '交易开始时间'
      },
      { index: 1, prop: 'TRADCARDNO', dataIndex: 'TRADCARDNO', label: '交易卡号' },
      { index: 2, prop: 'FUNCTION', dataIndex: 'FUNCTION', label: '功能名称' },
      { index: 3, prop: 'TRADRETURNRESULT', dataIndex: 'TRADRETURNRESULT', label: '交易返回结果' }
    ];
  },
  callNoClick=()=>{
    tradListVisiable.value= true
  }
</script>
<style scoped>
</style>