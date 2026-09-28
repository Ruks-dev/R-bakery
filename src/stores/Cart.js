import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.qty, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.qty, 0),
  },

  actions: {
    addItem(product) {
      const existing = this.items.find((item) => item.id === product.id)

      if (existing) {
        existing.qty += 1
        return
      }

      this.items.push({ ...product, qty: 1 })
    },

    increment(id) {
      const item = this.items.find((entry) => entry.id === id)
      if (item) item.qty += 1
    },

    decrement(id) {
      const item = this.items.find((entry) => entry.id === id)
      if (!item) return

      if (item.qty > 1) {
        item.qty -= 1
        return
      }

      this.items = this.items.filter((entry) => entry.id !== id)
    },

    removeItem(id) {
      this.items = this.items.filter((entry) => entry.id !== id)
    },

    clearCart() {
      this.items = []
    },
  },
})
