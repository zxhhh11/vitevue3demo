<template>
  <div class="my-service">
    <el-tabs type="border-card">
    <el-tab-pane >
      <template #label>
        <span class="custom-tabs-label">
        我的服务-> 本机构交易流水查询
        </span>
      </template>
     <div v-if="queryBox">
      <div class="tips">我的服务-本机构交易流水查询下：</div>
      <div class="tips">该功能，用于查询当前柜员所在机构的所有柜员交易流水信息。</div>
      <div class="tips">必须选择'开始日期'和'结束日期',且两者之间天数差距不能超过31天</div>
      <div class="tips"> 例如选择的'开始日期'为2011-01-01 ,'结束日期'为2011-01-31,系统将展示 2011-01-01 00:00:00到2011-01-31 23:59:59之间的符合条件记录</div>
      <el-descriptions :column="2" border>
          <el-descriptions-item label="开始日期" label-align="right" align="left"
            > 
            <el-date-picker
              v-model="startDay" style="width:40%"
              type="date"
              placeholder="Pick a day"
              
            />
          </el-descriptions-item>
          <el-descriptions-item label="截至日期" label-align="right" align="left"
            > 
            <el-date-picker
              v-model="endDay" style="width:40%"
              type="date"
              placeholder="Pick a day"
              
            />
          </el-descriptions-item>
          <el-descriptions-item label="交易名称" label-align="right" align="left"
            > 
            <el-input v-model="tradName" placeholder="Please input" style="width:40%"/>
          </el-descriptions-item>
            <el-descriptions-item  label-align="right" align="left" 
              >
            <el-button type="primary" @click="queryClick">提交</el-button>
          </el-descriptions-item>
      </el-descriptions>
     </div>
     <div v-else class="print-div" id="printTable">
      <BaseTable  
            :tableData="tranLists"
            :total="tranLists.length"
            :currentPage="currentPage"
            :hasPagination="true"
            :handleClick="handleClick"
            :isMutiSelect="false"
            @handleCurrent="handleCurrent"
            :newColumns="interCardColumns"
          ></BaseTable>
          <el-button type="primary" @click="printClick(printDom)">打印本页</el-button>
     </div>
    </el-tab-pane>
    
  </el-tabs>
  <BaseModal
        :dialogVisiable="printModalVisiable"
        @hide-dialog="closePrintModal"
        @submit-handle = "printFun"
        cancelText="关闭"
        confirmText="点击打印"
        width="80%"
      > 
   <div  id="customTable">
    <div class="custom-table">
    <div class="print-header">
      <h1>主管查询柜员交易流水报表</h1>
       <h3>打印时间：{{ current }}</h3>
    </div>
   
    <div class="table-main  printPage">
      <table cellpadding="0" cellspacing="1" class="content_border content" id="customTable">
                    <thead>
                        <tr>
                            <th>流水号</th>
                            <th>客户姓名</th>
                            <th>交易卡号</th>
                            <th>交易名称</th>
                            <th>交易开始时间</th>
                            <th>交易结束时间</th>
                            <th>操作员</th>
                            <th>复核员</th>
                            <th>交易结果</th>
                        </tr>
                    </thead>
                   <tbody>

                       <tr v-for="(item,index) in tranLists" :key="index">
                           <td class="link card-no">{{ item.TRADFLOW }}</td>
                           <td>{{ item.CUSTOMERNAME }}</td>
                           <td>{{ item.TRADCARDNO }}</td>
                           <td>{{ item.TRADNAME }}</td>
                           <td>{{ item.TRADSTARTTIME }}</td>
                           <td>{{ item.TRADENDTIME }}</td>
                           <td>{{ item.OPERATOR }}</td>
                           <td>{{ item.RECHECKER }}</td>
                           <td>{{ item.TRADRESULT }}</td>
                       </tr>
                       </tbody>
      </table>
    </div>
   </div>
   </div>
      </BaseModal>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {interCardList,tranList} from '@/utils/data'
import BaseTable from '@/components/common/baseTable/index.vue'
import BaseModal from '@/components/common/modal/index.vue'
import {formatDate} from '@/utils/dates'
import printHtml from "@/utils/printHtml.js"
import {styleContent} from '@/assets/myService'
// import print from 'print-js'
let tranLists = ref(tranList)
let currentPage = ref(1)
let startDay = ref('')
let endDay = ref('')
let tradName = ref('')
let queryBox = ref(true)
let printModalVisiable = ref(false)
const printDom = ref(null)
 let current = formatDate(new Date())
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
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})
const queryClick=()=>{
  queryBox.value = false
}
const handleClick = () => {},
  handleCurrent = (val: any) => {
    //这里没有用Mock
    // this.getHistoryList({ currentPage: val, part: 'branch' })
  },
    interCardColumns = () => {
      return [
      {
        index: 0,
        prop: 'TRADFLOW',
        dataIndex: 'TRADFLOW',
        label: '流水号',
      
      },
      { index: 1, prop: 'CUSTOMERNAME', dataIndex: 'CUSTOMERNAME', label: '客户姓名' },
      { index: 2, prop: 'TRADCARDNO', dataIndex: 'TRADCARDNO', label: '交易卡号' },
      { index: 3, prop: 'TRADNAME', dataIndex: 'TRADNAME', label: '交易名称' },
      { index: 4, prop: 'TRADSTARTTIME', dataIndex: 'TRADSTARTTIME', label: '交易开始时间' }, 
      { index: 5, prop: 'TRADENDTIME', dataIndex: 'TRADENDTIME', label: '交易结束时间' }, 
      { index: 6, prop: 'OPERATOR', dataIndex: 'OPERATOR', label: '操作员' }, 
      { index: 7, prop: 'RECHECKER', dataIndex: 'RECHECKER', label: '复核员' }, 
      { index: 8, prop: 'TRADRESULT', dataIndex: 'TRADRESULT', label: '交易结果',  
      // isLink:true,
      //   onClick:tranResultClick
      }
    ]
  },
  printClick=(dom:any)=>{
    //打印方法1
    // const style = '@page {  } ' +'@media print { .print-div{ padding:8px;background-color:red;line-height:12px } .red{ color:#f00} .green{color:green} .print-test{font-size:30px}' ;
    printModalVisiable.value = true
    
    // let newWindow = window.open("打印页面",'_blank')
    // let printTableH = document.getElementById('printTable')
    // if(printTableH){
    // let docStr = printTableH.innerHTML
    //   console.log(docStr,'docStr')
    // newWindow?.document.write(docStr)
    // newWindow?.document.close()
    // newWindow?.print()
    // newWindow?.close()
    // }
  },
  printFun=()=>{
    //打印方法2  这个较为好用 但是目前打印的页面没法包含水印  还有如果表格列过多时可能出现表格边框线缺失
      let printTableH = document.getElementById('customTable')
        if(printTableH){
        let docStr = printTableH.innerHTML
          console.log(docStr,'docStr')
        
        printHtml(docStr,styleContent)//styleContent 为必传项 若是打印页面中元素styleContent 样式有定义 会优先用这里面的样式
    }
  },
  closePrintModal=()=>{
    printModalVisiable.value = false
  }

</script>
<style>
.tips{
  margin: 6px;
}


.table-main{
    padding: 20px 0;
}
.table-main table{
    border-spacing: 0;
    border-top: 1px solid #2a84c3;
    border-left: 1px solid #2a84c3;
    width: 98%;
    margin:0 1%
}
.table-main tbody tr td{
    font-size: 9pt;
    text-align: center;
    background: #fff;
    padding: 6px 10px;
    color: #333;
    border-bottom: 1px solid #2a84c3;
    border-right: 1px solid #2a84c3;

}
.table-main tbody tr:hover td{
    background: #fbfab5;
}
.table-main tbody tr td.link{
    color: #005590;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 600;
}
.table-main tbody tr td.link:hover{
    color: #147fcd;
}
.custom-table thead tr th{
    padding: 6px 10px;
    color: #005590;
    font-size: 9pt;
    border-bottom: 1px solid #2a84c3;
    border-right: 1px solid #2a84c3;
}
.custom-table thead tr{
    background: #f7f9fd;
}
.custom-table .print-header{
  text-align: center;
}
.my-service .el-dialog__header{
  display: none;
}
/* 打印加水印 水印内容要自定义*/
.printPage { 
  position: relative; 
} 
.printPage:before {
position: absolute;z-index: 1000; content: 'xx水印'; top:30%; right: 30%; font-size: 48px; opacity: 0.5; transform: rotate(30deg);
}
.printPage:after {
position: absolute;z-index: 1000; content: 'xx水印'; bottom:30%; left: 25%; font-size: 48px; opacity: 0.5;transform: rotate(30deg);
}
/* 打印加水印 */
</style>