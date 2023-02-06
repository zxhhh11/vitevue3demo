import {useCounterStore} from './counter'
import {useUserStore} from './user'
import {useCommonStore} from './common'
export default function useStore() {
    return {
      userStore: useUserStore(),
      counterStore: useCounterStore(),
     commonStore:useCommonStore()
    }
  }