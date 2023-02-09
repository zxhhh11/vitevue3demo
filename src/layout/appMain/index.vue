<template>
  <div>
    <el-tabs
        v-model="editableTabsVal"
        type="card"
        class="demo-tabs right-tabs"
        >
        <!--  tab组件分别渲染 -->
        <!-- <el-tab-pane label="User" name="0">
            <router-view v-slot="{ Component, route }">
            <transition name="fade-transform" mode="out-in">
                <component v-if="!route.meta.link" :is="Component" :key="route.path"/>
            </transition>
             </router-view>
        </el-tab-pane>
        <el-tab-pane label="Config" name="1">Config</el-tab-pane>
        <el-tab-pane label="Role" name="2">Role</el-tab-pane>
        <el-tab-pane label="Task" name="3">
          www
        </el-tab-pane> -->

         <!--  tab组件动态渲染 -->
        <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="(item.title as string)"
            :name="item.name"
            :closable="item.closable"
        >
            <!-- <transition name="fade-transform" mode="out-in"> -->
                 <component :is="item.content" :key="new Date()"></component>
            <!-- </transition> -->
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import customerInfo from "@/views/service/customerInfo.vue";
import headOfficeSerHsy from "@/views/service/headOfficeSerHsy.vue";
import inquirTranFlow from "@/views/service/inquirTranFlow.vue";
import interCardTranFlow from "@/views/service/interCardTranFlow.vue";
import myService from "@/views/service/myService.vue";
import branchTranFlow from '@/views/service/branchTranFlow.vue'
import TagModule2 from '@/components/common/TagModule2.vue'

import useStore  from '@/stores/index'
import { storeToRefs } from 'pinia';

const { commonStore} = useStore()
const {editableTabsVal} = storeToRefs(commonStore)
const {chgEditableTabsVal} = commonStore
// import type { TabsPaneContext } from 'element-plus'
// const handleClick = (tab: TabsPaneContext, event: Event) => {
//   console.log(tab, event)
// }
/**
* 路由对象
*/
const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();

// interface TabItemType {
//   title: string | unknown;
//   name: string;
//   content: HTMLElement;
//   closable: boolean;
// }
// Ref<TabItemType[]>
const editableTabs:any = ref([
 
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
    title: '本柜员交易流水查询',
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
    if (typeof to.meta.title === 'string') {
      editableTabs.value[6].title = to.meta.title;
    }
    let arr = ['客户信息','分行端服务流水','总行端服务历史(400)','国际卡上收前交易流水','非柜员交易流水查询','我的服务']
    let title:any= to.meta.title;
    if(!arr.includes(title)){
      chgEditableTabsVal('6');
     }
    // if (editableTabsVal.value === '7' && to.fullPath !== '/login') {
    //   console.log(editableTabsVal,'editableTabsVal')
    //  
    // }
  }
);


</script>
<style scoped>
</style>