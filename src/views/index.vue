<template>
  <div>
    <h2>首页 显示银行卡图片页</h2>
    <div>用户名--{{ customer.customerName }} 用户号--{{ customer.customerNo }} 用户类型{{ customer.customerType }} {{ test }} </div>
    <div>

      <el-button type="primary" @click="modifyTest">添加</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia';
const userStore = useUserStore()
const { user, customer, test } = storeToRefs(userStore)
const { changeTest } = userStore
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
const modifyTest = () => {
  changeTest()
}
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

</script>
<style scoped></style>