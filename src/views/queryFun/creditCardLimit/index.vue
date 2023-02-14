<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="信用卡额度调整">
        <div>
          <CustomList :list="creditCardList" :column="2" :datas="creditCardDatas">
            <template #addItem>
              <el-descriptions-item :span="2" label="申请人备注" v-model="ApplicantRemarks">
                <el-input type="textarea" v-model="ApplicantRemarks"></el-input>
              </el-descriptions-item>
              <el-descriptions-item :span="2" label="复核人备注">
                <el-input type="textarea" v-model="reviewRemarks">
                </el-input>
              </el-descriptions-item>
              <el-descriptions-item :span="2" label="">
                <el-button type="success">通过并执行</el-button>
                <el-button color="#626aef">重新提交</el-button>
                <el-button type="warning">退回申请人</el-button>
                <el-button type="danger">关闭案件</el-button>
                <el-button type="primary">返回</el-button>
              </el-descriptions-item>
            </template>
          </CustomList>

        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CustomList from '@/components/common/customList/index.vue';
import { creditCardDatas, creditCardList } from '@/utils/data'
const ApplicantRemarks = ref('')
const reviewRemarks = ref('')
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
watchEffect(() => {
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 


</script>
<style scoped>
.el-tabs {
  height: 100%;
}

.el-tabs .el-tabs__content {
  height: calc(100% - 40px);
}

.my-label {
  background: var(--el-color-success-light-9);
}

.my-content {
  background: var(--el-color-danger-light-9);
}
</style>