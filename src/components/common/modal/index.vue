<script lang="ts">
export default {
  name: 'BaseModal' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
</script>
<template>
  <div>
    <el-dialog :title="title" v-model="showModal" :close-on-click-modal="false" :before-close="hideHandle"
      :width="width">
      <!-- :before-close="handleClose" -->
      <slot></slot>
      <template #footer v-if="showFooter">
        <span class="dialog-footer">
          <el-button @click="hideHandle" type="danger" plain size="small">{{
            cancelText
          }}</el-button>
          <el-button v-if="hasConfirm" type="primary" @click="confirmHandle" size="small">{{ confirmText }}</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, computed } from 'vue';
const props = defineProps({
  dialogVisiable: {
    type: Boolean,
    dafault: false
  },
  hideDialog: {
    type: Function
  },
  title: {
    type: String,
    default: '提示啊'
  },
  width: String,
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '确定'
  },
  hasConfirm: {
    type: Boolean,
    default: true
  },
  showFooter: {
    type: Boolean,
    default: true
  }
});
onMounted(() => {
  // console.log(props, 'props dialogVisiable123');
});
const emit = defineEmits<{
  (e: 'hide-dialog'): void;
  (e: 'submit-handle'): void;
}>();
const hideHandle = () => {
  emit('hide-dialog');
},
  confirmHandle = () => {
    emit('submit-handle');
  };
const showModal = computed({
  get: () => {
    // console.log(showModal, 'showModal', emit, 'emit');
    return props.dialogVisiable;
  },
  set: (value) => {
    emit('hide-dialog');
  }
});
</script>
