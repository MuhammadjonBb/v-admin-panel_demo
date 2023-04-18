import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: null,
  }),

  actions: {
    getCategories() {
      api.get('categories').then(r => {
        console.log(r)
        this.categories = r.data
      })
    }
  }
})