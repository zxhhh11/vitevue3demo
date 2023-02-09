<script lang="ts">
export default {
  name: 'BaseTable' // 用来解决 在父组件引用时报错 显示文件未导出的问题 //  给文件声明name
};
/*******Table Paramter****
 *isMutiSelect 用于判断是否支持多选
 * 给el-table  stripe 控制 创建带斑马纹的表格
 *  pagination 中 hide-on-single-page属性用来配置单页数据时是否显示分页组件
 *
 * ***/
</script>

<template>
  <div>
    <div v-if="title" class="card-title">{{ title }}</div>
    <el-table :data="tableData" border v-loading="loading" size="small" fit :highlight-current-row="!isMutiSelect"
      @selection-change="handleSelectionChange" @current-change="handleCurrentChange" style="width: 100%" :default-sort="{
        prop: defaultSort,
        order: 'descending'
      }">
      <template v-for="(col, index) in newColumns()" :key="index">
        <el-table-column v-if="col.render" :prop="col.prop" :label="col.label" :width="col.width ? col.width : ''"
          :min-width="col.minWidth" :show-overflow-tooltip="true">
          <template #default="scope">
            <template v-if="!col.render">
              <span>{{ scope.row[col.prop] }}</span>
            </template>
            <template v-else>
              <RenderItem :column="col" :row="scope.row" :render="col.render" />
            </template>
            <!-- :index="scope.$index" -->
          </template>
        </el-table-column>
        <el-table-column type="selection" v-else-if="isMutiSelect" width="55">
        </el-table-column>

        <el-table-column v-else-if="col.formatter" :label="col.label" :formatter="col.formatter ? col.formatter : null">
        </el-table-column>
        <el-table-column v-else :sortable="col.sortable" :prop="col.prop" :width="col.width ? col.width : ''"
          :min-width="col.minwidth ? col.minwidth : ''" :label="col.label">
          <template v-slot="{ row, column, $index }">
            <b v-if="col.isLink" class="custom-link" @click="col.onClick(row, column, $index)">{{ row[col.prop] }}</b>
            <!-- 如果actions 部分是按钮的组合 可以使用这个方法 -->
            <!--   :class="btn.type ? 'btn-' + btn.type : 'btn-default'" -->
            <!--  :type="btn.type ? btn.type : ''"  由于element button 组件更新此方法不再适用于自定义按钮颜色-->
            <!--  :class="btn.type ? '' : btn.class ? 'btn-' + btn.class : ''" 由于element button 组件更新此方法不再适用于自定义按钮颜色 -->
            <div v-else-if="col.prop == 'actions'">
              <el-button size="small" v-for="(btn, key) in col.actions" @click="btn.onClick(row, column, $index)"
                :round="btn.shape === 'round'" :key="key" :color="btn.type ? btn.type : ''">
                {{ btn.text }}</el-button>
            </div>
            <span v-else>{{ row[col.prop] }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination v-if="hasPagination" v-model:currentPage="currentPageValue" small
      layout="total, prev, pager, next, jumper" :total="total" @current-change="handleCurrentChangePage" />
  </div>
</template>

<script lang="ts" setup>
import {
  onMounted,
  reactive,
  ref,
  computed,
  toRefs
} from 'vue';
import RenderItem from './RenderItem.ts';
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  defaultSort: {
    type: String,
    default: ''
  },
  title: String,
  isMutiSelect: {
    type: Boolean
  },
  tableData: {
    type: Array
  },
  formatter: {
    type: Function
  },
  newColumns: {
    type: Function,
    required: true
  },
  handleClick: {
    type: Function
  },
  currentPage: {
    type: Number,
    default: () => 1
  },
  pageSize: {
    type: Number,
    default: () => 10
  },
  total: {
    type: Number,
    default: () => 20
  },
  layout: {
    type: String,
    default: () => ''
  },
  hasPagination: {
    type: Boolean,
    default: false
  }
});
let data = reactive({
  multipleSelection: [],
  currentRow: null
});
let { multipleSelection, currentRow } = toRefs(data);
const emit = defineEmits<{
  (e: 'handleCurrent', value: any): void;
  // (e: 'hide-dialog2'): void;
}>();
const handleCurrentChangePage = (val: any) => {
  emit('handleCurrent', val);
},
  handleSelectionChange = (val: any) => {
    multipleSelection.value = val;
    // console.log(val, 'select')
  },
  handleCurrentChange = (val: any) => {
    if (props.isMutiSelect) {
      return;
    }
    currentRow.value = val;
    // console.log(val, 'singal')
  };
const currentPageValue = computed({
  //封装组件中如果需要用V-model 来设置属性时，就需要通过computed 将属性做一下转化
  get: () => {
    // console.log(showModal, 'showModal', emit, 'emit');
    return props.currentPage;
  },
  set: (value) => {
    emit('handleCurrent', value);
  }
});
</script>

<style>
.base-pagination {
  font-size: 12px;
  color: #2a3451;
  line-height: 20px;
  height: 20px;
  padding-top: 20px;
  text-align: right;
  background-color: '#fff';


}

.base-pagination .el-pagination__total,
.base-pagination .el-pagination__sizes,
.base-pagination .el-pagination__jump {
  font-size: 12px;
  line-height: 20px;
}

.base-pagination .el-pagination__total,
.base-pagination .el-pagination__sizes {
  float: left;
}

.base-pagination .btn-prev,
.base-pagination .btn-next,
.base-pagination .el-pager li {
  margin: 0px 5px;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
}

.base-pagination .el-pager li {
  font-weight: 400;
  color: #606266;
  margin: 0 5px;
  min-width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 2px;
}

.base-pagination .el-pager li:not(.disabled).active {
  background-color: #2a76cd;
  color: #ffffff;
}

.base-pagination .el-input .el-input__inner {
  height: 20px;
  line-height: 20px;
}

.base-pagination .el-input--small .el-input__icon {
  line-height: 20px;
}

.base-pagination .btn-prev {
  padding-right: 0px;
}

.base-pagination .btn-next {
  padding-left: 0px;
}

.base-pagination .el-pagination button,
.base-pagination .el-pagination span:not([class*='suffix']) {
  min-width: 25.5px;
}

.el-pagination {
  justify-content: right;
}
</style>
