import {useCounterStore} from './counter'
import {useUserStore} from './user'
import {useCommonStore} from './common'
import usePermissionStore from './permission'
export default function useStore() {
    return {
      userStore: useUserStore(),
      counterStore: useCounterStore(),
     commonStore:useCommonStore(),
     permissionStore:usePermissionStore()
    }
  }