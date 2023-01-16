<script setup lang="ts">
import { getmark } from "@/utils/watermark";
import {onMounted,onUnmounted,watch,ref, shallowRef} from 'vue'
import type {Ref} from 'vue'
import SideBar from '@/components/common/SideBar.vue'
import Header from '@/components/common/Header.vue'
import { useRouter,useRoute } from "vue-router";
import branchTranFlow from '@/views/service/branchTranFlow.vue'
import TagModule2 from '@/components/common/TagModule2.vue'
import customerInfo from "./service/customerInfo.vue";
import headOfficeSerHsy from "./service/headOfficeSerHsy.vue";
import inquirTranFlow from "./service/inquirTranFlow.vue";
import interCardTranFlow from "./service/interCardTranFlow.vue";
import myService from "./service/myService.vue";
const router = useRouter()
const route = useRoute();
const filterClick =()=>{
  router.push('/filter')
}
const { watermark } = getmark();
    // onMounted(() => {
    //   watermark('WaterMark',400,300);//水印名  后面两个参数用来控制水印密度
    // });
    // onUnmounted(() => {
    //   watermark('');
    // });
    const handleKeyDown = (e: any) => {
  if (e.keyCode === 122) {
    e.preventDefault(); // 阻止默认事件
    e.stopPropagation(); // 阻止冒泡事件
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  } else if (e.keyCode === 27) {
    e.preventDefault(); // 阻止默认事件
    e.stopPropagation(); // 阻止冒泡事件
  }
};
window.addEventListener('keydown', handleKeyDown, true);
const keyDown = () => {
    document.onkeydown = (e) => {
      // console.log(e, 'e  key down in document');
      //事件对象兼容
      // let e1 = e || window.event || arguments.callee.caller.arguments[0]
      let e1 = e || window.event;
      let key = Number(e1.keyCode);
      if ((e1 && key > 47 && key < 58) || (key > 64 && key < 91)) {
        const inputs:any = document.getElementsByTagName('input');
        const textAreas:any = document.getElementsByTagName('textarea');
        let allIpts = [...inputs, ...textAreas];
        let isFocusFlag = false;
        for (let i = 0; i < allIpts.length; i++) {
          if (allIpts[i] == document.activeElement) {
            isFocusFlag = true;
            break;
          }
        }
        if (!isFocusFlag) {
          document.getElementById('quickSearch')?.focus();
        }
      }
    };
  }
  onMounted(() => {
  keyDown(); // 监听键盘
 // watermark('李某某 2023-01-03',400,300);//水印名  后面两个参数用来控制水印密度
});
  onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown, true);
});
const editableTabsValue = ref('6');
interface TabItemType {
  title: string | unknown;
  name: string;
  content: HTMLElement;
  closable: boolean;
}
const editableTabs: Ref<TabItemType[]> = ref([
 
  {
    title: '客户信息',
    name: '0',
    content: shallowRef(customerInfo),
    closable: false
  },
  {
    title: '分行端服务流水',
    name: '1',
    content: shallowRef(branchTranFlow),
    closable: false
  },
  {
    title: '总行端服务历史(400)',
    name: '2',
    content: shallowRef(headOfficeSerHsy),
    closable: false
  },
  {
    title: '国际卡上收前交易流水',
    name: '3',
    content: shallowRef(interCardTranFlow),
    closable: false
  },
  {
    title: '非柜员交易流水查询',
    name: '4',
    content: shallowRef(inquirTranFlow),
    closable: false
  },
  {
    title: '我的服务',
    name: '5',
    content: shallowRef(myService),
    closable: false
  },
  {
    title: route.meta.title, //这个是刷新时或页面首次加载时得默认值
    name: '6',
    content: shallowRef(TagModule2),
    closable: false
  }
 
]);
watch(
  route, //这里必须传入要用watch 观察的参数
  (to, from) => {
    // 可以拿到被追踪参数变化前后的值 这一点 watchEffect 做不到
    console.log(
      to,
      ' towatch effect state.num',
      editableTabsValue,
      'editableTabsValue',to.meta.title
    );
    if (typeof to.meta.title === 'string') {
      editableTabs.value[6].title = to.meta.title;
    }
    let arr = ['客户信息','分行端服务流水','总行端服务历史(400)','国际卡上收前交易流水','非柜员交易流水查询','我的服务']
    let title:any= to.meta.title;
    if(!arr.includes(title)){
      editableTabsValue.value = '6';
     }
    // if (editableTabsValue.value === '7' && to.fullPath !== '/login') {
    //   console.log(editableTabsValue,'editableTabsValue')
    //  
    // }
  }
);
</script>

<template>
   
   <div class="common-layout">
    <el-container class="box">
     <Header></Header>
      <el-container>
       <SideBar></SideBar>
        <el-main>
          <div class="customer-box">
            <div>
              <el-descriptions  class="customer-info"  :column="4" border>
                <el-descriptions-item
                  label="客户姓名："
                  label-align="right"
                  align="center"
                  label-class-name="my-label"
                  class-name="my-content"
                  width="150px"
                  >赵某某 
                  <span class="filter-icon" @click="filterClick">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-100"></use>
                      </svg>
                  </span>
                </el-descriptions-item
                >
                <el-descriptions-item label="证件号码：" label-align="right" align="center"
                  >235546541655498</el-descriptions-item
                >
                <el-descriptions-item label="卡号：" label-align="right" align="center"
                  >623548951236656666</el-descriptions-item
                >
                <el-descriptions-item label="客户号：" label-align="right" align="center">
                  <el-tag size="small">5652321</el-tag>
                </el-descriptions-item>
              
              </el-descriptions>
              <el-tabs
                v-model="editableTabsValue"
                type="card"
                class="demo-tabs right-tabs"
              >
                <el-tab-pane
                  v-for="item in editableTabs"
                  :key="item.name"
                  :label="(item.title as string)"
                  :name="item.name"
                  :closable="item.closable"
                >
                  <!-- <router-view class="main_view" v-slot="{ Component }"> -->
                  <!-- <transition name="fade-transform" mode="out-in"> -->
                  <!-- <component :is="Component" /> -->

                  <!-- </router-view> -->
                  <component :is="item.content"></component>
                  <!-- </transition> -->
                </el-tab-pane>
              </el-tabs>
          <!-- <RouterView /> -->
          </div>
        </div>
       
      </el-main>
    
      </el-container>
      <el-footer>中国银行版权所有&copy;2011</el-footer>
    </el-container>
  </div>
 

</template>

<style>
.filter-icon{
  cursor: pointer;
  font-size: 28px;
  vertical-align: middle;
  margin-left: 10px;
  color: #2eafe9;
}

.filter-icon:hover{
  color: #0779ad;
}
.customer-info{
  margin-bottom: 10px;
}
</style>
