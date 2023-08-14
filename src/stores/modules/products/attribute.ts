import { defineStore } from 'pinia'

export const useAboutStore = defineStore('attribute', {
  state: () => ({
    data: [],
  }),
  actions: {
    async getAtributes() {
      import("src/fake-data/attributes").then(res => {
        this.data = res.default
      })
    },
  }
})
