import { defineStore } from 'pinia'

export const useListStore = defineStore('lists', {
  state: () => ({
    listData: [],
  }),
  actions: {
    async getList() {
      import("src/fake-data/products").then(res => {
        this.listData = res.default
      })
    },
    getStatusClass(status: string) {
      if (status === 'Новинки') {
        return 'positive text-white'
      } else if (status === 'Хит продаж') {
        return 'red-6 text-white'
      } else if (status === 'Обычный') {
        return 'grey-4 text-black'
      } else {
        return 'red-4 text-white'
      }
    }
  }
})
