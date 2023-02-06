<template>
  <div >
    <el-tabs type="border-card">
    <el-tab-pane >
      <template #label>
        <span class="custom-tabs-label">
         分行端交易流水 
        </span>
      </template>
     <div>
      <el-descriptions :column="2" border>
          <el-descriptions-item label="卡列表" label-align="right" align="left"
            > 
            <el-select v-model="value" class="m-2" placeholder="Select" size="large">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-descriptions-item>
            <el-descriptions-item label="备注信息" label-align="right" align="left" label-class-name="hide-label"
              >
            <el-button type="primary">查询</el-button>
          </el-descriptions-item>
      </el-descriptions>
      <BaseTable
            :tableData="tranLists"
            :total="tranLists.length"
            :currentPage="currentPage"
            :hasPagination="true"
            :handleClick="handleClick"
            :isMutiSelect="false"
            @handleCurrent="handleCurrent"
            :newColumns="branchColumns"
          ></BaseTable>
    </div>
    </el-tab-pane>
    <el-tab-pane >
      <template #label>
        <span class="custom-tabs-label">
         分行端服务会话列表
        </span>
      </template>
     <div>
      分行端服务会话列表
      
       
     </div>
    </el-tab-pane>
    
  </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {tranList} from '@/utils/data'
import BaseTable from '@/components/common/baseTable/index.vue'


let currentPage = ref(1)
const value = ref('')
let tranLists = ref(tranList)
const options = [
  {
    value: '',
    label: '全部',
  },
  {
    value: '12345',
    label: '12345',
  },
  {
    value: '23456',
    label: '23456',
  },
  {
    value: '34567',
    label: '34567',
  },
  {
    value: '45678',
    label: '45678',
  }
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

const handleClick = () => {},
  handleCurrent = (val: any) => {
    //这里没有用Mock
    // this.getHistoryList({ currentPage: val, part: 'branch' })
  },
   branchColumns = () => {
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
      { index: 7, prop: 'TRADRESULT', dataIndex: 'TRADRESULT', label: '交易结果',  
      isLink:true,
        onClick:tranResultClick
      }
    ]
  },
  tranResultClick=()=>{

  }
  onBeforeMount(() => {
    //console.log('2.组件挂载页面之前执行----onBeforeMount')
  })
  onMounted(() => {
    //console.log('3.-组件挂载到页面之后执行-------onMounted')
  })
  watchEffect(()=>{
  })
</script>
<style scoped>
</style>