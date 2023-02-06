<template>
  <div>
    <div class="custom-form">
 
      <el-radio-group v-model="radio3" class="ml-4">
        <el-descriptions :column="1" class="query-box" size="small" border>
            <el-descriptions-item>
                <template #label>
                    <el-radio label="1" size="small">按卡号查询</el-radio>
                </template>
                <el-input v-model="cardNo"
                        placeholder="请在此处输入卡号"
                        aria-autocomplete="none"
                        clearable 
                        @focus = "iptFocus('1')"
                    >
                    </el-input>
            </el-descriptions-item>
            <el-descriptions-item label="">
                <template #label>
                    <el-radio label="2" size="small">按证件号码查询</el-radio>
                </template>
                 <el-input   @focus = "iptFocus('2')"
                placeholder="请在此处输入证件号码"
                v-model="idNo"
                clearable></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="">
                <template #label>
                    <el-radio label="3" size="small">按手机号码查询</el-radio>
                </template>
                <el-input  @focus = "iptFocus('3')"
                    placeholder="请在此处输入手机号码"
                    v-model="phoneNo"
                    clearable
                ></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="">
             <div><el-button type="primary">查询</el-button></div>
            </el-descriptions-item>
          </el-descriptions> 
      </el-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const radio3 = ref("1")
const cardNo = ref('')
const idNo = ref('')
const phoneNo = ref('')
const iptFocus=(id:string)=>{
    console.log(223,id)
    radio3.value = id
}

/**
* 路由对象
*/
const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();


onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})

</script>
<style>
/* .custom-form{
  
  margin-bottom: 20px;
} */
.custom-form .el-descriptions .el-input {
    /* width: 80%; */
    margin-right: 20px;
}
.el-radio-group .el-descriptions{
  /* width: 1000px; */
}
.custom-form .el-descriptions.query-box .el-input__inner{
  /* width: 500px; */
}
</style>