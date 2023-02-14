<template>
  <div>
    <template v-if="!item.hidden">
      <template v-if="item.children && item.children.length === 1">
        <el-menu-item :index="item.children[0].path" :key="item.children[0].path">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.children[0]?.meta?.icon"></use>
          </svg>
          <template #title>&nbsp;{{ item.children[0]?.meta?.title }}</template>
        </el-menu-item>
      </template>

      <template v-else-if="item.children?.length > 1">
        <el-sub-menu :index="item.path">
          <template #title>
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item?.meta?.icon"></use>
            </svg>
            <span>&nbsp;{{ item?.meta.title }}</span>
          </template>
          <sidebar-item v-for="child in item.children" :key="child.path" :is-nest="true" :item="child" class="nest-menu"
            :base-path="resolvePath(child.path)">
          </sidebar-item>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :key="item.path" :index="resolvePath(item.path)">{{ item?.meta.title }}</el-menu-item>
      </template>
    </template>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getNormalPath } from '@/utils/common'
const props = defineProps({
  // route object
  item: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String,
    default: ''
  }
})
/**
* 路由对象
*/

const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();

function resolvePath(routePath: string) {
  if (props.basePath.indexOf(routePath) > -1) {
    return props.basePath
  }
  //   if (routeQuery) {
  //     let query = JSON.parse(routeQuery);
  //     return { path: getNormalPath(props.basePath + '/' + routePath), query: query }
  //   }
  return getNormalPath(props.basePath + '/' + routePath)
}
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(() => {
})


</script>
<style scoped>
.el-menu>div>li.el-menu-item {
  padding-left: 4px;
}

.el-menu .el-sub-menu li.el-menu-item {
  padding-left: 10px;
}
</style>