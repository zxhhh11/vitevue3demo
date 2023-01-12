<template>
  <div>
    <div class="custom-form">
  <div class="card-title">快速查询</div>
  <el-descriptions :column="1" class="query-box" size="small" border>
            <el-descriptions-item
              label="姓名"
              label-class-name="my-label"
              content-class-name="my-content"
            >
          <div>    <el-input
                placeholder="请在此处输入用户姓名"
                
                v-model="name"
                aria-autocomplete="none"
                clearable
              >
              </el-input><el-button type="primary">查询</el-button></div>
            </el-descriptions-item>
            <el-descriptions-item label="卡号">
                <div>    <el-input
                placeholder="请在此处输入卡号"
                v-model="creditCardNo"
                clearable
              >
              </el-input><el-button type="primary">查询</el-button></div>
            </el-descriptions-item>
            <el-descriptions-item label="客户号">
             <div> <el-input
                placeholder="请在此处输入客户号"
                v-model="phoneNo"
                clearable
              >
              </el-input><el-button type="primary">查询</el-button></div>
            </el-descriptions-item>
         
          </el-descriptions> 
          
</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
let data = reactive({
  name: '',
  creditCardNo: '',
  phoneNo: '',
  idNo: '',
  currentPage: 1
});
let { name, creditCardNo, phoneNo, idNo,  currentPage} =
  toRefs(data);
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
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped>
.custom-form{
  width: 1000px;
  margin-bottom: 20px;
}
.custom-form .el-descriptions .el-input {
width: 80%;
margin-right: 20px;
}
</style>