import { defineStore } from 'pinia'
import { useInputStore } from './input'

const inputStore = useInputStore()

export const useOrdersStore: any = defineStore('orders', {
  state: () => ({
    orders: null,
    products: null,
    mappedProducts: [],
    selectedProducts: [],
    statusValue: {},
    statusOptions: [
      {
        label: 'В проссесе',
        id: 5,
      },
      {
        label: 'Оплачен',
        id: 1,
      },
      {
        label: 'Отменен',
        id: 2,
      },
      {
        label: 'В ожидании',
        id: 3,
      }
    ],
  }),

  actions: {
    getOrders() {
      import("src/fake-data/orders").then((orders) => {
        this.orders = orders.default
      })
    },
    createOrder(userData: any) {
      const data = {
        user: {
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          phone: userData.phone,
        },
        order: [
          ...this.mapSelectedProducts(userData.address)
        ]
      }
      return api.post('orders', data)
    },
    getProducts() {
      import("src/fake-data/products").then((products) => {
        this.products = products.default
        this.mapProducts()
      })
    },
    mapProducts() {
      this.products.map(p => {
        console.log(p)
        this.mappedProducts.push({
          id: p.id,
          label: p.name,
          price: p.price,
          amount: p.count
        })
      })
    },
    addProduct() {
      this.selectedProducts.push({
        label: '',
        amount: 0,
        cost: 0
      })
    },
    mapSelectedProducts(address: string) {
      const orders: any[] = []
      this.selectedProducts.map(p => {
        orders.push({
          address,
          count: p.amount,
          product_id: p.id,
          status_id: this.statusValue.id,
          price: p.cost,
          comment: "string",
          country: "string",
          region: "string",
          payment_type: "cash",
          floor: "string",
          delivery_type: "free"
        })
      })
      return orders
    }
  }
})
