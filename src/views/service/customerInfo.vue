<template> 
 <div class="customer-info-box"> 
  <el-tabs type="border-card">
    <el-tab-pane >
      <template #label>
        <span class="custom-tabs-label">
          <span>客户信息 </span>
          <el-button
     @click="showDetail('客户详细信息1')"
      key="primary"
      type="primary"
      link
      >[详细]</el-button
    >
         
        </span>
      </template>
     <div>
      <CustomList
          :list="customerInfoList"
          :column="4"
          :datas="customerInfoDatas"
        >
      </CustomList>
       
     </div>
    </el-tab-pane>
    
  </el-tabs>
  <el-tabs type="border-card">
    <el-tab-pane >
      <template #label>
        <span class="custom-tabs-label">
         卡信息列表 
        </span>
      </template>
     <div>
      <BaseTable
            :tableData="cardLists"
            :total="listTotal"
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
  <el-tabs type="border-card">
    <el-tab-pane >
      <template #label>
        <span class="custom-tabs-label">
         账户信息列表 
        </span>
      </template>
     <div>
      <BaseTable
            :tableData="accountLists"
            :total="accountListTotal"
            :currentPage="accountCurrentPage"
            :hasPagination="true"
            :handleClick="handleClick"
            :isMutiSelect="false"
            @handleCurrent="handleCurrent"
            :newColumns="accountColumns"
          ></BaseTable>
       
     </div>
    </el-tab-pane>
    
  </el-tabs>
 
  <BaseModal
        :dialogVisiable="customerDetailVisiable"
        @hide-dialog="hideCardDialog"
        :title="title"
        cancelText="关闭"
        :hasConfirm="false"
        width="60%"
      > 
       <!-- 第一种list 渲染方式 list 和data 分别定义 支持插槽 支持content 加标签 但是可能不支持太过复杂的list  -->
      <CustomList
          :list="commonlist"
          :column="3"
          :datas="commondatas"
        >
      </CustomList>
  </BaseModal>
  <BaseModal
      :dialogVisiable="cardVisiable"
      @hide-dialog="hideCardRemarkDialog"
      title="卡片备注信息"
      width="60%"
      :showFooter="false"
    >
    <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="NOTEFILLER" label="备注填写人"  />
    <el-table-column prop="FILLTIME" label="填写时间"  />
    <el-table-column prop="NOTEINFO" label="备注信息" width="280"/>
    <el-table-column prop="CAUSETYPE" label="冻结/解冻原因类型" />
    <el-table-column prop="APPLYORGANREMARK" label="申请机构备注栏" />
  </el-table>
  <el-descriptions :column="1" border>
    <el-descriptions-item label="卡号" label-align="right" align="left"
      >6259061121339689</el-descriptions-item>
    <el-descriptions-item label="备注信息" label-align="right" align="left"
      >
       <el-input
    v-model="NOTEINFO"
    :rows="2"
    style="width:60%"
    type="textarea"
    placeholder="Please input"
  />
</el-descriptions-item>
    <!-- label-class-name="hide-label" -->
    <el-descriptions-item  label-align="right" align="left" 
      >
       <el-button type="primary">添加</el-button>
       <el-button @click="hideCardRemarkDialog">关闭</el-button>
      </el-descriptions-item
    >
  </el-descriptions>
   
    
    </BaseModal>
    <BaseModal
        :dialogVisiable="accoutDetailVisiable"
        @hide-dialog="hideaccountDialog"
        title="账户详细信息"
        cancelText="关闭"
        :hasConfirm="false"
        width="60%"
      > 
       <!--  另一种 list 遍历方式这种list和data在同一数组中 且这种方式可扩展性强 -->
      <el-descriptions :column="3" size="small" border>
        <template v-for="(item, key) in accountDetail2" :key="key">
          <el-descriptions-item
            :span="Number(item.span) ? Number(item.span) : 1"
          >
            <template #label>
              {{ item.label }}
            </template>
            <template v-if="item.isTag">
              <el-tag
                size="small"
                :class="['card-status', 'card-type-' + item.type]"
              >
                {{ item.value }}</el-tag
              >
            </template>
            <template v-else> {{ item.value }}</template>
          </el-descriptions-item>
        </template>
      </el-descriptions>
  </BaseModal>
</div>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {customerInfoDatas,customerInfoList,cardList,accountList,customerDetailInfo,
  customerInfo,cardDetail,cardDetailInfo,accountDetail2}from '@/utils/data'
import CustomList  from '@/components/common/customList/index.vue'
import BaseTable from '@/components/common/baseTable/index.vue';
import BaseModal from '@/components/common/modal/index.vue'

const cardVisiable = ref(false)
const customerDetailVisiable = ref(false)
const accoutDetailVisiable = ref(false)
const currentPage = ref(1)
const accountCurrentPage = ref(1)
const commonlist = ref()
const commondatas =ref()
const title =ref()
const NOTEINFO = ref('')

const data = reactive({
  cardLists: cardList,
  accountLists: accountList
});
let { cardLists,accountLists } =
  toRefs(data);
  
const listTotal = computed(()=>{
  return cardList.length
})
const accountListTotal = computed(()=>{
  return accountList.length
})

const tableData = [
  {
    FILLTIME: '2016-05-03',
    NOTEFILLER: 'Tom',
    NOTEINFO: 'No. 189, Grove St, Los Angeles',
    CAUSETYPE:'dsd',
    APPLYORGANREMARK:''
  },
  {
    FILLTIME: '2016-05-03',
    NOTEFILLER: 'Tom',
    NOTEINFO: 'No. 189, Grove St, Los Angeles',
    CAUSETYPE:'gg',
    APPLYORGANREMARK:''
  },
  {
    FILLTIME: '2016-05-03',
    NOTEFILLER: 'Tom',
    NOTEINFO: 'No. 189, Grove St, Los Angeles',
    CAUSETYPE:'',
    APPLYORGANREMARK:''
  },
  {
    FILLTIME: '2016-05-03',
    NOTEFILLER: 'Tom',
    NOTEINFO: 'No. 189, Grove St, Los Angeles',
    CAUSETYPE:'',
    APPLYORGANREMARK:''
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
/**
* 数据部分
*/

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})

const handleClick = () => {},
    hideCardDialog=()=>{
      customerDetailVisiable.value= false
    },
    hideCardRemarkDialog=()=>{
      cardVisiable.value= false
    },
  handleCurrent = (val: any) => {
    //这里没有用Mock
    // this.getHistoryList({ currentPage: val, part: 'branch' })
  },
  cardNoClick=(row:any, column:any, $index:any)=>{
    console.log(row, column, $index)
    title.value = '卡详细信息'
    customerDetailVisiable.value = true 
    commonlist.value = cardDetail
    commondatas.value = cardDetailInfo
  },
  showDetail=(text:string )=>{
    title.value = text
    customerDetailVisiable.value = true 
    commonlist.value = customerDetailInfo
    commondatas.value = customerInfo
  },
  showMore=(row:any, column:any, $index:any)=>{
    console.log(row, column, $index,'showmore')
    cardVisiable.value= true
  },
  accountNoClick=()=>{
    accoutDetailVisiable.value = true
  },
  hideaccountDialog=()=>{
    accoutDetailVisiable.value = false
  },
  columns = () => {
    return [
      {
        index: 0,
        prop: 'CARDNO',
        dataIndex: 'CARDNO',
        label: '卡号',
        isLink:true,
        onClick:cardNoClick
      },
      { index: 1, prop: 'CARDEFFECDATE', dataIndex: 'CARDEFFECDATE', label: '卡生效日' },
      { index: 2, prop: 'CARDEXPIRADATE', dataIndex: 'CARDEXPIRADATE', label: '卡失效日' },
      { index: 3, prop: 'CARDTYPE', dataIndex: 'CARDTYPE', label: '卡片类型' }, 
      { index: 4, prop: 'CARDSTATUS', dataIndex: 'CARDSTATUS', label: '卡片状态' }, 
      { index: 5, prop: 'MAIN', dataIndex: 'MAIN', label: '主附卡' }, 
      { index: 6, prop: 'MIGRACARD', dataIndex: 'MIGRACARD', label: '迁移卡' }, 
      { index: 7, prop: 'actions', dataIndex: 'actions', label: '卡片备注',  
        actions: [
          {
            type: '#626aef',
            text: '查看',
            shape: 'round',
            onClick: showMore
          }
        ] }, 
    ];
  },
  accountColumns=()=>{
    return [
      {
        index: 0,
        prop: 'ACCOUNTNO',
        dataIndex: 'ACCOUNTNO',
        label: '账号',
        isLink:true,
        onClick:accountNoClick
      },
      { index: 1, prop: 'CURRENCY', dataIndex: 'CURRENCY', label: '币别' },
      { index: 2, prop: 'ACCOUNTTYPE', dataIndex: 'ACCOUNTTYPE', label: '账号类型' },
      { index: 3, prop: 'CREDITLINE', dataIndex: 'CREDITLINE', label: '信用额度' }, 
      { index: 4, prop: 'ADVANCECASHLINE', dataIndex: 'ADVANCECASHLINE', label: '预借现金额度' }, 
      { index: 5, prop: 'BILLDATE', dataIndex: 'BILLDATE', label: '账单日' }, 
      { index: 6, prop: 'ISSUINGBANK', dataIndex: 'ISSUINGBANK', label: '发卡行' }, 
      { index: 7, prop: 'CARDISSUERBH', dataIndex: 'CARDISSUERBH', label: '发卡机构BH'},
      { index: 7, prop: 'MASTERLANDBH', dataIndex: 'MASTERLANDBH', label: '主使用地BH'}
    ];
  }
</script>
<style scoped>
.customer-info-box .el-tabs{
margin-bottom: 10px;
}
</style>