<template>
  <div>guestManagerModify {{ count }}
    <el-button type="primary" @click="addCounter">Primary</el-button>
    <div> doubleCount ---{{ doubleCount }}</div>
    <div> doubleCount ---{{ doubleCount }}</div>
    <div> doubleCount ---{{ doubleCount }}</div>
    <div> doubleCount ---{{ doubleCount }}</div>
  </div>

</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia';
const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore);  //state,doubleCount 都是状态值 所以用storeToRefs解构出来 以保证其响应性
const { increment } = counterStore;  // 用来解构store 的actions

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
const addCounter = () => {
  increment()
}

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(() => {
})
//  // 此订阅将在组件卸载后保留
//   counterStore.$subscribe(()=>{
//     console.log('baoliu')
//   }, { detached: true })
//   // ...

// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped>

</style>