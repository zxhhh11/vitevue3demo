<script lang="ts" setup>
import { onMounted, computed, reactive, toRefs, ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import router from '@/router/index';
// import { routes } from '@/router/index';
import { useRoute } from 'vue-router';
import { originalMockRouters, routeQueryAll, serviceMockRouters } from '@/utils/routers';
import usePermissionStore from '@/stores/permission'
import SidebarItem from '@/layout/sidebar/sidebarItem.vue'
const permissionStore = usePermissionStore()
const sidebarRouters: any = computed(() => permissionStore.sidebarRouters);
interface LinkItem {
  value: string
  address: string,
  path: string,
  quickCheck: string
}
interface RouteType {
  title?: string;
  path?: string;
  address?: string;
  quickCheck?: string;
}
const menus: RouteType[] = [];

const state = ref('')
// const links = ref<LinkItem[]>([])

const data = reactive({
  allMenus: menus,
  mockRouters: originalMockRouters
  // testNum: 1
});
let { allMenus, mockRouters } = toRefs(data);

const route = useRoute();
const onRoutes = computed(() => {
  return route.path;
});
// const querySearch = (queryString: string, cb:any) => {
//   let  queryMenus = allMenus;
//       const results = queryMenus.value.filter((item:any)=>
//       {
//         return item.quickCheck.toLowerCase().includes(queryString.toLowerCase())
//       })

//     cb(results);
// },
// clearQuickQuery=()=>{
//   mockRouters.value = originalMockRouters
// }
// const loadAll = () => {
//   return [
//           { "value": "本人名下要客信息查询", "path": "/guestManagerMod/inquireCustomerInfo","address":"0-0","quickCheck":"BRMXYKXXCX"},
//           { "value": "要客经理修改维护", "path": "/guestManagerMod/guestManagerModify","address":"0-1","quickCheck":"YKJLXGWH" },
//           { "value": "要客客户统计表", "path": "/guestReport/guestStatSheet" ,"address":"1-0","quickCheck":"YKKHTJB"},
//           { "value": "要客明细统计表", "path": "/guestReport/guestDetailStatSheet","address":"1-1" ,"quickCheck":"YKMXTJB"},
//           { "value": "分行要客维护", "path": "/queryFun/branchGuestMaint","address":"2-0","quickCheck":"FHYKWH" },
//           { "value": "短信渠道历史查询", "path": "/queryFun/SMSHisyQuery","address":"2-1","quickCheck":"DXQDLSCX" },
//           { "value": "个人卡合并账单查询", "path": "/queryFun/personCardBill" ,"address":"2-2","quickCheck":"GRKHBZDCX"},
//           { "value": "客户权益信息查询", "path": "/queryFun/customerRightsInfo","address":"2-3","quickCheck":"KHQYXXCX" },
//           { "value": "申请件进度查询", "path": "/queryFun/applyProgress","address":"2-4","quickCheck":"SQJJDCX" },
//           { "value": "信用卡额度查询", "path": "/queryFun/creditCardLimit","address":"2-5","quickCheck":"XYKEDCX" },
//           { "value": "信用卡交易查询", "path": "/queryFun/creditCardTrans","address":"2-6","quickCheck":"XYKJYCX" },
//           { "value": "信用卡账单查询", "path": "/queryFun/creditCardBill","address":"2-7","quickCheck":"XYKZDCX" },
//           { "value": "信用卡信息查询", "path": "/queryFun/creditCardInfo","address":"2-8","quickCheck":"XYKXXCX" },
//           { "value": "信用卡状态查询", "path": "/queryFun/creditCardStatus","address":"2-9","quickCheck":"XYKZTCX" },
//           { "value": "主附卡关系查询", "path": "/queryFun/mainAttachedCard","address":"2-10","quickCheck":"ZFKGXCX" },
//           { "value": "年费减免查询", "path": "/queryFun/annualFeeWaiver","address":"2-11","quickCheck":"NFJMCX" },
//           { "value": "账户状态查询", "path": "/queryFun/accountStatus","address":"2-12","quickCheck":"ZHZTCX" },
//           { "value": "公务卡信息查询", "path": "/queryFun/officialCardInfo","address":"2-13","quickCheck":"GWKXXCX" },
//           { "value": "换卡历史记录查询", "path": "/queryFun/cardReplaceHisy","address":"2-14","quickCheck":"HKLSJLCX" },
//           { "value": "金融历史查询", "path": "/queryFun/financialHisy","address":"2-15","quickCheck":"JRLSCX" },
//           { "value": "信用卡授权查询", "path": "/queryFun/creditCardAuth","address":"2-16","quickCheck":"XYKSQCX" },
//           { "value": "交易短信通知触发金额", "path": "/OperatFun/tranSMSNotif","address":"3-0","quickCheck":"JYDXTZCFJE" },
//           { "value": "分期交易提前结算并减免手续费", "path": "/OperatFun/installmentTradeAndReduce","address":"3-1","quickCheck":"FQJYTQJSBJMSXF" },
//           { "value": "客户、账户五级分类批量调整申请", "path": "/OperatFun/customerAndAccountFLAgjust","address":"3-2","quickCheck":"KHZHWJFLPLTZSQ" }
//         ];
// }
// const handleSelect = (item: LinkItem) => {
//   if (route.path === item.path) {
//     return;
//   }
//   if (item.path) {
//     const local = item.address.slice(0, 1);
//     mockRouters.value = [originalMockRouters[Number(local)]];
//     router.push(item.path);
//   }
// }


const handleOpen = (key: string, keyPath: string[]) => {
  //console.log(key, keyPath);
  // state.obj.testNum = state.obj.testNum + 2;
},
  handleClose = (key: string, keyPath: string[]) => {
    //console.log(key, keyPath);
    // state.obj.testNum++;
  };
onMounted(() => {
  // allMenus.value = loadAll()
})
</script>

<template>
  <div class="side-box">
    <!--  ***快速查找相关 ***-->
    <!-- <div class="search-box">
        <el-autocomplete
        id="quickSearch"
    v-model="state"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="false"
    popper-class="my-autocomplete"
    placeholder="请输入关键词"
    clearable ref="menuquery"
    @select="handleSelect"
   
    @clear ="clearQuickQuery"
  >
    <template #default="{ item }">
      <div class="value">{{ item.value }}</div>
      <span class="link">{{ item.link }}</span>
    </template>
  </el-autocomplete>

    </div> -->
    <!--  ***快速查找相关 ***-->
    <el-aside width="220px">
      <el-scrollbar>
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          router>
          <SidebarItem v-for="(route, index) in sidebarRouters" :key="route.path + index" :item="route"
            :base-path="route.path">
          </SidebarItem>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <!-- 我的服务相关的底部导航 -->
    <!-- <div class="tips">

          <el-menu
          :default-active="onRoutes"
          :default-openeds="['1']"
          class="el-menu-vertical-demo"
          router
        >
          <template v-for="item in serviceMockRouters">
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
        </div> -->
  </div>

</template>

<style>
.side-box {
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
}

.el-aside {
  background-color: #fff;
  flex: 1;
}

.search-box {
  margin: 2px 0 2px 2px;
  width: 218px;
  height: 32px;
}

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
}

.el-menu-item .is-active {
  background-color: #f5dcde;
  color: #a71e32;
}

.el-menu .el-sub-menu__title,
.el-menu .el-menu-item {
  height: 40px;
  line-height: 40px;

}

.el-menu-item iconpark-icon {
  margin-right: 6px;
  vertical-align: middle;
}

.el-menu .el-sub-menu .el-menu-item {
  height: 36px;
  line-height: 36px;
}

.el-autocomplete.el-tooltip__trigger.el-tooltip__trigger {
  width: 100%;
}

.el-scrollbar__wrap .el-scrollbar__view {
  height: 100%;
}

.side-box .tips {
  margin-top: 8px;
  background-color: #fff;
  height: 200px;
  width: 220px;
}

/* .tips .el-menu.el-menu--vertical .el-sub-menu .el-menu-item{
  padding-left: 10px;
} */
/* .side-box .el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-sub-menu__title{
  padding-left: 4px;
}
.side-box .el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item{
  padding-left: 14px;
} */
.tips .el-menu .el-sub-menu .el-menu-item {
  height: 30px;
  line-height: 30px;
}

.side-box .el-aside {
  border-right: 1px solid #dcdfe6;
}

.el-aside .el-menu {
  border-right: 0;
}

/* .side-box .el-scrollbar{
  padding: 0 10px 0 0;
} */
</style>