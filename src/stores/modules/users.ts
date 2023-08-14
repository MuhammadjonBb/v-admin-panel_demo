import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
  }),

  actions: {
    getUsers() {
      import("src/fake-data/users").then(res => {
        this.users = res.default
      })
    },
    createUser(data: object) {
      return api.post('users', { ...data }).then(() => {
        this.getUsers()
      })
    },
    editUser(data: object) {
      return api.put('users', { data }).then(() => {
        this.getUsers()
      })
    },
    deleteUser(id: number) {
      return api.delete(`users/${id}`).then(() => {
        this.getUsers()
      })
    }
  }
})
