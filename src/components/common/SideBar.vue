<script lang="ts" setup>
import { onMounted, computed, reactive, toRefs ,ref} from 'vue'
import { Edit } from '@element-plus/icons-vue'
import router from '@/router/index';
// import { routes } from '@/router/index';
import { useRoute } from 'vue-router';
import { originalMockRouters, routeQueryAll } from '@/utils/routers';
interface LinkItem {
  value: string
  link: string
}
interface RouteType {
  title: string;
  path: string;
  address: string;
  quickCheck: string;
}
const menus: RouteType[] = [];
const data = reactive({
  allMenus: menus,
  menuIpt: '',
  mockRouters: originalMockRouters
  // testNum: 1
});
let { allMenus, menuIpt, mockRouters } = toRefs(data);
const route = useRoute();
const state = ref('')
const links = ref<LinkItem[]>([])
const onRoutes = computed(() => {
  return route.path;
});
const querySearch = (queryString: string, cb:any) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value
  // call callback function to return suggestion objects
  cb(results)
}
const createFilter = (queryString:any) => {
  return (restaurant:any) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}
const handleSelect = (item: LinkItem) => {
  console.log(item)
}

const handleIconClick = (ev: Event) => {
  console.log(ev)
}
const handleOpen = (key: string, keyPath: string[]) => {
    //console.log(key, keyPath);
    // state.obj.testNum = state.obj.testNum + 2;
  },
  handleClose = (key: string, keyPath:  string[]) => {
     //console.log(key, keyPath);
    // state.obj.testNum++;
  };
onMounted(() => {
  links.value = loadAll()
})
</script>

<template>
<div class="side-box">
    <div class="search-box">
        <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearch"
    popper-class="my-autocomplete"
    placeholder="Please input"
    @select="handleSelect"
  >
    <template #suffix>
      <el-icon class="el-input__icon" @click="handleIconClick">
        <edit />
      </el-icon>
    </template>
    <template #default="{ item }">
      <div class="value">{{ item.value }}</div>
      <span class="link">{{ item.link }}</span>
    </template>
  </el-autocomplete>

    </div>
    <el-aside width="200px">
          <el-scrollbar>
            <el-menu
          :default-active="onRoutes"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <template v-for="item in mockRouters">
            <template v-if="item.children">
              <el-sub-menu :index="item.path" :key="item.path">
                <template #title>
                  <svg class="icon" aria-hidden="true">
                    <use :xlink:href="item.icon"></use>
                  </svg>
                  <span>&nbsp;{{ item?.title }}</span>
                </template>
                <template v-for="subItem in item.children" :key="subItem.path">
                  <el-sub-menu v-if="subItem.children" :index="subItem.path">
                    <template #title>{{ subItem?.title }}</template>
                    <el-menu-item
                      v-for="(threeItem, i) in subItem.children"
                      :key="i"
                      :index="threeItem.path"
                    >
                      {{ threeItem?.title }}</el-menu-item
                    >
                  </el-sub-menu>
                  <el-menu-item v-else :index="subItem.path"
                    >{{ subItem?.title }}
                  </el-menu-item>
                </template>
              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item :index="item.path" :key="item.path">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="item.icon"></use>
                </svg>
                <template #title>&nbsp;{{ item?.title }}</template>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
        <!-- <el-menu :default-openeds="['1', '3']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon>Navigator One
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="1-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>Navigator Two
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="2-4">
              <template #title>Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><setting /></el-icon>Navigator Three
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
              <template #title>Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu> -->
      </el-scrollbar>
        </el-aside>
    
        <div class="tips">2022</div>
</div>

</template>

<style>
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
.el-menu {
    height: 100%;
    border-right: 0;
  }
  .el-menu-item .is-active {
        background-color: #f5dcde;
        color: #a71e32;
        border-right: 2px solid #a71e32;
     
    }
  .el-menu  .el-sub-menu__title,.el-menu .el-menu-item {
      height: 40px;
      line-height: 40px;
     
    }
.el-menu-item iconpark-icon {
    margin-right: 6px;
    vertical-align: middle;
  }
  .el-menu  .el-sub-menu  .el-menu-item {
    height: 36px;
    line-height: 36px;
}
</style>