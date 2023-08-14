import { defineStore } from 'pinia'
interface IFeedbackCreate {
  name: string
  phone: string
}

export const useFeedbackStore = defineStore('feedback', {
  state: () => ({
    feedbackList: [],
  }),

  actions: {
    getFeedbackList() {
      import("src/fake-data/feedback").then(res => {
        this.feedbackList = res.default
      })
    },
  }
})
