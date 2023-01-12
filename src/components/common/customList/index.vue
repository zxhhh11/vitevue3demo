
<template>
  <div>
    <div class="custom-list" v-for="(data, index) in datas" :key="index">
      <el-descriptions
        :title="title"
        :class="customClass"
        :column="column"
        size="small"
        :labelStyle="labelStyle"
        border
      >
        <!-- 这里有跨组件传递slot的demo grandFather->parent-child   parent-->
        <template #extra>
          <slot name="extra"></slot>
        </template>
        <template v-for="(item, key) in list" :key="key">
          <el-descriptions-item
            v-if="showMore"
            :span="item.span ? item.span : span"
            :label-class-name="labelClassName"
          >
            <template #label>
              {{ item.label }}
            </template>
            <template v-if="item.isTag">
              <el-tag
                size="small"
                :class="['card-status', 'card-type-' + item.type]"
              >
                {{ data[item.value] }}</el-tag
              >
            </template>
            <template v-else-if="item.isLink">
              <b class="custom-link" @Click="linkHandle(data)">
                {{ data[item.value] }}</b
              >
            </template>
            <template v-else> {{ data[item.value] }}</template>
          </el-descriptions-item>
          <!-- <el-descriptions-item
            v-else
            :span="item.span ? item.span : span"
            :label-class-name="labelClassName"
          >
          </el-descriptions-item> -->
        </template>
        <slot name="addItem"></slot>
        <!-- slot name = addItem 用来添加一些特殊的自定义内容 -->
      </el-descriptions>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, computed } from 'vue';
import type {PropType}from 'vue';
export interface ListType {
  label: string;
  value: string;
  isTag?: boolean;
  type?: string;
  span?: number;
  isLink?: boolean;
}
export interface DataType {
  [key: string]: any;
}
const props = defineProps({
  list: {
    type: Array as PropType<ListType[]>, // 用来配置使type支持typescript类型验证
    required: true
  },
  datas: Array as PropType<DataType[]>, //由于data 我们不确定key都有什么，所以为了解决ts 检查
  title: String,
  labelStyle: {
    //这里如果需要定义则遵照这个 labelStyle: Object as PropType<ListType> 形式
    type: Object
  },
  labelClassName: String,
  column: {
    type: Number,
    default: 2
  },
  span: {
    type: Number,
    default: 1
  },
  customClass: String,
  showMore: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits<{
  (e: 'link-click', val: DataType): void;
  // (e: 'hide-dialog2'): void;
}>();
const linkHandle = (data: DataType) => {
  emit('link-click', data);
};
onMounted(() => {
  // console.log(props, 'props dialogVisiable123');
});
</script>

<style>
.label-width-100 {
  width: 100px !important;
}
.el-tag.card-status {
  white-space: inherit;
  height: auto;
  line-height: unset;
}
</style>
