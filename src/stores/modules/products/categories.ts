import { defineStore } from 'pinia'
import { Notify } from 'quasar'


export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [],
  }),

  actions: {
    getCategories() {
      import("src/fake-data/categories").then(res => {
        this.categories = res.default
      })
    },
  }
})
