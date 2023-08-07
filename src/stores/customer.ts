import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getCustomers } from '@/apis/customer'
export const useCustomerStore = defineStore("customer", {
  state: () => ({
    CUSTOMERINFO: {
      CUSTOMERNAME: '赵某某2',
      IDNO: '2301456988564253589',
      CARDNO: '156588995236542',
      CUSTOMERNO: '0265821'
    },
    CUSTOMERLISTS: []
  }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    clearCustomerInfo() {
      this.CUSTOMERINFO = {
        CUSTOMERNAME: '',
        IDNO: '',
        CARDNO: '',
        CUSTOMERNO: ''
      }
    },
    queryCustomers(flag: String) {
      return new Promise((resolve, reject) => {
        getCustomers().then((res: any) => {
          console.log(res, 'res')
          console.log(flag, 'flag')
          if (flag === '3') {
            this.clearCustomerInfo()
            this.CUSTOMERLISTS = res.data.data
          } else {
            let arr = res.data.data.splice(1)
            this.CUSTOMERLISTS = arr
            this.CUSTOMERINFO = {
              CUSTOMERNAME: arr[0].CUSTOMERNAME,
              IDNO: arr[0].IDNO,
              CARDNO: arr[0].CARDNO,
              CUSTOMERNO: arr[0].CUSTOMERNO
            }
          }
          // if (res.data.data.length > 1) {
          //   this.clearCustomerInfo()
          // }
          // this.CUSTOMERLISTS = res.data.data
          resolve(res)
        }).catch(error => {
          console.log(error)
          reject()
        })
      })
    }
  }
  // persist: {
  //   storage: sessionStorage,
  // }
}
);